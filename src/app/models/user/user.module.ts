import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from '../add-user/add-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';

const routes: Routes = [
  {path: 'adduser', component: AddUserComponent},
  {path: 'edituser', component: EditUserComponent}
]

@NgModule({
  declarations: [
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
