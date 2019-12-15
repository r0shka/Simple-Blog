import {Component, OnInit} from '@angular/core';
import {Mission} from '../mission';
import {MissionService} from '../mission.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mission-create',
  templateUrl: './mission-create.component.html',
  styleUrls: ['./mission-create.component.css']
})
export class MissionCreateComponent implements OnInit {

  minDate = new Date(1937, 0, 1);
  maxDate = new Date();

  cities: string[] = [
    'Paris', 'Marseille', 'Lyon', 'Nice', 'Montpellier', 'Strasbourg'
  ];

  regions: number[] = [
    75, 13, 83, 6, 34, 67
  ];

  mission: Mission;

  constructor(private missionService: MissionService, private router: Router) {
    this.mission = new Mission();
  }

  ngOnInit() {
  }

  add(): void {
    console.log(this.mission);
    if (!this.mission) {
      return;
    }
    this.missionService.addMission(this.mission)
      .subscribe(() => this.router.navigateByUrl('/missions'));
  }

  goBack(): void {
    this.router.navigateByUrl('/missions');
  }

}
