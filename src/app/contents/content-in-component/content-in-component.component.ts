import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
	selector: 'app-content-in-component',
	templateUrl: './content-in-component.component.html',
	styleUrls: ['./content-in-component.component.scss']
})
export class ContentInComponentComponent implements OnInit {

	@ContentChild('admin')
	adminTemplate!: TemplateRef<any>;

	constructor() { }

	ngOnInit(): void {
	}

}
