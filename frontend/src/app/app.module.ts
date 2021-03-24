import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { WorkoutCreationComponent } from './workout-creation/workout-creation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { BrowseTabComponent } from './browse-tab/browse-tab.component';
import { MyWorkoutsTabComponent } from './my-workouts-tab/my-workouts-tab.component';
import { HistoryTabComponent } from './history-tab/history-tab.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowseTabWorkoutComponent } from './browse-tab-workout/browse-tab-workout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    WorkoutCreationComponent,
    BrowseTabComponent,
    MyWorkoutsTabComponent,
    HistoryTabComponent,
    BrowseTabWorkoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatSliderModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
