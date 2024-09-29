import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  loginService(data:any){
    return fetch('http://127.0.0.1:8000/tauth', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})


  }
  menuService(){
    return fetch(`http://127.0.0.1:8000/mmenu/`, {
  method: 'GET',
  
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'Authorization':`Token ${localStorage.getItem("token")}`
  },
})


    

  }
  menuItemService(id:any){
    return fetch(`http://127.0.0.1:8000/mmenu/${id}/`, {
  method: 'GET',
  
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'Authorization':`Token ${localStorage.getItem("token")}`
  },
})


  }
  getReviewSer(id:any){
    
      return fetch(`http://127.0.0.1:8000/mmenu/${id}/get_reviews/`, {
    method: 'GET',
    
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem("token")}`
    },
  })
  
  }
  addReviewSer(id:any,data:any){
    return fetch(`http://127.0.0.1:8000/mmenu/${id}/add_reviews/`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':`Token ${localStorage.getItem("token")}`

      },
    })
  }

  

}
