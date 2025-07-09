import { inject, Injectable } from '@angular/core';
import { forumPost, foruUser } from './app';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Forums {
 private readonly apiUrl = environment.api;
 private readonly apiUrlGetAllUser = environment.apiGetAllUser;
 private readonly apiUrlCreateUser = environment.apiCreateUser;
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


  updateForum(forum: forumPost):Observable<forumPost>{
        return this.http.put<forumPost>(`${this.apiUrl}/${forum.id}`,forum,{
      headers:this.jsonHeaders
     });
  }

}
