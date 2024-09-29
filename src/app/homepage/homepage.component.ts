import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  items:any=[]
  constructor(private ds:DataService,private rt:Router){

  }
  ngOnInit(): void {
    this.ds.menuService().then(res=>res.json()).then(data=>{
      this.items=data
      console.log(this.items)
    })
    
  }
  click(e:any){
    let did=e.target.id
    this.rt.navigate(['det',did])
  }
  addreview(e:any){
    let did=e.target.id
    this.rt.navigate(['rev',did])
  }
}
