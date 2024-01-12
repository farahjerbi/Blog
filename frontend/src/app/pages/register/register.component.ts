import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/models/author';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  author: Author = new Author();
  constructor(private authService:AuthService , private router : Router){}
  ngOnInit(): void {
  }

  register(){
    const formData = new FormData();
    formData.append('firstname', this.author.firstname);
    formData.append('lastname', this.author.lastname);
    formData.append('email', this.author.email);
    formData.append('password', this.author.password);
    formData.append('about', this.author.about);
    formData.append('image', this.author.image);
  
    this.authService.register(formData).subscribe(
      res=>{
        this.router.navigate(['/login'])
      }
    )

  }
  select(e:any){
    this.author.image = e.target.files[0]
    console.log(this.author.image)
  }

}
