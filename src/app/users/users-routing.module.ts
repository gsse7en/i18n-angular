import { NgModule }             from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { LocalizeRouterModule } from 'localize-router';

const usersRoutes = [
  { path: 'users', children: [
    { path: '', pathMatch: 'full', component: UsersComponent },
    { path: ':id', component: UserComponent },
    { path: ':id/profile', component: ProfileComponent }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes),
    LocalizeRouterModule.forChild(usersRoutes)
  ],
  exports: [ RouterModule, LocalizeRouterModule ]
})
export class UsersRoutingModule { }
