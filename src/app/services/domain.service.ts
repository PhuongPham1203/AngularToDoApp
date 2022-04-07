import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DomainService {

  constructor() { }

  private urlAPI = environment.urlAPI;

	public getUrlDatabase() {
		return this.urlAPI; 
	}

}
