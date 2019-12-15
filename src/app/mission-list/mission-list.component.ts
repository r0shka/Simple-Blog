import { Component, OnInit } from '@angular/core';
import { Mission } from '../mission';
import { MissionService } from '../services/mission.service';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {

  missions: Mission[];

  constructor(private missionService: MissionService) { }

  ngOnInit() {
    this.getMissions();
  }

  getMissions(): void {
    this.missionService.getMissions()
      .subscribe(missions => this.missions = missions);
  }

  delete(mission: Mission): void {
    this.missions = this.missions.filter(h => h !== mission);
    this.missionService.deleteMission(mission).subscribe();
  }

}
