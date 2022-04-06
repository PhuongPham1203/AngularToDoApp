import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { DomainService } from 'src/app/services/domain.service';
import { HttpApiService } from 'src/app/services/http-api.service';

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

	@Input() job: any;

	constructor(

		private domain: DomainService,
		private httpApi: HttpApiService,
		private dataService: DataService
	) { }

	ngOnInit(): void {
	}

	public DeleteWorkSpace() {
		var url = this.domain.getUrlDatabase() + '/kanban/' + this.job.id;

		this.httpApi.deleteAPIWithData(url).subscribe((data) => {

			var currentData = this.dataService.GetListWorkSpace();
			currentData = this.DeleteElement(currentData, this.job.id);
			//this.dataService.UpdateListWorkSpace(currentData);
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

}
