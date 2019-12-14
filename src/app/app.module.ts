import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { MissionListComponent } from './mission-list/mission-list.component';
import { MissionDetailsComponent } from './mission-details/mission-details.component';
import { AppRoutingModule } from './app-routing.module';
import { MissionSearchComponent } from './mission-search/mission-search.component';
import { InMemoryDataService }  from './in-memory-data.service';
import { MissionCreateComponent } from './mission-create/mission-create.component';
import { MissionEditComponent } from './mission-edit/mission-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MissionListComponent,
    MissionDetailsComponent,
    MissionSearchComponent,
    MissionCreateComponent,
    MissionEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
