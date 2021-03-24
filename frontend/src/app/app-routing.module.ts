import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { WorkoutCreationPageComponent } from './workout-creation-page/workout-creation-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'create', component: WorkoutCreationPageComponent }
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
