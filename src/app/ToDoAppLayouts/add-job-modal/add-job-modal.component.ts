import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Job } from 'src/app/models/job.model';
import { DataService } from 'src/app/services/data.service';
import { DomainService } from 'src/app/services/domain.service';
import { HttpApiService } from 'src/app/services/http-api.service';

@Component({
	selector: 'app-add-job-modal',
	templateUrl: './add-job-modal.component.html',
	styleUrls: ['./add-job-modal.component.scss']
})
export class AddJobModalComponent implements OnInit {

	@ViewChild('contentModal') private contentModal!: TemplateRef<any>;
	
	public newWorkSpaceForm = new FormGroup({
		name : new FormControl(""),
		description : new FormControl("")
	});

	constructor(
		private ngbModal: NgbModal,
		private domain:DomainService,
		private httpApi:HttpApiService,
		private dataService : DataService
	) { }

	ngOnInit(): void {
		
	}
	ngAfterViewInit(){
		
	}

	private AddNewWorkSpace(){
		var url = this.domain.getUrlDatabase()+'/kanban';

		var input = JSON.stringify( this.newWorkSpaceForm.value );
		
		this.httpApi.postAPIWithData(url,input).subscribe((data) => {
			
			var listWS = this.dataService.GetListWorkSpace();
			
			listWS.push(data);
		
		});
	}

	public OpenModalAddJob() {
		this.newWorkSpaceForm.setValue({
			name:"",
			description:""
		})
		//console.log("click open modal");
		this.ngbModal.open(this.contentModal).result.then((result) => {

			this.AddNewWorkSpace();
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
