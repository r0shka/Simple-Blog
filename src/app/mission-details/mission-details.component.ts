import { Component, OnInit, Input } from '@angular/core';
import { Mission } from '../mission';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MissionService} from '../mission.service';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.css']
})
export class MissionDetailsComponent implements OnInit {

  @Input() mission: Mission;

  constructor(private route: ActivatedRoute,
              private missionService: MissionService,
              private location: Location) { }

  ngOnInit() {
    this.getMission();
  }

  getMission(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.missionService.getMission(id)
      .subscribe(mission => this.mission = mission);
  }

  /**
   * Saves mission and navigates to previous view
   */
  save(): void {
    this.missionService.updateMission(this.mission)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
