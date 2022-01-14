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
  gradient: string = '';

  constructor(private boxService: BoxService) { }

  ngOnInit(): void {
    this.getBoxes();
    this.gradient = 'var(--gradient1)';
  }

  getBoxes(): void {
    this.boxService.getBoxes()
    .subscribe(boxes => this.boxes = boxes);
  }

  pickGradient(): void {
    this.gradient = `var(--gradient${this.getRandomInt(6).toString()})`;
  }

  removeGradient(): void {
    this.gradient = 'white';
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }
}