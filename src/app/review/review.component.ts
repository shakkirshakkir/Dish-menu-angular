import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  did:any=''
  reviewForm=this.fb.group({
    review:'',
    rating:''
  })
  constructor(private fb:FormBuilder,private ar:ActivatedRoute,private ds:DataService,private rt:Router){
    this.ar.params.subscribe(data=>this.did=data['id'])
   
    
  }
  submit(){
    console.log(this.reviewForm.value)
    this.ds.addReviewSer(this.did,this.reviewForm.value).then(res=>res.json()).then(data=>{
      if(data["msg"]=="OK"){
        alert("Review added successfully..")
      
        this.rt.navigate(['home'])
      }
    }).catch(err=>alert("Review already added.."))
  }

}
