import { createAction, props } from "@ngrx/store";
import { GalleryModel } from "../gallery/gallery.model";

export const retrievedGallery = createAction(
	'[Gallery API] API Success',
	props<{allGallery: GalleryModel[]}>()
)