import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  userData:any;
  singleuserdata:any;
  constructor(private http:HttpClient) { }

  //get all users  details
  public getusers()
      {
        
          return this.http.get('http://localhost/users.php');
      }
  
  
      //add new user    
  public adduser(userData:any)
  {
    return this.http.post('http://localhost/users.php/'
  , userData).subscribe((res: Response) => {
    this.getusers();
  });
  }


  //delete user
  public deleteuser(userid:any)
  {
    return this.http.post('http://localhost/users.php/'
    , userid).subscribe((res: Response) => {});
  }

  //get single user
  public getsingleuser(userid:any)
  {
    return this.http.post('http://localhost/users.php/'
    , userid).subscribe((res: Response) => {
      this.singleuserdata = res[0];
      
      
    });
  }


  //update user
  public updateuser(userid)
  {
    return this.http.post('http://localhost/users.php/'
    , userid).subscribe((res: Response) => {});
  }
    
}