import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserAddComponent} from "../user/user-add/user-add.component";
import {UserDetailComponent} from "../user/user-detail/user-detail.component";
import {UserEditComponent} from "../user/user-edit/user-edit.component";
import {UserListComponent} from "../user/user-list/user-list.component";

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'Add',
        component:UserAddComponent
      },
      {
        path: 'detail/:id',
        component: UserDetailComponent
      },
      {
        path: 'Edit',
        component:UserEditComponent
      },
      {
        path: 'List',
        component:UserListComponent

      },


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
