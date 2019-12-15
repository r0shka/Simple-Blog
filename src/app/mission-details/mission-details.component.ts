import { Component, OnInit, Input } from '@angular/core';
import { Mission } from '../mission';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MissionService} from '../services/mission.service';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.css']
})
export class MissionDetailsComponent implements OnInit {

  exportAsConfig: ExportAsConfig = {
    type: 'pdf', // the type you want to download
    elementId: 'mission-file', // the id of html/table element
  }

  @Input() mission: Mission;

  constructor(private route: ActivatedRoute,
              private missionService: MissionService,
              private location: Location,
              private exportAsService: ExportAsService) { }

  ngOnInit() {
    this.getMission();
  }

  getMission(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.missionService.getMission(id)
      .subscribe(mission => this.mission = mission);
  }

  delete(mission: Mission): void {
    this.missionService.deleteMission(mission)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  exportPdf(): void {
    this.exportAsService.save(this.exportAsConfig, this.mission.missionName).subscribe(() => {
      // save started
    });
  }

}
