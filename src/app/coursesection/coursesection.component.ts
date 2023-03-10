import { Component } from '@angular/core';
import { environment } from '../../../environment';
import{HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-coursesection',
  templateUrl: './coursesection.component.html',
  styleUrls: ['./coursesection.component.css']
})
export class CoursesectionComponent {
  constructor(private http:HttpClient){

  }

  courses:any=[];

  ngOnInit(): void {
   this.refreshList()
   };

   refreshList(){
    this.http.get<any>(environment.API_URL+'course_sections').subscribe((data)=>{
      this.courses = data; // assign the received data to courses array
      console.log(data);
    });
  }

  }

