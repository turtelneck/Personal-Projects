import { Component, OnInit } from '@angular/core';

import { Box } from '../box';
import { BoxService } from '../box.service';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {
  boxes: Box[] = [];

  constructor(private boxService: BoxService) { }

  ngOnInit(): void {
    this.getBoxes();
  }

  getBoxes(): void {
    this.boxService.getBoxes()
    .subscribe(boxes => this.boxes = boxes);
  }

  add(name: string, weight: number): void {
    name = name.trim();
    if (!name || !weight) { return; }
    this.boxService.addBox({ name, weight } as Box)
      .subscribe(box => {
        this.boxes.push(box);
      });
  }
}