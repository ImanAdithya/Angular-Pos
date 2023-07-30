import { EmployeeModel } from './employee-dash-board-model';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-employee-dash-board',
  templateUrl: './employee-dash-board.component.html',
  styleUrls: ['./employee-dash-board.component.css']
})
export class EmployeeDashBoardComponent implements OnInit {


  formValue !:FormGroup;

   employeeModelObj : EmployeeModel=new EmployeeModel();

   employeeData ! :any;

  constructor(private formbuilder :FormBuilder,private api:ApiService){
  }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      mobile:[''],
      salary:['']
    })
    this.getAllEmployee();
  }

  postEmployeDetail(){
    this.employeeModelObj.firstName=this.formValue.value.firstName;
    this.employeeModelObj.lastName=this.formValue.value.lastName;
    this.employeeModelObj.email=this.formValue.value.email;
    this.employeeModelObj.mobile=this.formValue.value.mobile;
    this.employeeModelObj.salary=this.formValue.value.salary;

    console.log(this.employeeModelObj);

    this.api.postEmploye(this.employeeModelObj) .subscribe(res=>{
      console.log(res);
      alert("Employee Added Succuss");
      let ref=document.getElementById('cancel');
      ref?.click();
      this.getAllEmployee();
    },
    err=>{
      alert("Something went Wrong..");
    })
  }

  getAllEmployee(){
    this.api.getEmployee().subscribe(res=>{
      this.employeeData=res;
    })
  }

  deleteEmploye(row : any){
    this.api.deleteEmploye(row.id).subscribe(res=>{
      alert("Employee Delete Succuss");
      this.getAllEmployee();
    })
  }

}
