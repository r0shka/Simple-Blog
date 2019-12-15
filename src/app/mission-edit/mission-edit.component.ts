import {Component, Input, OnInit} from '@angular/core';
import {Mission} from '../model/mission';
import {ActivatedRoute} from '@angular/router';
import {MissionService} from '../services/mission.service';
import {Location} from '@angular/common';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-mission-edit',
  templateUrl: './mission-edit.component.html',
  styleUrls: ['./mission-edit.component.css']
})
export class MissionEditComponent implements OnInit {

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

  @Input() mission: Mission;

  constructor(private route: ActivatedRoute,
              private missionService: MissionService,
              private location: Location) {
  }

  ngOnInit() {
    this.getMission();
  }

  /**
   * Get a mission by id
   */
  getMission(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.missionService.getMission(id)
      .subscribe(mission => this.mission = mission);
  }

  /**
   * Updates mission and navigates to previous view
   */
  save(): void {
    this.missionService.updateMission(this.mission)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
