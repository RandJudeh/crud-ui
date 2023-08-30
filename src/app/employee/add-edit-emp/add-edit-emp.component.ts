import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() emp:any;
  EmployeeId?:string;
  EmployeeName?:string;
  Department?:string;
  DateOfJoining?:string;
  PhotoFileName:string="anonymous.png";
  PhotoFilePath?:string=this.service.PhotoUrl+this.PhotoFileName;

  DepartmentsList:any=[];

  ngOnInit(): void {
    this.loadDepartmentList();
  }

  loadDepartmentList(){
    this.service.getAllDepartmentNames().subscribe((data:any)=>{
      this.DepartmentsList=data;

      this.EmployeeId=this.emp.employeeId;
      this.EmployeeName=this.emp.employeeName;
      this.Department=this.emp.department;
      this.DateOfJoining=this.emp.dateOfJoining;
      this.PhotoFileName=this.emp.photoFileName;
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    });
  }

  addEmployee(){
    var id=Math.floor(Math.random() * (1000 - 1+ 1)) +1;
    var val = {EmployeeId:id,
                EmployeeName:this.EmployeeName,
                Department:this.Department,
              DateOfJoining:this.DateOfJoining,
            PhotoFileName:this.PhotoFileName};

    this.service.addEmployee(val).subscribe(res=>{
      alert(res);
    });
  }

  updateEmployee(){
    var val = {EmployeeId:this.EmployeeId,
      EmployeeName:this.EmployeeName,
      Department:this.Department,
    DateOfJoining:this.DateOfJoining,
  PhotoFileName:this.PhotoFileName};
   console.log(this.PhotoFileName)

    this.service.updateEmployee(val).subscribe(res=>{
    alert(res.toString());
    });
  }


  // uploadPhoto(event:any){
  //   var file=event.target.files[0];
  //   const formData:FormData=new FormData();
  //   formData.append('uploadedFile',file,file.name);

  //   this.service.UploadPhoto(formData).subscribe((data:any)=>{
  //     this.PhotoFileName=data.toString();
  //     this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
  //   })
  // }
  uploadPhoto(event:any) {
    var file=event.target.files[0];
    const formData = new FormData();
    formData.append('file', file, file.name);
    console.log(file);
    console.log(this.PhotoFileName);
      console.log(this.PhotoFilePath);
      this.PhotoFileName=file.name;
      this.PhotoFilePath=file.name;
    return this.service.UploadPhoto(formData).subscribe((data:any)=>{
      
      console.log(this.PhotoFileName);
      console.log(this.PhotoFilePath);
      
    });
  }

}