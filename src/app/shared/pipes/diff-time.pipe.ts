import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'difftime'
})

export class DiffTimePipe implements PipeTransform {
  transform(value: string, ...args: any[]): any {
    const dateTime = new Date(value);
    const now = new Date();
    let diff = now.getTime() - dateTime.getTime();
    diff /= 1000; // Seconds
    if (diff < 60) {
      return diff.toFixed(0) + ' seconds ago';
    }
    diff /= 60; // Minutes
    if (diff < 60) {
      return diff.toFixed(0) + ' minutes ago';
    }
    diff /= 60; // Hours
    if (diff < 24) {
      return diff.toFixed(0) + ' hours ago';
    }
    return dateTime.toLocaleString();
  }
}