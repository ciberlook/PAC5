import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AnimeDTO } from '../model/animeDTO/anime.dto';
import { ProgressSpinnerComponent } from '../component/base/progress-spinner/progress-spinner.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PageDTO } from '../model/pageDTO/page.dto';
import { DomSanitizer } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private http:HttpClient, private dialog:MatDialog, private sanitizer:DomSanitizer) { }

  getAllPages():Observable<PageDTO> {
    return this.http.get<{pagination:any,data:any}>('https://api.jikan.moe/v4/anime').pipe(
      map((response:{pagination:any,data:any[]})=>{
        return {
          last_visible_page:response.pagination.last_visible_page,
          has_next_page:response.pagination.has_next_page,
          current_page:response.pagination.current_page,
          items:{
            count:response.pagination.items.count,
            total:response.pagination.items.total,
            per_page:response.pagination.items.per_page
          }
        }
      })
    )
  }

  getAllItems():Observable<AnimeDTO[]> {
    let dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
      panelClass: 'transparent',
      disableClose: true,
    });
    return this.http.get<{pagination:any,data:any[]}>('https://api.jikan.moe/v4/anime').pipe(map((response:{pagination:any,data:any[]})=>{
      const result:AnimeDTO[]=response.data.map((item:any)=>{
        dialogRef.close();
        return {
          id:item.mal_id,
          title:item.title,
          url:item.url,
          image:item.images.jpg,
          trailer:item.trailer.url,
          type:item.type,
          synopsis:item.synopsis,
          episodes:item.episodes,
          source:item.source,
          aired:item.aired.prop.from.day+"-"+item.aired.prop.from.month+"-"+item.aired.prop.from.year+" / "+item.aired.prop.to.day+"-"+item.aired.prop.to.month+"-"+item.aired.prop.to.year,
          duration:item.duration,
          popularity:item.popularity,
          licensors:item.licensors
        }
      })
      return result;
    }))
  }

  getAnimeById(id:String):Observable<AnimeDTO> {
    let dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
      panelClass: 'transparent',
      disableClose: true,
    });
    return this.http.get<any>('https://api.jikan.moe/v4/anime/'+id).pipe(map((item:any)=>{
      dialogRef.close();
      return {
        id:item.data.mal_id,
        title:item.data.title,
        url:item.data.url,
        image:item.data.images.jpg,
        trailer: this.sanitizer.bypassSecurityTrustResourceUrl(item.data.trailer.url) as string,
        type:item.data.type,
        synopsis:item.data.synopsis,
        episodes:item.data.episodes,
        source:item.data.source,
        aired:item.data.aired.prop.from.day+"-"+item.data.aired.prop.from.month+"-"+item.data.aired.prop.from.year+" / "+item.data.aired.prop.to.day+"-"+item.data.aired.prop.to.month+"-"+item.data.aired.prop.to.year,
        duration:item.data.duration,
        popularity:item.data.popularity,
        licensors:item.data.licensors

      }
    }))
  }

  getAllItemsPerPage(page:number,limite:number):Observable<AnimeDTO[]> {
    let dialogRef: MatDialogRef<ProgressSpinnerComponent> = this.dialog.open(ProgressSpinnerComponent, {
      panelClass: 'transparent',
      disableClose: true,
    });
    return this.http.get<{pagination:any,data:any[]}>('https://api.jikan.moe/v4/anime?page='+page+'&limit='+limite).pipe(map((response:{pagination:any,data:any[]})=>{
      const result:AnimeDTO[]=response.data.map((item:any)=>{
        dialogRef.close();
        return {
          id:item.mal_id,
          title:item.title,
          url:item.url,
          image:item.images.jpg,
          trailer:item.trailer.url,
          type:item.type,
          synopsis:item.synopsis,
          episodes:item.episodes,
          source:item.source,
          aired:item.aired.prop.from.day+"-"+item.aired.prop.from.month+"-"+item.aired.prop.from.year+" / "+item.aired.prop.to.day+"-"+item.aired.prop.to.month+"-"+item.aired.prop.to.year,
          duration:item.duration,
          popularity:item.popularity,
          licensors:item.licensors
        }
      })
      return result;
    }))
  }

}
