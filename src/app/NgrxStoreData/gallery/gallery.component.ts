import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { pipe } from "rxjs";
import { galleryByAlbumId, uniqueAlbumIds } from "../store/gallery.selector";
import { GalleryModel } from "./gallery.model";
import { GalleryService } from "./gallery.service";


@Component({
	templateUrl: './gallery.component.html',
	selector: 'gallery'
})
export class GalleryComponent implements OnInit {

	public albumSelectedId = -1;
	public albumIds$:any = null;
	public allAlbums$:any = null;

	constructor(
		private store: Store<{ gallery: GalleryModel[] }>,
		private galleryService: GalleryService
	) { }

	ngOnInit(): void {
		this.galleryService.loadGallery();

		this.albumIds$ = this.store.pipe(select(uniqueAlbumIds));
		this.allAlbums$ = this.store.pipe(select(galleryByAlbumId(this.albumSelectedId)));

	} 

	onAlbumChange(value:number){
		//console.log(value);
		this.allAlbums$ = this.store.pipe(select(galleryByAlbumId(value)));
	}

}