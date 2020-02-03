import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeeComponent } from './employee/employee.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [{path:'',redirectTo:'/main',pathMatch:"full"},
{path:"main",component:MainComponent},
  {path:'departments',component:DepartmentsComponent},
{path:'employees',component:EmployeeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
