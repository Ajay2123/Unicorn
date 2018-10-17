import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { MaterialModule } from '../shared/material.module';
import { FormsModule} from'@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
import {HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path:'',component:ContactmanagerAppComponent,
              children:[
                {path:':id',component:MainContentComponent},
                {path:'',component:MainContentComponent}
              ]},
 
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent, 
    MainContentComponent, 
    SidenavComponent],

  providers:[
      UserService]
})
export class ContactmanagerModule { }
