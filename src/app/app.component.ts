import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from './services/todo.service';
import {map} from 'rxjs/operators';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	
	public hasTodo$!: Observable<boolean>;

	constructor(
		private todoService: TodoService
	) { }

	ngOnInit(){
		this.todoService.fetchFromLocalStorage();
		this.hasTodo$ = this.todoService.length$.pipe(map(length=>length>0));

	}
}
