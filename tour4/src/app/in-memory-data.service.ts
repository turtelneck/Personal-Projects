import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Box } from './box';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const boxes: Box[] = [
      { id: 11, name: 'Stō Stacker, Mark II', weight: 7 },
      { id: 12, name: 'Stō Stacker, Mark I', weight: 8 },
      { id: 13, name: 'Big Stō', weight: 17 },
      { id: 14, name: 'Big Big Stō', weight: 23 },
      { id: 15, name: 'Old Stō L', weight: 1 },
      { id: 16, name: 'Old Stō M', weight: 1 },
      { id: 17, name: 'Old Stō S', weight: 1 },
      { id: 18, name: 'Stō Zerō', weight: 0 }
    ];
    return {boxes};
  }

  // Overrides the genId method to ensure that a box always has an id.
  // If the boxes array is empty,
  // the method below returns the initial number (11).
  // if the boxes array is not empty, the method below returns the highest
  // box id + 1.
  genId(boxes: Box[]): number {
    return boxes.length > 0 ? Math.max(...boxes.map(box => box.id)) + 1 : 11;
  }
}