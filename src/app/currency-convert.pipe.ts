import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvert'
})
export class CurrencyConvertPipe implements PipeTransform {

  transform(value: number, currency: string): number {
    if (currency === 'USD') { return value * 60; }
    if (currency === 'UAH') { return value / 0.4; }
    if (currency === 'KGS') { return value; }
    return null;
  }

}
