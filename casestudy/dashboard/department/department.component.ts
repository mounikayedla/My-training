import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Department} from 'src/app/model/department';
import { DepartmentService } from 'src/app/services/department.service';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  res:Department= new Department
  formValue!:FormGroup
  department:any
  

  constructor(private deptService:DepartmentService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formValue= this.formBuilder.group({
      departmentID:[''],
      departmentName:[''],
      desc:[''],
      no_of_Emp:['']
    })
    this.getDept();
   // this.addDeptto();
    this.deptService.getDeptList();
  }
  getDept(){
    this.deptService.getDeptList().subscribe(data =>{
      console.log(Object.values(data.alldept));
      this.department=data.alldept;
    });
  }
  
  adddeptto() {
  
    this.res.departmentID = this.formValue.value.departmentID;
    this.res.departmentName = this.formValue.value.departmentName;
    this.res.desc = this.formValue.value.desc;
    this.res.no_of_Emp = this.formValue.value.no_of_Emp; 

    this.deptService.addDeptList(this.res).subscribe(data => {
      console.log(data);
      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset;
      alert("Added Staff Successfully");
      this.getDept();
    })    
  }
  updateDept() {
    this.res.departmentID = this.formValue.value.departmentID;
    this.res.departmentName = this.formValue.value.departmentName;
    this.res.desc = this.formValue.value.desc;
    this.res.no_of_Emp = this.formValue.value.no_of_Emp; 

    this.deptService.updateDeptList(this.res).subscribe(data => {
      console.log(data);
      alert("Updated Staff")
      this.getDept();
      
    })
  }
  deleteDept(data:any) {
    this.deptService.deleteDeptList(data.departmentID).subscribe(data => {
      console.log(data);
     alert("Deleted Staff")
       //this.reservation = data.resList;
      this.getDept();
    })
 }
  onEditDept(data:any){
    this.formValue.controls['departmentID'].setValue(data.departmentID);
    this.formValue.controls['departmentName'].setValue(data.departmentName);
    this.formValue.controls['desc'].setValue(data.desc);
    this.formValue.controls['no_of_Emp'].setValue(data.no_of_Emp);
  }
}