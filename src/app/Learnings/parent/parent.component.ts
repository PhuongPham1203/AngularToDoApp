import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ChildComponent } from '../child/child.component';
@Component({
	selector: 'app-parent',
	templateUrl: './parent.component.html',
	styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

	// using output and input
	public messageToChild = "Hello world";
	
	public messageFromChild = "";

	// using viewchild
	@ViewChild(ChildComponent) child:any;
	public messageFromChildViewChild = "";

	// using Data Service
	public messInput = "";
	public messageFromDataService = "";

	constructor(private data : DataService) { }

	ngOnInit(): void {
		this.data.currentMessage.subscribe(ms => this.messageFromDataService=ms);
	}

	getMess(){
		this.messageFromChildViewChild = this.child.messageToParentViewChild;
	}

	receiveMessage($event: any){
		this.messageFromChild = $event;
	}

	changeMessage(){
		this.data.changeMessage(this.messInput);
	}
}
