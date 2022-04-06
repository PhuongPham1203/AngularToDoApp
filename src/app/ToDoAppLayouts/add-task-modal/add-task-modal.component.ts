import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Todo } from 'src/app/models/todo.model';
import { DataService } from 'src/app/services/data.service';
import { DomainService } from 'src/app/services/domain.service';
import { HttpApiService } from 'src/app/services/http-api.service';

@Component({
	selector: 'app-add-task-modal',
	templateUrl: './add-task-modal.component.html',
	styleUrls: ['./add-task-modal.component.scss']
})
export class AddTaskModalComponent implements OnInit {


	@ViewChild('taskModal') private taskModal!: TemplateRef<any>;

	public newTaskForm = new FormGroup({
		name: new FormControl(),
		description: new FormControl(),
		note: new FormControl(),
		kanban_id: new FormControl(),
		status:new FormControl("ToDo")
	});

	constructor(
		private ngbModal: NgbModal,
		private domain: DomainService,
		private httpApi: HttpApiService,
		private dataService: DataService
	) { }

	ngOnInit(): void {

	}

	ngAfterViewInit() {

	}

	private AddNewTask() {
		var url = this.domain.getUrlDatabase() + '/todolist';

		var input = JSON.stringify(this.newTaskForm.value);
		
		this.httpApi.postAPIWithData(url, input).subscribe((data) => {

			var listTask = this.dataService.GetDetailTodoList();
			
			listTask.push(data);
		});
	}

	public OpenModalAddTask(data: any) {

		this.newTaskForm.setValue({
			kanban_id: data.kanban_id,
			name: data.name,
			description: data.description,
			note: data.note,
			status:"ToDo"
		})

		this.ngbModal.open(this.taskModal).result.then((result) => {

			this.AddNewTask();
			//console.log(result);
		}, (reason) => {
			//console.log(this.GetDismissReason(reason));
		});
	}

	private GetDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return "click ESC";
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return "Click Back Ground";
		} else {
			return "Reason: " + reason;
		}
	}
}
