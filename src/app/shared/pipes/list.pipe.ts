import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'list',
  standalone: true
})
export class ListPipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): unknown {
    return value.join(', ');
  }

}
