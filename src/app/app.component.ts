import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todo List'
  imageCoverUrl = '/images/todo-list.png' 

  onImageClick() {
    alert()
  }

  major = 'Programmer'

  items = [
    "A","B","C","D","E"
  ]

  size = "M"

  now = new Date()

  constructor(private http: HttpClient) {
    http.get('https://668f849cc0a7969efd98177e.mockapi.io/todo/v1/topic').subscribe(
      {
        next(result) {
          console.log(result)
        }
      }
    )
  }

}
