import { inject, Injectable } from '@angular/core';
import { forumPost, foruUser } from './app';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Forums {

 status:string="";
    errorMessage:string="";

 private readonly apiUrl = environment.api;
 private readonly apiUrlGetAllUser = environment.apiGetAllUser;
 private readonly apiUrlCreateUser = environment.apiCreateUser;
 private readonly apiDeleteUserById = environment.apiDeleteUserById;
 private readonly apiUpdateUser= environment.apiUpdateUser;
  private http=inject(HttpClient);
 private jsonHeaders = new HttpHeaders({'Content-Type':'application/json'});
  //constructor() { }
  

   getForums():Observable<forumPost[]>{
    return this.http.get<forumPost[]>(this.apiUrl,{
      headers:this.jsonHeaders
    })
    /*.pipe(
      map((raw)=> raw.reverse()) 
    );*/
  }

getForumUsers():Observable<foruUser[]>{
    return this.http.get<foruUser[]>(this.apiUrlGetAllUser,{
      headers:this.jsonHeaders
    })
    /*.pipe(
      map((raw)=> raw.reverse()) 
    );*/
  }


  addForum(forum:forumPost):Observable<forumPost>{
     return this.http.post<forumPost>(`${this.apiUrl}`,forum,{
      headers:this.jsonHeaders
     });
  }

 addForumUser(forumUser:foruUser):Observable<foruUser>{
     return this.http.post<foruUser>(`${this.apiUrlCreateUser}`,forumUser,{
      headers:this.jsonHeaders
     });
  }

   updateUser(forumUser:foruUser):Observable<foruUser[]>{
     return this.http.post<foruUser[]>(`${this.apiUpdateUser}`,forumUser);
  }

  updateForum(forum: forumPost):Observable<forumPost>{
        return this.http.put<forumPost>(`${this.apiUpdateUser}`,forum,{
      headers:this.jsonHeaders
     });
  }

  deleteForumUser(forumUser:foruUser):Observable<foruUser[]>{
    return this.http.delete<foruUser[]>(`${this.apiDeleteUserById}/${forumUser.id}`);
  }



}
