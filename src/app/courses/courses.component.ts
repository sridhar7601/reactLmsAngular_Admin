import { Component } from '@angular/core';
import { environment } from '../../../environment';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
constructor(private http:HttpClient){

}

courses:any=[];
modalTitle="";
courseId = 0;
courseName = '';
description="";

ngOnInit(): void {
 this.refreshList()
 };

 refreshList(){
  this.http.get<any>(environment.API_URL+'courses').subscribe((data)=>{
    this.courses = data; // assign the received data to courses array
    console.log(data);
  });
}

addClick(){
  this.modalTitle = "Add Course"
  this.courseId=0;
  this.courseName="";
  this.description="";

}
editClick(cour:any){
  this.modalTitle = "Edit Course"
  this.courseId=cour.course_id;
  this.courseName=cour.course_name;
  this.description=cour.description;

}
}

