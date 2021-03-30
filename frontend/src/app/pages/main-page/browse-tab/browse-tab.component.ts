import { Component, OnInit } from '@angular/core';
import { BrowsePageWorkout } from 'src/app/models/browse-page-workout';

@Component({
  selector: 'app-browse-tab',
  templateUrl: './browse-tab.component.html',
  styleUrls: ['./browse-tab.component.css']
})
export class BrowseTabComponent implements OnInit {
  browseCardMocks: BrowsePageWorkout[] = [
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
    },
    {
      title: "Ab cruncher",
      content: "Core conditioning with a focus on the abs"
    },
    {
      title: "Ab cruncher",
      content: "Core conditioning with a focus on the abs"
    },
    {
      title: "Ab cruncher",
      content: "Core conditioning with a focus on the abs"
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
