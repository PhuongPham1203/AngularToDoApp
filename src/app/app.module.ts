import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './Learnings/child/child.component';
import { ParentComponent } from './Learnings/parent/parent.component';
import { ToDoAppComponent } from './to-do-app/to-do-app.component';
import { ItemComponent } from './ToDoAppLayouts/item/item.component';
import { ToDoDetailComponent } from './to-do-detail/to-do-detail.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ContentInComponentComponent } from './contents/content-in-component/content-in-component.component';
import { ColumnJobComponent } from './ToDoAppLayouts/column-job/column-job.component';
import { ButtonsInTaskComponent } from './ToDoAppLayouts/buttons-in-task/buttons-in-task.component';
import { HttpClientModule } from '@angular/common/http';
import { AddJobModalComponent } from './ToDoAppLayouts/add-job-modal/add-job-modal.component';
import { AddTaskModalComponent } from './ToDoAppLayouts/add-task-modal/add-task-modal.component';

import {StoreModule} from '@ngrx/store';
import { galleryReducer } from './NgrxStoreData/store/gallery.reducer';
import { GalleryService } from './NgrxStoreData/gallery/gallery.service';
import { GalleryComponent } from './NgrxStoreData/gallery/gallery.component';


@NgModule({
	declarations: [
		AppComponent,
		TodoListComponent,
		TodoItemComponent,
		TodoInputComponent,
		HeaderComponent,
		FooterComponent,
		ChildComponent,
		ParentComponent,
		ToDoAppComponent,
		ItemComponent,
		ToDoDetailComponent,
		ContentProjectionComponent,
		ContentInComponentComponent,
		ColumnJobComponent,
		ButtonsInTaskComponent,
		AddJobModalComponent,
		AddTaskModalComponent,
		GalleryComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		NgbModule,
		ReactiveFormsModule,
		HttpClientModule,

		StoreModule.forRoot({
			gallery:galleryReducer
		})
	],
	providers: [
		GalleryService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
