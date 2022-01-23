import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Box } from './box';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const boxes: Box[] = [
      { id: 10, name: 'Stō Stacker, Mk II', weight: 7, imageAddress: 'assets/img/sto-stacker-mark-ii.jpg', imageAltDescription: 'sto stacker mark ii' },
      { id: 11, name: 'Stō Stacker, Mk I', weight: 8, imageAddress: 'assets/img/sto-stacker-mark-i.jpg', imageAltDescription: 'sto stacker mark i' },
      { id: 12, name: 'Big Stō', weight: 17, imageAddress: 'assets/img/old-sto-L.jpg', imageAltDescription: 'big sto box' },
      { id: 13, name: 'Big Big Stō', weight: 23, imageAddress: 'assets/img/old-sto-L.jpg', imageAltDescription: 'big big sto box' },
      { id: 14, name: 'Old Stō L', weight: 1, imageAddress: 'assets/img/old-sto-L.jpg', imageAltDescription: 'large cardboard box' },
      { id: 15, name: 'Old Stō M', weight: 1, imageAddress: 'assets/img/old-sto-M.jpg', imageAltDescription: 'medium cardboard box' },
      { id: 16, name: 'Old Stō S', weight: 1, imageAddress: 'assets/img/old-sto-S.jpg', imageAltDescription: 'small cardboard box' },
      { id: 17, name: 'Stō Zerō', weight: 0, imageAddress: 'assets/img/old-sto-L.jpg', imageAltDescription: 'sto zero box' }
    ];
    return {boxes};
  }
}