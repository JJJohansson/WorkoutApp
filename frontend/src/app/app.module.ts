import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { WorkoutCreationPageComponent } from './workout-creation-page/workout-creation-page.component';
import { MyWorkoutsTabComponent } from './main-page/my-workouts-tab/my-workouts-tab.component';
import { BrowseItemComponent } from './main-page/browse-tab/browse-item/browse-item.component'
import { BrowseTabComponent } from './main-page/browse-tab/browse-tab.component'
import { HistoryTabComponent } from './main-page/history-tab/history-tab.component'

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MyWorkoutsItemComponent } from './main-page/my-workouts-tab/my-workouts-item/my-workouts-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    WorkoutCreationPageComponent,
    BrowseTabComponent,
    MyWorkoutsTabComponent,
    HistoryTabComponent,
    BrowseItemComponent,
    MyWorkoutsItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatSliderModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
