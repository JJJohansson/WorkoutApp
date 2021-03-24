import { Component, Input, OnInit } from '@angular/core';
import { BrowseCard } from '../browse-card';

@Component({
  selector: 'app-browse-tab-workout',
  templateUrl: './browse-tab-workout.component.html',
  styleUrls: ['./browse-tab-workout.component.css']
})
export class BrowseTabWorkoutComponent implements OnInit {
  @Input() card: BrowseCard;
  cardTitle: string;
  cardContent: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.card);
    this.cardTitle = this.card.title;
    this.cardContent = this.card.content;
  }

}
