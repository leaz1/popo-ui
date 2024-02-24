import { Pipe, PipeTransform } from '@angular/core';
import { Tag } from '../models/tag.model';

@Pipe({
  name: 'list',
  standalone: true
})
export class ListPipe implements PipeTransform {

  transform(value: string[] | Tag[], ...args: unknown[]): unknown {
    return value.join(', ');
  }

}
