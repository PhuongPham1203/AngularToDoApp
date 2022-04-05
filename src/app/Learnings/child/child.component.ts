import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-child',
	templateUrl: './child.component.html',
	styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

	@Input() messageFromParent!: string;

	messageToParent:string = "Child send to parent!";
	@Output() messageEvent = new EventEmitter<string>();


	constructor() { }

	ngOnInit(): void {
	}

	public sendMessage(){
		this.messageEvent.emit(this.messageToParent);
	}

}
