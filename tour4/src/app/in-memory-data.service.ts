import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Box } from './box';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const boxes: Box[] = [
      { 
        id: 10,
        name: 'Stō Prem Mk I',
        price: '160.99',
        search: 'Sto Preem, Mk I',
        imageAddress: 'assets/img/sto-preem-mk-1.jpg',
        imageAltDescription: 'sto preem mk i' 
      },
      {
        id: 11,
        name: 'Stō Prem Lite',
        price: '110.99',
        search: 'Sto Preem Lite',
        imageAddress: 'assets/img/sto-preem-lite.jpg',
        imageAltDescription: 'sto preem lite'
      },
      {
        id: 12,
        name: 'Cargo Stō',
        price: '4150.99',
        search: 'Cargo Sto',
        imageAddress: 'assets/img/cargo-sto.jpg',
        imageAltDescription: 'cargo sto'
    },
      {
        id: 13,
        name: 'Card Stō',
        price: '5.99',
        search: 'Card Sto',
        imageAddress: 'assets/img/card-sto.jpg',
        imageAltDescription: 'card sto'
    },
      {
        id: 14,
        name: 'Scrapwood Stō',
        price: '12.99',
        search: 'Scrapwood Sto',
        imageAddress: 'assets/img/scrapwood-sto.jpg',
        imageAltDescription: 'scrapwood sto'
    },
      {
        id: 15,
        name: 'Scrap Stō',
        price: '1310.99',
        search: 'Scrap Sto',
        imageAddress: 'assets/img/scrap-sto.jpg',
        imageAltDescription: 'scrap sto'
    },
      {
        id: 16,
        name: 'Treasure Stō',
        price: '88.99',
        search: 'Treasure Sto',
        imageAddress: 'assets/img/treasure-sto.jpg',
        imageAltDescription: 'treasure sto'
    },
      {
        id: 17,
        name: 'Wally',
        search: 'Wally',
        price: 'priceless',
        imageAddress: 'assets/img/wally.jpg',
        imageAltDescription: 'wally the walrus' }
    ];
    return {boxes};
  }
}