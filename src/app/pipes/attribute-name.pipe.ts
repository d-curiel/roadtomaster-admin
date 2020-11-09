import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'attributeName'
})
export class AttributeNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.split('_').map((word) => word.toLocaleUpperCase()).join(' ');
  }

}
