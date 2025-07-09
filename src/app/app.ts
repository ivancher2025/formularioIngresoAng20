import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'formularios';
}
export interface forumPost{
  userId:number;
  id:number;
  title:string;
  body:string;
}

export interface foruUser{
  userId:number;
  id:number;
  name:string;
  direccion:string;
  phone:string;
}

