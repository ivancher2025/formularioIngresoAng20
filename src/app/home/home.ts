import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { forumPost } from '../app';
import { FormsModule } from '@angular/forms';
import { Forums } from '../forums';

@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home  implements OnInit {

constructor(private forumService: Forums) { }

  forum: forumPost = {
    userId: 0,
    id: 0,
    title: '',
    body: '',
  };

  forums: forumPost[] = [];

  ngOnInit() {
    this.forumService.getForums().subscribe(data => {
      this.forums = data;
      console.log("Forums loaded: ", data);
    });
  }

  onSubmit(forum: forumPost) {
    console.log("Hola");
    forum.userId=1;
    forum.id=this.forums.length +1;
    this.forumService.addForum(forum).subscribe(newForm => {
      this.forums.unshift(newForm);
      console.log("New FOrum add: ",newForm);
    })
  }

}
