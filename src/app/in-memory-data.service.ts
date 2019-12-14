import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Mission } from './mission';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const missions = [
      {
        id: 1,
        missionName: "Hey",
        clientName: "Client",
        city: "Paris",
        region: 13,
        startDate: new Date(),
        endDate: new Date(),
        cost: 15000,
        image: "https://designshack.net/wp-content/uploads/placeholder-image.png",
        description: "Description"
      },
      {
        id: 2,
        missionName: "Hello",
        clientName: "Client",
        city: "Paris",
        region: 13,
        startDate: new Date(),
        endDate: new Date(),
        cost: 15000,
        image: "https://designshack.net/wp-content/uploads/placeholder-image.png",
        description: "Description"
      },
      {
        id: 3,
        missionName: "Good day",
        clientName: "Client",
        city: "Paris",
        region: 13,
        startDate: new Date(),
        endDate: new Date(),
        cost: 15000,
        image: "https://designshack.net/wp-content/uploads/placeholder-image.png",
        description: "Description"
      }
    ];
    return {missions};
  }

  genId(missions: Mission[]): number {
    return missions.length > 0 ? Math.max(...missions.map(hero => hero.id)) + 1 : 11;
  }

}
