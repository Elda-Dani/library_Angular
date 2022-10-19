import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addlibrary',
  templateUrl: './addlibrary.component.html',
  styleUrls: ['./addlibrary.component.css']
})
export class AddlibraryComponent implements OnInit {

  constructor(private myapi:ApiService) { }


  bookcode=""
  bookname=""
 booktype=""
 authorname=""
issuedate=""
status:boolean=false



readValues=()=>{
  let data={
    "bookcode":this.bookcode,
     "bookname":this.bookname,
    "booktype":this.booktype,
    "authorname":this.authorname,
   "issuedate":this.issuedate
  }
  console.log(data)
  this.myapi.addData(data).subscribe(
    (response)=>{
      console.log(response)
      alert("successfully added")
      this.bookcode=""
      this.bookname=""
    this.booktype=""
     this.authorname=""
    this.issuedate=""
    this.status=true
    }
  )

}

  ngOnInit(): void {
  }

}
