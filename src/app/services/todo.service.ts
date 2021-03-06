import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Filter } from '../models/filtering.model';
import { Todo } from '../models/todo.model'
import { LocalStorageService } from './local-storage.service';

@Injectable({
	providedIn: 'root'
})
export class TodoService {

	private static readonly TodoStorageKey = 'todos';
	private todos!: Todo[];
	private filteredTodos!: Todo[];
	private lengthSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
	private displayTodosSubject: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
	private currentFilter: Filter = Filter.All;

	todos$: Observable<Todo[]> = this.displayTodosSubject.asObservable();
	length$: Observable<number> = this.lengthSubject.asObservable();

	constructor(
		private storageService: LocalStorageService
	) { }

	public fetchFromLocalStorage() {
		this.todos = this.storageService.getValue<Todo[]>(TodoService.TodoStorageKey) || [];
		this.filteredTodos = [...this.todos.map(todo => ({ ...todo }))]; // cloneDeep
		this.updateTodosData();
	}

	public updateToLocalStorage() {
		this.storageService.setObject(TodoService.TodoStorageKey, this.todos);
		this.filterTodos(this.currentFilter, false);
		this.updateTodosData();
	}

	public filterTodos(filter: Filter, isFiltering: boolean = true) {

		this.currentFilter = filter;

		

		if (isFiltering) {
			this.updateTodosData()
		}
	}

	private updateTodosData() {
		this.displayTodosSubject.next(this.filteredTodos);
		this.lengthSubject.next(this.todos.length);
	}




}
