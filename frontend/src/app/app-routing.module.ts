import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateArticleComponent } from './pages/create-article/create-article.component';
import { AboutComponent } from './about/about.component';
import { PrivaryComponent } from './pages/privary/privary.component';
import { AuthorComponent } from './pages/author/author.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DetailComponent } from './pages/detail/detail.component';

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
