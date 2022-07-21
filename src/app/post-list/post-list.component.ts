import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts$: Observable<any>;
  selectedPost: number = 0;

  @Output('postChange') postChange = new EventEmitter<{ id: number }>();

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts$ = this.postService.getPosts().pipe(
      tap((posts) => {
        if (posts && posts.length) {
          this.selectedPost = posts[0].id;
          this.postChange.emit({ id: this.selectedPost  });
        }
      })
    );
  }

  onSelectPost(id: number) {
    this.selectedPost = id;
    this.postChange.emit({ id });
  }
}
