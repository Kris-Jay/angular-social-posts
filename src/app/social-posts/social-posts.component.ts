import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  posts:Post[]=[
    {
      title:"First Thought",
      thought:"This is my first thought",
    },
    {
      title:"Second Thought",
      thought:"This is my second thought",
    },
    {
      title:"Third Thought",
      thought:"This is my third thought",
    },
    {
      title:"Fourth Thought",
      thought:"This is my fourth thought",
    },
    {
      title:"Fifth Thought",
      thought:"This is my fifth thought",
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onDelete=(index:number):void=>{
    this.posts.splice(index, 1)
  }

  onSubmit=(posts:Post):void=>{
    this.posts.unshift(posts);
  }
  
}
