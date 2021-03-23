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
import { BrowseComponent } from './browse/browse.component';
import { MyWorkoutsComponent } from './my-workouts/my-workouts.component';
import { HistoryComponent } from './history/history.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowseCardComponent } from './browse-card/browse-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    WorkoutCreationComponent,
    BrowseComponent,
    MyWorkoutsComponent,
    HistoryComponent,
    BrowseCardComponent
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
