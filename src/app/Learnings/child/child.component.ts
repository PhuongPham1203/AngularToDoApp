import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
	selector: 'app-child',
	templateUrl: './child.component.html',
	styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

	// using output and input
	@Input() messageFromParent!: string;

	messageToParent:string = "Child send to parent!";
	@Output() messageEvent = new EventEmitter<string>();

	// using view child
	messageToParentViewChild:string = "Child 2 parent : ViewChild";

	// using Data Service
	public messInput = "";
	public messageDataService = "";

	constructor(
		private data:DataService
	) { }

	ngOnInit(): void {
		this.data.currentMessage.subscribe(ms => this.messageDataService=ms);

	}

	public sendMessage(){
		this.messageEvent.emit(this.messageToParent);
	}

	changeMessage(){
		this.data.changeMessage(this.messInput);
	}

}
