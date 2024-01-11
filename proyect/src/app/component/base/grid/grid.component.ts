import { Component, Input } from '@angular/core';
import { AnimeDTO } from 'src/app/model/animeDTO/anime.dto';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

  @Input() viewMode:string;
  @Input() animeList:AnimeDTO[];
  breakpoint:number;

  constructor(){
    this.viewMode="grid";
    this.breakpoint=1;
    this.animeList=[];
  }

  ngOnInit(): void {
    this.breakpoint=this.returnColumn(window.innerWidth);
  }

  onResize($event:Event):void {
    if ($event.target instanceof Window){
      this.breakpoint=this.returnColumn($event.target.innerWidth);
    }
  }

  private returnColumn(width:number):number{
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

}
