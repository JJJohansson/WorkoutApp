import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { WorkoutCreationPageComponent } from './pages/workout-creation-page/workout-creation-page.component';
import { ExercisesCreationPageComponent } from './pages/exercises-creation-page/exercises-creation-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'create/workout', component: WorkoutCreationPageComponent },
  { path: 'create/exercises', component: ExercisesCreationPageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
