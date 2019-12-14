import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionListComponent} from './mission-list/mission-list.component';
import { MissionSearchComponent } from './mission-search/mission-search.component';
import { MissionDetailsComponent } from './mission-details/mission-details.component';
import {MissionCreateComponent} from './mission-create/mission-create.component';
import {MissionEditComponent} from './mission-edit/mission-edit.component';

const routes: Routes = [
  { path: 'missions', component: MissionListComponent },
  { path: 'search', component: MissionSearchComponent },
  { path: 'create', component: MissionCreateComponent },
  { path: 'edit/:id', component: MissionEditComponent },
  { path: 'mission/:id', component: MissionDetailsComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
