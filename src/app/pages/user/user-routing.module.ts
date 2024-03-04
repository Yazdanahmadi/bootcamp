import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {UserAddComponent} from "./user-add/user-add.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {UserListComponent} from "./user-list/user-list.component";

const routes: Routes = [
  {
    path: '',
    component: Usercomponent,
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
