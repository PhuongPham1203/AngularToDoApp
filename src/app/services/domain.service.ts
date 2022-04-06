import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  constructor() { }

  private urlDatabase = "http://localhost:3000";

	public getUrlDatabase() {
		return this.urlDatabase;
	}

}
