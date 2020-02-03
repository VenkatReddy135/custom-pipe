import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

employees=[{"id":1,"name":"venkat","gender":"male"},
{"id":2,"name":"sam","gender":"female"},
{"id":3,"name":"prasanna","gender":"male"},
{"id":4,"name":"rishitha","gender":"female"},
{"id":5,"name":"ravi","gender":"male"}];
  constructor() { 
  }

  ngOnInit() {

}
}
