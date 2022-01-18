import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

import { Box } from '../box';
import { BoxService } from '../box.service';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {
  boxes: Box[] = [];
  
  // properties for css
  gradient: string = '';
  displayType: string = 'none';
  selectedBox: number = -1;

  constructor(private boxService: BoxService) { }

  ngOnInit(): void {
    this.getBoxes();
    this.gradient = 'var(--gradient1)';
  }

  getBoxes(): void {
    this.boxService.getBoxes()
    .subscribe(boxes => this.boxes = boxes);
  }

  pickGradient(boxId: number): void {
    let gradientId = this.getRandomInt(6);

    // show gradient in card
    this.gradient = `var(--gradient${gradientId.toString()}) center/180%`;
    
    // show image of box associated with card
    // -10 required because object ids start at 11
    this.selectedBox = boxId-10;
  }

  removeGradient(): void {
    // remove gradient
    this.gradient = 'white';
    // hide image
    this.selectedBox = -1;
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }
}