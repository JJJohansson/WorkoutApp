import { Component, Input, OnInit } from '@angular/core';
import { BrowsePageWorkout } from 'src/app/models/browse-page-workout';

@Component({
  selector: 'app-browse-item',
  templateUrl: './browse-item.component.html',
  styleUrls: ['./browse-item.component.css']
})
export class BrowseItemComponent implements OnInit {
  @Input() card: BrowsePageWorkout;
  cardTitle: string;
  cardContent: string;

  constructor() { }

  ngOnInit(): void {
    this.cardTitle = this.card.title;
    this.cardContent = this.card.content;
  }

}
