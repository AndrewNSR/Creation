import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  i = false;
  constructor() { }

  ngOnInit(): void {
  }

  /* opt(i) {
    if(i === false)
    {

    }
    else{

    }
  } */
}
