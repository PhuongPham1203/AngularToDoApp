import { Injectable, OnDestroy } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { DomainService } from "src/app/services/domain.service";
import { HttpApiService } from "src/app/services/http-api.service";
import { invokeGalleryAPI, retrievedGallery } from "../store/gallery.actions";
import { uniqueAlbumIds } from "../store/gallery.selector";
import { GalleryModel } from "./gallery.model";
@Injectable()

export class GalleryService {
	constructor(
		private httpApi: HttpApiService,
		private domain: DomainService,
		private store: Store<{ gallery: GalleryModel[] }>
	) { }
	public output = null;
	loadGallery() {

		
		var url = this.domain.getUrlDatabase() + "/photos"+"?_start=0&_limit=100";

		var temp = this.httpApi.getAPI(url).subscribe((data) => {

			this.store.dispatch(retrievedGallery({
				allGallery: data as GalleryModel[]
			}));
		});
		
		
		
	}

}	