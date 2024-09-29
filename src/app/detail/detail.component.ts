import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  mid:any=''
  dish:any=''
  review:any=''
  constructor(private ar:ActivatedRoute,private ds:DataService){
    this.ar.params.subscribe(data=>this.mid=data['id'])
  }
  ngOnInit(): void {
    this.ds.menuItemService(this.mid).then(res=>res.json()).then(data=>this.dish=data)
    this.ds.getReviewSer(this.mid).then(res=>res.json()).then(data=>this.review=data)
  }

}
