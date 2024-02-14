import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{

  posts: Array<any>;

  constructor(private postService: PostService){
    this.posts = postService.postList;
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  onAdd(){
    this.postService.addPost();
  }

}
