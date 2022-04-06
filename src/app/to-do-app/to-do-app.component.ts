import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../services/data.service';
import { DomainService } from '../services/domain.service';
import { HttpApiService } from '../services/http-api.service';
import { AddJobModalComponent } from '../ToDoAppLayouts/add-job-modal/add-job-modal.component';

@Component({
	selector: 'app-to-do-app',
	templateUrl: './to-do-app.component.html',
	styleUrls: ['./to-do-app.component.scss']
})
export class ToDoAppComponent implements OnInit {

	public dataKanban = null;
	public openModalAddJob=false;

	@ViewChild(AddJobModalComponent) childComponentOpenAddModal!:AddJobModalComponent;
	
	constructor(
		private domain:DomainService,
		private httpApi:HttpApiService,
		private dataService : DataService
	) { }

	ngOnInit(): void {

		this.dataService.listWorkSpace.subscribe(ms=>this.dataKanban=ms);

		var url = this.domain.getUrlDatabase()+'/kanban?_sort=id&_order=desc';
		
		this.httpApi.getAPI(url).subscribe((data) => {
			this.dataService.UpdateListWorkSpace(data);
		});
		
		
	}

	public showAddWorkSpaceModal(){
		this.childComponentOpenAddModal.OpenModalAddJob();
	}

	

}
