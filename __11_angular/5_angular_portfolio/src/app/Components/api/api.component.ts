import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';
import { GetApiService } from 'src/app/get-api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  
  advice:string = "hello w";
 
  constructor(private api:GetApiService) { }

  ngOnInit(){
this.api.apiCall().subscribe((data)=>{
  // console.log('get api data', data);
  this.advice = (data['slip']).advice;

})
  }

}
