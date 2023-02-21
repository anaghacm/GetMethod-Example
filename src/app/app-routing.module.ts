import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsTableComponent } from './pages/posts-table/posts-table.component';
import { UsersTableComponent } from './pages/users-table/users-table.component';

const routes: Routes = [
  {
    path:'', component: UsersTableComponent
  },
  {
    path:'posts', component:PostsTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
