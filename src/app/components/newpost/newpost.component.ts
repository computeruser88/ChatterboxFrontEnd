import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { Post } from '../../post';
import { ProfileService} from '../../services/profile/profile.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

  private title: String;
  private content: String;
  private profile: any;
  // private posts: Post[];

  constructor(private auth: AuthService, private postService: PostService, private profileService: ProfileService) {
    this.profile = this.profileService.getProfile();
   }

  ngOnInit() {
    
  }

  onSubmit(){ 
    console.log(this.title);
    console.log(this.content);
    this.postService.newPost({
      id: 0,
      title: this.title,
      content: this.content, 
      imageUrl: null,
      user: {
        id: this.auth.userProfile.id,
        nickname: this.auth.userProfile.nickname,
        groups: []
      },
      group: {
        id: 0,
        name: null,
        users: []
      },
      votes: [],
      comments: []
    }).subscribe(post => console.log(post));
    console.log("Onsubmit method called");
  }

}
