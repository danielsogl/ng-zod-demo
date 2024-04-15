import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommentsService } from './services/comments.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private readonly commentsService = inject(CommentsService);

  ngOnInit(): void {
    this.commentsService.getCommentById(1).subscribe((posts) => {
      console.log(posts);
    });
  }
}
