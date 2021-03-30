import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises-creation-page',
  templateUrl: './exercises-creation-page.component.html',
  styleUrls: ['./exercises-creation-page.component.css']
})
export class ExercisesCreationPageComponent implements OnInit {
  @Input() state;

  constructor() { }

  ngOnInit(): void {
  }

}
