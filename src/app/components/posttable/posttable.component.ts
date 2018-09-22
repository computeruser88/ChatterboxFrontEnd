import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { Post } from '../../post';

@Component({
  selector: 'app-posttable',
  templateUrl: './posttable.component.html',
  styleUrls: ['./posttable.component.css']
})
export class PosttableComponent implements OnInit {

  posts: Post[] = [];
  
  constructor(private postService: PostService) { }

  ngOnInit() {
    this
    .postService
    .getPosts()
    .subscribe((data) => {
      this.posts = data;
  });
  }

}
