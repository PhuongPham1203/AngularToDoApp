import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
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
	constructor() { }

	ngOnInit(): void {
	}

	getMess(){
		this.messageFromChildViewChild = this.child.messageToParentViewChild;
	}

	receiveMessage($event: any){
		this.messageFromChild = $event;
	}
}
