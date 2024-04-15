import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CommentSchema, Comment } from '../models/comment.model';
import { verifyResponse } from '../utils/schema.validator';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private readonly http = inject(HttpClient);

  public getCommentById(id: number): Observable<Comment> {
    return this.http
      .get<Comment>('https://jsonplaceholder.typicode.com/comments/' + id)
      .pipe(verifyResponse(CommentSchema));
  }
}
