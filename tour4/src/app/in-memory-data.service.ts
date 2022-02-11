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
        price: '330.99',
        description: 'A box for every occasion, especially if that occasion is showing up in the corner of a sci-fi TV set.',
        search: 'Sto Preem, Mk I',
        imageAddress: 'assets/img/sto-preem-mk-1.jpg',
        imageAltDescription: 'sto preem mk i' 
      },
      {
        id: 11,
        name: 'Stō Prem Lite',
        price: '220.99',
        description: 'For those without space for the Mk I, but that still want friends to question their tastes in storage furniture.',
        search: 'Sto Preem Lite',
        imageAddress: 'assets/img/sto-preem-lite.jpg',
        imageAltDescription: 'sto preem lite'
      },
      {
        id: 12,
        name: 'Cargo Stō',
        price: '6150.99',
        description: 'We don\'t actually stock these. If you buy from us, we\'ll just buy one and sell it to you at a premium.',
        search: 'Cargo Sto',
        imageAddress: 'assets/img/cargo-sto.jpg',
        imageAltDescription: 'cargo sto'
    },
      {
        id: 13,
        name: 'Card Stō',
        price: '30.99',
        description: 'A premium cardboard experience. You may not notice the difference, but your wallet will.',
        search: 'Card Sto',
        imageAddress: 'assets/img/card-sto.jpg',
        imageAltDescription: 'card sto'
    },
      {
        id: 14,
        name: 'Scrapwood Stō',
        price: '50.99',
        description: 'We don\'t know why you\'d want this ugly thing, but at least if you buy it we won\'t have to look at it anymore.',
        search: 'Scrapwood Sto',
        imageAddress: 'assets/img/scrapwood-sto.jpg',
        imageAltDescription: 'scrapwood sto'
    },
      {
        id: 15,
        name: 'Scrap Stō',
        price: '2610.99',
        description: 'We literally only stock these so that we can use its name as a play on words riffing off "Scrapwood Stō".',
        search: 'Scrap Sto',
        imageAddress: 'assets/img/scrap-sto.jpg',
        imageAltDescription: 'scrap sto'
    },
      {
        id: 16,
        name: 'Treasure Stō',
        price: '300.99',
        description: 'We messed up while making the locks, so these don\'t actually open. Yes, we\'re still selling them for $300.',
        search: 'Treasure Sto',
        imageAddress: 'assets/img/treasure-sto.jpg',
        imageAltDescription: 'treasure sto'
    },
      {
        id: 17,
        name: 'Wally',
        price: 'priceless',
        description: 'This is Wally. He loves you. And he\'s not for sale! How could we put a price on that smile?',
        search: 'Wally',
        imageAddress: 'assets/img/wally.jpg',
        imageAltDescription: 'wally the walrus' }
    ];
    return {boxes};
  }
}
