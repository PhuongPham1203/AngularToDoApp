import { createReducer, on } from '@ngrx/store';
import { GalleryModel } from '../gallery/gallery.model';
import { retrievedGallery } from './gallery.actions';

export const initialState: GalleryModel[] = [];

const _galleryReducer = createReducer(
	initialState,
	on(retrievedGallery, (state, { allGallery }) => {
		return [...allGallery];
	})
);

export function galleryReducer(state: any, actions: any) {
	return _galleryReducer(state, actions)
}
