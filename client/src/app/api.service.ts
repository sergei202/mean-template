import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(private http:HttpClient) { }

	// These are just shortcuts functions to make GET/POST requests shorter to type.
	httpGet(url):Promise<any> {
		return this.http.get(url).toPromise();
	}
	httpPost(url,data):Promise<any> {
		return this.http.post(url,data).toPromise();
	}


	/***********************************************************************************************************************
	 * Dummies
	 **********************************************************************************************************************/
	getDummies():Promise<any[]> {
		return this.httpGet(`/api/dummy`);
	}
	getDummy(id):Promise<any> {
		return this.httpGet(`/api/dummy/${id}`);
	}
	saveDummy(dummy):Promise<any> {
		return this.httpPost(`/api/dummy`, dummy);
	}
}
