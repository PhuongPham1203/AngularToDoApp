import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-parent',
	templateUrl: './parent.component.html',
	styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

	messageToChild = "Hello world";
	public messageFromChild = "";

	constructor() { }

	ngOnInit(): void {
	}

	receiveMessage($event: any){
		this.messageFromChild = $event;
	}
}
