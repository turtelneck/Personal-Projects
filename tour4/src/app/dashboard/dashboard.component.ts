import { Component, OnInit } from '@angular/core';
import { Box } from '../box';
import { BoxService } from '../box.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  boxes: Box[] = [];

  constructor(private boxService: BoxService) { }

  ngOnInit(): void {
    this.getBoxes();
  }

  getBoxes(): void {
    this.boxService.getBoxes()
      .subscribe(boxes => this.boxes = boxes.slice(1, 5));
  }
}