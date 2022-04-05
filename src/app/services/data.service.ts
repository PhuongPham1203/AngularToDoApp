import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	private messageSource = new BehaviorSubject<string>("Default message");

	public currentMessage = this.messageSource.asObservable();

	constructor() { }

	public changeMessage(message:string){
		this.messageSource.next(message);
	}
}
