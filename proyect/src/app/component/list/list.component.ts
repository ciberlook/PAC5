import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  viewMode:string;

  constructor(){
    this.viewMode="grid";
  }

  ngOnInit(): void {
    
  }
  

}
