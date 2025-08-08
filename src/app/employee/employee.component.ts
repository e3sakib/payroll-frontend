import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee:Employee= new Employee();
  employees:Employee[] = [];
  isSave:boolean= true
  empIndex:number= -1

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let gotEmp = history.state.emp
    if (gotEmp) {
      this.employee = gotEmp;
      this.isSave = false;
    }
  }

  onSubmit(){
    this.load();
  }
  load() {
    this.http.get<any>('http://localhost:8081/employee/getAll').subscribe(employees=>{
      console.log(employees+"M");
      
      this.employees=employees;
    }
    )
  }
  addEmployee(){
    console.log(this.employee);
    this.employees.push(this.employee)
    console.log(this.employee);

    const headers = {"content-Type":"application/json"}

    this.http.post<any>("http://localhost:8081/employee/save", JSON.stringify(this.employee), { 'headers': headers }).subscribe(data=> {
     
     console.log(data);
    }
     )

    alert("one employee is added")
  }

  resetForm() {
    this.employee = new Employee();
  }

  editEmployee(i: number) {
    this.empIndex = i
    //this.employee.name = this.employees[i].name
    this.employee.phone = this.employees[i].phone
    this.employee.salary = this.employees[i].salary 
    this.employee.address = this.employees[i].address
    this.isSave = false
  }
  update() {
    this.isSave = true
    this.employees[this.empIndex] = this.employee;
    this.resetForm()
  }
  updateEmployee(){
    
    const headers = { 'content-type': 'application/json' };
    this.http.post<any>("http://localhost:9988/category/update", JSON.stringify(this.employee), { headers: headers })
      .subscribe(data => {
        this.employee= new Employee();
        alert("Employee Updated Successfully")
        this.isSave = true
      }
      )
  }
  deleteEmployee(i: number) {
    this.employees = this.employees.filter((p, index) => i != index)
  }

}
