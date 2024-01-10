import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  @Input() viewMode:string;
  breakpoint:number;

  constructor(){
    this.viewMode="grid";
    this.breakpoint=1;
  }

  returnColumn(width:number):number{
    let column:number=1;
    if (width<=400)
        column=1;
      else if (width<=800)
        column=2;
      else if (width<=1300)
        column=3;
      else
        column=4;
      return column;
  }

  ngOnInit(): void {
    this.breakpoint=this.returnColumn(window.innerWidth);
  }

  onResize($event:Event):void {
    if ($event.target instanceof Window){
      this.breakpoint=this.returnColumn($event.target.innerWidth);
    }
  }


}
