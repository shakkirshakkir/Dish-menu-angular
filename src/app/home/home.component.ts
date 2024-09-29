import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loginForm=this.fb.group({
    "username":'',
    "password":''
  })
  constructor(private fb:FormBuilder,private ds:DataService,private rt:Router){

  }
  submit(){
    console.log(this.loginForm.value)
    this.ds.loginService(this.loginForm.value).then(res=>res.json()).then
    (data=>{
      if(data['token']){
        alert("Login successfull")
        localStorage.setItem("token",data['token'])
        this.rt.navigate(['home'])
      }
      else{
        alert("Login failed")
      }
    
      })
  }
    }


  


