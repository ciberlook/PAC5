import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { AnimeDTO } from 'src/app/model/animeDTO/anime.dto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('fadeInOut',[
      state(
        'void',
        style({
          opacity:0.2,
        })
      ),
      transition('void<=>*',animate(1500))
    ])
  ]
})
export class CardComponent {
  @Input() viewMode:string;
  @Input() anime:AnimeDTO;
  
  constructor(){
    this.viewMode="";
    this.anime={
      title:"",
      trailer:"",
      type:"",
      id:0,
      image:{
        image_url:"",
        small_image_url:"",
        large_image_url:""
      },
      url:"",
      synopsis:"",
      episodes:0,
      source:"",
      aired:"",
      duration:"",
      popularity:0,
      licensors:[]
    };
  }
}
