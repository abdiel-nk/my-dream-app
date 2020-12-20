import { Component } from '@angular/core';
import { from } from 'rxjs';
import { Employee } from './models/employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 employeeArray: Employee[]= [
   {id:1,name:"abdiel",country:"Peru"},
   {id:2,name:"nathaly",country:"Peru"}
 ];

 selectorEmployee: Employee = new Employee();



 addOrEdit(){
   if(this.selectorEmployee.id === 0){
    this.selectorEmployee.id=this.employeeArray.length +1;
    this.employeeArray.push(this.selectorEmployee);
   }   
   this.selectorEmployee=  new Employee();
 }
 openEdit(employee: Employee){
       this.selectorEmployee=employee;
 }
 delete(){
  
  if(confirm("Are you sure you want to delete this employee")){
    this.employeeArray= this.employeeArray.filter(x => x !=this.selectorEmployee);
    this.selectorEmployee = new Employee();
  }
 }
}
