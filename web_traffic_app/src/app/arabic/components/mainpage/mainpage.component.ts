import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  h = true;
  c = false;
  s = false;
  t = false;
  v = false;


  constructor() { }

  ngOnInit(): void {
  }


  removeall(){
    var arr = ['home' , 'courses' , 'signs' , 'tests' , 'videoes'];
    for (let i=0 ; i<arr.length; i++){
      document.getElementById(arr[i])?.classList.remove('active');
    }
  }

  falseftn(){
    this.h = false;
    this.c = false;
    this.s = false;
    this.t = false;
    this.v = false;
  }

  act(event:any){
    this.removeall();
    document.getElementById(event)?.classList.add('active');
    if (event[0] == 'h'){
      this.falseftn();
      this.h = true;
    }
    else if(event[0] == 'c'){
      this.falseftn();
      this.c = true;
    }
    else if(event[0] == 'v'){
      this.falseftn();
      this.v = true;
    }
  }

}
