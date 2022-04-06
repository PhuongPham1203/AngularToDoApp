import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Job } from '../models/job.model';
import { Status, Todo } from '../models/todo.model';
import { DataService } from '../services/data.service';
import { DomainService } from '../services/domain.service';
import { HttpApiService } from '../services/http-api.service';
import { AddTaskModalComponent } from '../ToDoAppLayouts/add-task-modal/add-task-modal.component';

@Component({
	selector: 'app-to-do-detail',
	templateUrl: './to-do-detail.component.html',
	styleUrls: ['./to-do-detail.component.scss']
})
export class ToDoDetailComponent implements OnInit {

	public dataDetail = new Job(0,"","");
	public dataTodoList = null;
	
	@ViewChild(AddTaskModalComponent) childComponentOpenAddModal!:AddTaskModalComponent;


	constructor(
		private route: ActivatedRoute,
		private ngbModal: NgbModal,
		private domain:DomainService,
		private httpApi:HttpApiService,
		private dataService : DataService
	) { }

	ngOnInit(): void {

		this.dataService.toDoList.subscribe(ms=>this.dataTodoList=ms);

		var index = this.route.snapshot.paramMap.get('id');

		var url = this.domain.getUrlDatabase()+"/todolist?kanban_id="+index;
		this.httpApi.getAPI(url).subscribe((data) => {
			
			this.dataService.UpdateDetailTodoList(data);
		});

		var url2 = this.domain.getUrlDatabase()+"/kanban/"+index;
		this.httpApi.getAPI(url2).subscribe((data) => {
			
			this.dataDetail = data;
			
		});
	}
	
	public ChangeStatusTo(id:number,status:string){
		
		var url = this.domain.getUrlDatabase()+"/todolist/"+id;
		var newForm = new FormGroup({
			
			status:new FormControl(status)
		});
		
		var data = JSON.stringify(newForm.value);
		
		this.httpApi.patchAPIWithData(url,data).subscribe((data) => {
			
			var newList = this.UpdateStatus(this.dataTodoList,id,status);
			
		});
	}

	private UpdateStatus(obj:any,id:number,status:string){
		obj.forEach((item: any, index: number) => {

			if (item.id === id) {
				obj[index].status = status;
			}
		});
		return obj;
	}

	public DeleteTask(id:number){
		
		var url = this.domain.getUrlDatabase()+"/todolist/"+id;
		this.httpApi.deleteAPIWithData(url).subscribe((data) => {
			var newList = this.DeleteElement(this.dataTodoList,id);
			this.dataService.UpdateDetailTodoList(newList);
		});
	}

	

	private DeleteElement(obj: any, id: number) {
		obj.forEach((item: any, index: number) => {

			if (item.id === id) {
				obj.splice(index, 1);
			}
		});
		return obj;
	}


	public AddTask(){
		var dataTask = new Todo(0,this.dataDetail.id,"","",Status.TODO,"");
		this.childComponentOpenAddModal.OpenModalAddTask(dataTask);
	}



}


