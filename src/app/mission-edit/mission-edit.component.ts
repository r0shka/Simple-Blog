import {Component, Input, OnInit} from '@angular/core';
import {Mission} from '../mission';
import {ActivatedRoute} from '@angular/router';
import {MissionService} from '../mission.service';
import {Location} from '@angular/common';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-mission-edit',
  templateUrl: './mission-edit.component.html',
  styleUrls: ['./mission-edit.component.css']
})
export class MissionEditComponent implements OnInit {

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
   * get a mission by id
   */
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
