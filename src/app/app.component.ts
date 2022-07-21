import { Component, OnInit, VERSION } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';
import {
  distinctUntilChanged,
  switchMap,
  delay,
  tap,
  catchError,
} from 'rxjs/operators';
import { PostService } from './post.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  post$: Observable<any>;
  selectedId = new Subject<number>();
  fetchPostError!: any;
  constructor(private postService: PostService) {}
  ngOnInit() {
    this.loadPost();
  }

  loadPost() {
    this.post$ = this.selectedId.pipe(
      distinctUntilChanged(),
      tap(() => {
        this.fetchPostError = null;
      }),
      switchMap((id) => this.postService.getPost(id)),
      catchError((error) => {
        console.log(error);
        this.fetchPostError = error.message;
        return throwError(error);
      })
    );
  }
}
