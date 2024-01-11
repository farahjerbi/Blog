import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { AboutComponent } from './about/about.component';
import { PrivaryComponent } from './privary/privary.component';
import { AuthorComponent } from './author/author.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'detail/:id',component:DetailComponent},
  {path:'create',component:CreateArticleComponent},
  {path:'about',component:AboutComponent},
  {path:'privacy',component:PrivaryComponent},
  {path:'author/:id',component:AuthorComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:NotfoundComponent}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
