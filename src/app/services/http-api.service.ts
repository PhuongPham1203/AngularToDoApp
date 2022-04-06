import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class HttpApiService {

	private httpOptions = {
		headers: new HttpHeaders({
			"Content-Type": 'application/json',
			//"Access-Control-Allow-Origin":"*",
			//"Access-Control-Allow-Headers":"Content-Type",
			//"Access-Control-Allow-Methods":"GET,POST,OPTIONS,DELETE,PUT"
			// Authorization : "my-auth-token"
		})

	};
	constructor(
		private httpClient: HttpClient
	) { }

	// Send Get API without data
	public getAPI(api_url: string): Observable<any> {
		return this.httpClient.get<any>(api_url, this.httpOptions).pipe(catchError(this.handleError));
	}

	// Send Post API with data
	public postAPIWithData(api_url: string, data: any): Observable<any> {
		return this.httpClient.post<any>(api_url, data,this.httpOptions).pipe(catchError(this.handleError));

	}

	// Send Put API with data
	public putAPIWithData(api_url: string, data: any): Observable<any> {
		return this.httpClient.put<any>(api_url, data, this.httpOptions).pipe(catchError(this.handleError));

	}

	// Send Put API with data
	public patchAPIWithData(api_url: string, data: any): Observable<any> {
		return this.httpClient.patch<any>(api_url, data, this.httpOptions).pipe(catchError(this.handleError));

	}

	// Send Delete API with data
	public deleteAPIWithData(api_url: string): Observable<any> {
		return this.httpClient.delete<any>(api_url, this.httpOptions).pipe(catchError(this.handleError));

	}


	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			console.error('an error occurred:', error.error.message);
		} else {
			console.error(
				`Backend returned code ${error.status},` + ` body was: ${error.error}`
			);
		}

		return throwError("Somwthing bad happened; please try again later.");
	}
}
