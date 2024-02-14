import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit{

  post!: Post;
  
  constructor(private postService:PostService, private route:ActivatedRoute){
      this.route.paramMap.subscribe(value => {
        this.post = this.postService.postList[Number(value.get('i'))];
      })
  }
  
  ngOnInit(): void {
  }

}
