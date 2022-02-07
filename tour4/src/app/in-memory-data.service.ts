import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Box } from './box';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const boxes: Box[] = [
      { id: 10, name: 'Stō Preem, Mk I', search: 'Sto Preem, Mk I', imageAddress: 'assets/img/sto-preem-mk-1.jpg', imageAltDescription: 'sto preem mk i' },
      { id: 11, name: 'Stō Preem Lite', search: 'Sto Preem Lite', imageAddress: 'assets/img/sto-preem-lite.jpg', imageAltDescription: 'sto preem lite' },
      { id: 12, name: 'Cargo Stō', search: 'Cargo Sto', imageAddress: 'assets/img/cargo-sto.jpg', imageAltDescription: 'cargo sto' },
      { id: 13, name: 'Card Stō', search: 'Card Sto', imageAddress: 'assets/img/card-sto.jpg', imageAltDescription: 'card sto' },
      { id: 14, name: 'Scrapwood Stō', search: 'Scrapwood Sto', imageAddress: 'assets/img/scrapwood-sto.jpg', imageAltDescription: 'scrapwood sto' },
      { id: 15, name: 'Scrap Stō', search: 'Scrap Sto', imageAddress: 'assets/img/scrap-sto.jpg', imageAltDescription: 'scrap sto' },
      { id: 16, name: 'Treasure Stō', search: 'Treasure Sto', imageAddress: 'assets/img/treasure-sto.jpg', imageAltDescription: 'treasure sto' },
      { id: 17, name: 'Wally', search: 'Wally', imageAddress: 'assets/img/wally.jpg', imageAltDescription: 'wally' }
    ];
    return {boxes};
  }
}