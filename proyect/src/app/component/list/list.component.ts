import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AnimeDTO } from 'src/app/model/animeDTO/anime.dto';
import { PageDTO } from 'src/app/model/pageDTO/page.dto';
import { AnimeService } from 'src/app/services/anime-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  @Input() viewMode:string;
  anime:AnimeDTO[];
  page: PageDTO;
  longitud:number;
  pageSize:number;
  pageSizeOptions:number[];
  pageIndex:number;

  constructor(private animeService:AnimeService){
    this.viewMode="grid";
    this.anime=[];
    this.longitud=0;
    this.pageSize=0;
    this.pageSizeOptions=[];
    this.pageIndex=0;
    this.page={
      last_visible_page:0,
      has_next_page:false,
      current_page:0,
      items:{
        count:0,
        total:0,
        per_page:0
      }
    }
    
  }

  ngOnInit(): void {
    this.animeService.getAllItems().subscribe((animes)=>{
      this.anime=animes;
    })
    this.animeService.getAllPages().subscribe((pages)=>{
      this.page=pages;
      this.longitud=pages.items.total;
      this.pageSize=pages.items.count;
      this.pageSizeOptions=[5,10,20,25];
      
    })
  }
  
  getPage(ev:PageEvent){
    const page=ev.pageIndex+1;
    const limit=ev.pageSize;
    console.log(ev);
    this.animeService.getAllItemsPerPage(page,limit).subscribe((animes)=>{
      this.anime=animes;
    });
    
  }
  


}
