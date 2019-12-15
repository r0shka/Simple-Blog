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

import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

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
    MatSliderModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
