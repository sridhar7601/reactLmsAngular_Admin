import { ParagraphComponent } from './paragraph/paragraph.component';
import { CoursesectionComponent } from './coursesection/coursesection.component';
import { CoursesComponent } from './courses/courses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:"courses",component:CoursesComponent},
  {
    path:"coursesection",component:CoursesectionComponent
  },{
    path:"paragraph",component:ParagraphComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
