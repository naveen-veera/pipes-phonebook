import { Component, OnInit } from '@angular/core';
import data from '../phone/data'
import{PhonePipe}  from '../phone.pipe'
@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css'],
  providers:[PhonePipe]
})
export class PhoneComponent implements OnInit {

  constructor( private phoneFormat:PhonePipe) { }
  country : Object[];
  number : number
  code:string
  result: string
  
  ngOnInit(): void {
    this.country=data;
  }
get(){
  this.result=this.phoneFormat.transform(this.code,this.number)
}
}
