import {Component, OnInit} from '@angular/core';
import {Mission} from '../model/mission';
import {MissionService} from '../services/mission.service';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-mission-create',
  templateUrl: './mission-create.component.html',
  styleUrls: ['./mission-create.component.css']
})
export class MissionCreateComponent implements OnInit {

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  imageFormControl = new FormControl('', [
    Validators.required
  ]);

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
