import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }



fetchData=()=>{
  this.myapi.viewData().subscribe(
    (data)=>{
      this.libraryData=data
    }
  )
}


deleteBook=(id:any)=>{
let data={
  "id":id
}
this.myapi.deleteBooks(data).subscribe(
  (response)=>{
    alert ("Deleted")
  }
)

this.fetchData()

}

libraryData:any=[]

  ngOnInit(): void {
  }

}
