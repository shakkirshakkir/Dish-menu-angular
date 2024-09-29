import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DetailComponent } from './detail/detail.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path:'home',component:HomepageComponent},
  {path:'det/:id',component:DetailComponent},
  {path:'rev/:id',component:ReviewComponent},
  {path:'',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
