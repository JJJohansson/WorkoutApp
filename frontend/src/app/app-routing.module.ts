import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { WorkoutCreationComponent } from './workout-creation/workout-creation.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'create', component: WorkoutCreationComponent }
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
