import { booleanAttribute, Component } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, DatePipe, DecimalPipe, ReactiveFormsModule],
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
  number = 1500.5

  name = new FormControl('')

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  })

  profileFormSubmit() {
    console.log(this.profileForm.valid)
    console.log(this.profileForm.value)
  }

  constructor(private http: HttpClient) {
  }

  service_path = 'https://668f849cc0a7969efd98177e.mockapi.io/todo/v1/topic'

  onGetAll() {
    console.log('--- onGetAll ---')

    let url = this.service_path
    this.http.get(url).subscribe(
      {
        next(result) {
          console.log(result)
        }
      }
    )
  }

  onGetById() {
    console.log('--- onGetById ---')

    let id = 1
    let url = `${this.service_path}/${id}`
    this.http.get(url).subscribe(
      {
        next(result) {
          console.log(result)
        }
      }
    )
  }

  onPost() {
    console.log('--- onPost ---')

    let url = this.service_path
    let body = {
       "topic": "angular 1"
    }
    this.http.post(url, body).subscribe({
      next(result) {
        console.log(result)
      }
    })
  }

  onPut() {
    console.log('--- onPut ---')

    let id = 11
    let url = `${this.service_path}/${id}`
    let body = {
      "topic": "angular 1 edit"
    }
    this.http.put(url, body).subscribe({
      next(result) {
        console.log(result)
      }
    })
  }

  onDelete() {
    console.log('--- onDelete ---')

    let id = 11
    let url = `${this.service_path}/${id}`
    this.http.delete(url).subscribe({
      next(result) {
        console.log(result)
      },
      error(err) {
        console.log(err.error)
        alert(`${id} ${err.error}`)
      }
    })
    
    
  }

}
