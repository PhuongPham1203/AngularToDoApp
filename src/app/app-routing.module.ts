import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ParentComponent } from './Learnings/parent/parent.component';
import { ToDoAppComponent } from './to-do-app/to-do-app.component';
import { ToDoDetailComponent } from './to-do-detail/to-do-detail.component';

const routes: Routes = [
	{path:"todoapp",component:ToDoAppComponent},
	{path:"tododetail/:id",component:ToDoDetailComponent},
	{path:"sendmessager",component:ParentComponent},

	{path:"content",component:ContentProjectionComponent},

	{path:"**",redirectTo:"",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
