import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trucanteText'
})
export class TrucanteTextPipe implements PipeTransform {

  transform(value: string): string {
    const length:number=value.length;
    let text:string=value;
    return (length>=23)?value.slice(0,20)+"...":value;
    
  }
}
