import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {

	private storage: Storage;

	constructor() {
		this.storage = window.localStorage;
	}

	public set(key: string, value: string): void {
		this.storage[key] = value;
	}

	public get(key: string): string {
		return this.storage[key] || false;
	}

	public setObject(key: string, value: any): void {
		if (!value) {
			return;
		}
		this.storage[key] = JSON.stringify(value);
	}

	public getObject(key: string): any {
		return JSON.parse(this.storage[key] || '{}');
	}

	public getValue<T>(key: string): T {
		const obj = JSON.parse(this.storage[key] || null);
		return <T>obj;
	}

	public remove(key:string):any{
		this.storage.removeItem(key);
	}

	public clear(){
		this.storage.clear();
	}

	get length():number{
		return this.storage.length;
	}

	get isStorageEmpty():boolean{
		return this.length === 0;
	}
}
