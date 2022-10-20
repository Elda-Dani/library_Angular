import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
export class SearchbookComponent implements OnInit {

  constructor(private myapi:ApiService) { }

bookcode=""

readValue=()=>{
  let data={
    "bookcode":this.bookcode
  }
  console.log(data)
  this.myapi.searchBook(data).subscribe(
    (resp)=>{
     this.data=resp

      this.bookcode=""
    }
  )
}

data:any=[]

  ngOnInit(): void {
  }

}
