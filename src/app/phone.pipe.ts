import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(code,number) {
   var result = code+"-"+number
    return result;
  }
}
