import { Component, OnInit } from '@angular/core';
import {Mission} from '../mission';
import { MissionService } from '../mission.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mission-create',
  templateUrl: './mission-create.component.html',
  styleUrls: ['./mission-create.component.css']
})
export class MissionCreateComponent implements OnInit {

  constructor(private missionService: MissionService, private router: Router) { }

  ngOnInit() {
  }

  add(missionName: string): void {
    console.log(missionName);
    missionName = missionName.trim();
    if (!missionName) { return; }
    this.missionService.addMission({ missionName } as Mission)
      .subscribe(() => this.router.navigateByUrl('/missions'));
  }

}
