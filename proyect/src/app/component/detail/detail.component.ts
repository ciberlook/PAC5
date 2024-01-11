import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeDTO } from 'src/app/model/animeDTO/anime.dto';
import { AnimeService } from 'src/app/services/anime-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{

  anime:AnimeDTO;
  hidden:boolean;

  constructor(private activatedRouter:ActivatedRoute, private router:Router, private animeService:AnimeService){
    this.anime={
      id:0,
      title:"",
      url:"",
      image:{
        image_url:"",
        small_image_url:"",
        large_image_url:""
      },
      trailer:"",
      type:"",
      synopsis:"",
      episodes:0,
      source:"",
      aired:"",
      duration:"",
      popularity:0,
      licensors:[]

    }
    this.hidden=true;
  }

  ngOnInit(): void {
    const identifier=this.activatedRouter.snapshot.paramMap.get('id');
    if (identifier){
      //se lee del servicio el anime
      this.animeService.getAnimeById(identifier).subscribe((anime)=>{
        if (!anime){
          return this.router.navigateByUrl('/');
        }
        this.anime=anime;
        
        return anime;
      })
    } else {
      this.router.navigateByUrl('/');
    }
  }

  

  showDetails(){
    this.hidden=(this.hidden===true)?false:true;
  }

  goHome(){
    this.router.navigateByUrl('/');
  }

}
