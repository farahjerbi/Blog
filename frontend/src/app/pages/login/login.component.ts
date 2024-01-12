import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/models/author';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,private route:Router){}

  author=new Author();

  ngOnInit(): void {
  }
  

  login(){
    this.authService.login(this.author).subscribe(
      res=>{
        this.route.navigate(['/home'])     
      },
      err => {
        console.log("🚀 ~ LoginComponent ~ login ~ err:", err)
        
      }
    )
  }

}
