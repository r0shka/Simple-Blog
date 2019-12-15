import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Mission } from '../mission';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const missions = [
      {
        id: 1,
        missionName: "Canada: Hay River Bridge Re-opened",
        clientName: "Eiffage",
        city: "Nice",
        region: 6,
        startDate: new Date(1990, 3, 15),
        endDate: new Date(1995, 7, 22),
        cost: 15000,
        image: "https://www.eiffage.com/files/live/sites/eiffage-v2/files/Home/Actualit%c3%a9s/3_bridge_opening_3_1.jpg",
        description: "In Canada, the Hay River Bridge, a three-bay truss structure on the highway to Fort Smith, was built in the 1960s and needed to be rehabilitated."
      },
      {
        id: 2,
        missionName: "Guyana: Eiffage Métal replaces the Larivot footbridge",
        clientName: "Eiffage",
        city: "Paris",
        region: 75,
        startDate: new Date(1990, 3, 15),
        endDate: new Date(1995, 7, 22),
        cost: 870000,
        image: "https://www.eiffage.com/files/live/sites/eiffage-v2/files/Home/Actualit%c3%a9s/passerelle_larivot_1.jpg",
        description: "Supported by the Vélizy design office and the Le Havre agency, the teams carried out the work, which also included the replacement of the water pipe over the Cayenne River, in a consortium with DLE Outre-Mer, in particular.\n" +
          "\n" +
          "The assembly and installation work, comprising 400 t of steel for the 34 supports and 35 sections of 33 m each, involved around 15 employees day and night for 3 months."
      },
      {
        id: 3,
        missionName: "Eiffage Rail teams on the Lille tramway",
        clientName: "Eiffage",
        city: "Strasbourg",
        region: 67,
        startDate: new Date(1990, 3, 15),
        endDate: new Date(1995, 7, 22),
        cost: 150000,
        image: "https://www.eiffage.com/files/live/sites/eiffage-v2/files/Home/Actualit%c3%a9s/valorisation_chantier_tramway_4_1.jpg",
        description: "The teams of the Marly agency, with the participation of Eiffage Route for the asphalt part, carried out this project in 3 months, located in the heart of the city. In order to reduce the impact on users, the work was carried out in short nights (2h40 of effective work per night) over three consecutive weekends."
      }
    ];
    return {missions};
  }

  genId(missions: Mission[]): number {
    return missions.length > 0 ? Math.max(...missions.map(mission => mission.id)) + 1 : 0;
  }

}
