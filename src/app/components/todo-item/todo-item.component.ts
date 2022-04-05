import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
	selector: 'app-todo-item',
	templateUrl: './todo-item.component.html',
	styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

	public formTodoGroup!: FormGroup;
	public editInput = false;
	constructor(
		private formBuilder:FormBuilder
	) { }

	ngOnInit(): void {
		this.formTodoGroup = this.formBuilder.group({
			check:false,
			text:"Default Todo item"
		});
	}

	public OnFocus(value:boolean){
		this.editInput=value;
	}


}
