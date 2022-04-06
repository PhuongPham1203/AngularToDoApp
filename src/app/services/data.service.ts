import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class DataService {

	private messageSource = new BehaviorSubject<string>("Default message");

	public currentMessage = this.messageSource.asObservable();


	private workSpaceSource = new BehaviorSubject<any>(null);
	public listWorkSpace = this.workSpaceSource.asObservable();

	private toDoListSource = new BehaviorSubject<any>(null);
	public toDoList = this.toDoListSource.asObservable()
	constructor() { }

	public changeMessage(message:string){
		this.messageSource.next(message);
	}

	public UpdateListWorkSpace(data:any){
		this.workSpaceSource.next(data);
	}

	public GetListWorkSpace(){
		return this.workSpaceSource.getValue();
	}

	public UpdateDetailTodoList(data:any){
		this.toDoListSource.next(data);
	}	

	public GetDetailTodoList(){
		return this.toDoListSource.getValue();
	}

	

}
