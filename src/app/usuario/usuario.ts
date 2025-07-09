import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { Forums } from '../forums';
import { FormsModule } from '@angular/forms';
import { foruUser } from '../app';

@Component({
  selector: 'app-usuario',
  imports: [FormsModule,CommonModule],
  templateUrl: './usuario.html',
  styleUrl: './usuario.scss'
})
export class Usuario {
constructor(private forumService: Forums) { }

forumUser: foruUser = {
    userId: 0,
    id: 0,
    name: '',
    direccion: '',
    phone:''
  };

forumUsers:foruUser[]=[];

 ngOnInit() {
    this.forumService.getForumUsers().subscribe(data => {
      this.forumUsers = data;
      console.log("Forums loaded: ", data);
    });
  }

 onSubmit(forumUser: foruUser) {
  console.log("Hola Usuario");
    forumUser.userId=1;
    forumUser.id=this.forumUsers.length +1;
    this.forumService.addForumUser(forumUser).subscribe(newForm => {
      this.forumUsers.unshift(newForm);
      console.log("New FOrum add: ",newForm);
    })
  }

}
