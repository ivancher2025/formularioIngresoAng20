import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Forums } from '../forums';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { foruUser } from '../app';



@Component({
  selector: 'app-usuario',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './usuario.html',
  styleUrl: './usuario.scss'
})
export class Usuario {
  estado: string = '';
  constructor(private forumService: Forums) { }

  forumUser: foruUser = {
    userId: 0,
    id: 0,
    name: '',
    direccion: '',
    phone: ''
  };


  profileForm: FormGroup = new FormGroup({
    codigo: new FormControl(''),
    nombre: new FormControl('', [Validators.required]),
    direcc: new FormControl('', [Validators.required]),
    fono: new FormControl('', [Validators.required])
  })

  forumUsers: foruUser[] = [];

  ngOnInit() {
    this.forumService.getForumUsers().subscribe(data => {
      this.forumUsers = data;
      console.log("Usuarios cargados: ", data);
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      this.forumUser.name = this.profileForm.value.nombre;
      this.forumUser.direccion = this.profileForm.value.direcc;
      this.forumUser.phone = this.profileForm.value.fono;

      if (this.profileForm.value.codigo > 0) {
        console.log("Vamos a actualizar ");
        this.forumUser.id = this.profileForm.value.codigo
        this.forumUser.name = this.profileForm.value.nombre;
        this.forumUser.direccion = this.profileForm.value.direcc;
        this.forumUser.phone = this.profileForm.value.fono;
         this.forumService.updateUser(this.forumUser);
      } else {
        this.forumService.addForumUser(this.forumUser).subscribe(newForm => {
          this.forumUsers.unshift(newForm);
          console.log("Se crea nuevo usuario: ", newForm);
        })
      }
      this.profileForm.reset;
    }

  }

  removeUser(forumUser: foruUser) {
    console.log('Elimina registro id:', forumUser.id);
    this.forumService.deleteForumUser(forumUser);
    this.forumService.getForumUsers().subscribe(data => {
      this.forumUsers = data;
      console.log("Usuarios cargados:: ", data);
    });
  };

  updateUser(forumUser: foruUser) {
    console.log('Update registro id:', forumUser.id);
    this.profileForm.setValue({
      codigo: forumUser.id,
      nombre: forumUser.name,
      direcc: forumUser.direccion,
      fono: forumUser.phone,
    });
   

  };

  /*
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
 */


}
