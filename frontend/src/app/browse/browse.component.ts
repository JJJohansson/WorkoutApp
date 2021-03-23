import { Component, OnInit } from '@angular/core';
import { BrowseCard } from '../browse-card';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  browseCardMocks: BrowseCard[] = [
    {
      title: "Custom workout",
      content: "Your workout plan- exactly the way you like it"
    },
    {
      title: "Step it up",
      content: "Push yourself to the next level with Step it Up"
    },
    {
      title: "Upper body blast",
      content: "Intensive upper body blasts for more endurance"
    },
    {
      title: "Ab cruncher",
      content: "Core conditioning with a focus on the abs"
    },
    {
      title: "Ab cruncher",
      content: "Core conditioning with a focus on the abs"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
