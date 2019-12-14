import { Component, OnInit } from '@angular/core';
import { Mission } from '../mission';
import { MISSIONS } from '../mock-missions';
import { MissionService } from '../mission.service';

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

  add(missionName: string): void {
    console.log(missionName);
    missionName = missionName.trim();
    if (!missionName) { return; }
    this.missionService.addMission({ missionName } as Mission)
      .subscribe(mission => {
        this.missions.push(mission);
      });
  }

  delete(mission: Mission): void {
    this.missions = this.missions.filter(h => h !== mission);
    this.missionService.deleteMission(mission).subscribe();
  }

}
