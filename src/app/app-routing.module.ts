import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionListComponent} from './mission-list/mission-list.component';
import { MissionSearchComponent } from './mission-search/mission-search.component';
import { MissionDetailsComponent } from './mission-details/mission-details.component';

const routes: Routes = [
  { path: 'missions', component: MissionListComponent },
  { path: 'search', component: MissionSearchComponent },
  { path: 'mission/:id', component: MissionDetailsComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
