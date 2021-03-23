import { Component, Input, OnInit } from '@angular/core';
import { BrowseCard } from '../browse-card';

@Component({
  selector: 'app-browse-card',
  templateUrl: './browse-card.component.html',
  styleUrls: ['./browse-card.component.css']
})
export class BrowseCardComponent implements OnInit {
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
