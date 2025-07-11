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
    estado:string='';
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
    console.log("name: ",this.forumUser.name);
    console.log("dire: ",this.forumUser.direccion);
    console.log("tfn: ",this.forumUser.phone);
    this.forumService.addForumUser(forumUser).subscribe(newForm => {
      this.forumUsers.unshift(newForm);
      console.log("New FOrum add: ",newForm);
    })
  }


  removeUser(forumUser: foruUser) {
    console.log('Elimina registro id:',forumUser.id);
    this.forumService.deleteForumUser(forumUser);
    this.forumService.getForumUsers().subscribe(data => {
      this.forumUsers = data;
      console.log("Forums loaded: ", data);
    });
  }

}
