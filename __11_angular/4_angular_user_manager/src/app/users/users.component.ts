import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  data = [];
  constructor( private crudservice: CrudService){
    this.loaddata();
  }
//Get all users data
loaddata()
{
  //Get all usera details  
  this.crudservice.getusers().subscribe((res: any[])=>{
          
    this.data = res;
  });
}  
//Delete User
deleteuser(id:any)
{
  if(confirm("Are you sure to delete?")) {
  // Initialize Params Object
  var myFormData = new FormData();
   
      
  // Begin assigning parameters
  myFormData.append('deleteid', id);
  this.crudservice.deleteuser(myFormData);
  //sweetalert message popup
  Swal.fire({
    title: 'Hurray!!',
    text:   "User has been deleted successfully",
    icon: 'success'
  });
  this.loaddata();
}
}
  ngOnInit(): void {
  }
}