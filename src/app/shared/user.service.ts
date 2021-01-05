import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Log } from './log';
import { User } from './user.model';
import { map } from "rxjs/operators";
import { Key } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  userData : User= new User();
  readonly baseUrl='http://localhost:55985/api/Users';

   currentId: Log ={
     userId:'',
     userName:''
   };

  postUser()
{
  return this.http.post(this.baseUrl,this.userData);
}

 login(model:Log)
 {
     return this.http.post(this.baseUrl+'/login',model).pipe(
       map((response:any)=>{
            this.currentId.userId=response.userId;
            this.currentId.userName=response.userName;
            localStorage.setItem("key",JSON.stringify(response));
            return this.currentId;
       })
     );
 }


}
