import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { WorkoutCreationPageComponent } from './pages/workout-creation-page/workout-creation-page.component';
import { MyWorkoutsTabComponent } from './pages/main-page/my-workouts-tab/my-workouts-tab.component';
import { BrowseItemComponent } from './pages/main-page/browse-tab/browse-item/browse-item.component'
import { BrowseTabComponent } from './pages/main-page/browse-tab/browse-tab.component'
import { HistoryTabComponent } from './pages/main-page/history-tab/history-tab.component'
import { MyWorkoutsItemComponent } from './pages/main-page/my-workouts-tab/my-workouts-item/my-workouts-item.component';
import { ExercisesCreationPageComponent } from './pages/exercises-creation-page/exercises-creation-page.component';
import { ExerciseItemComponent } from './pages/workout-creation-page/exercise-item/exercise-item/exercise-item.component';

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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    WorkoutCreationPageComponent,
    BrowseTabComponent,
    MyWorkoutsTabComponent,
    HistoryTabComponent,
    BrowseItemComponent,
    MyWorkoutsItemComponent,
    ExercisesCreationPageComponent,
    ExerciseItemComponent
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
    FormsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
