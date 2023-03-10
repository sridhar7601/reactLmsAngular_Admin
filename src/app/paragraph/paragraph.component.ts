import { Component } from '@angular/core';
import { environment } from '../../../environment';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent {
  constructor(private http:HttpClient){

  }

  courses:any=[];

  ngOnInit(): void {
   this.refreshList()
   };

   refreshList(){
    this.http.get<any>(environment.API_URL+'paragraphs').subscribe((data)=>{
      this.courses = data; // assign the received data to courses array
      console.log(data);
    });
  }

  }

