import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Mission } from './mission';
import { MISSIONS } from './mock-missions';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  private missionsUrl = 'api/missions';

  constructor(private http: HttpClient,
              private messageService: MissionService) { }


  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.missionsUrl)
      .pipe(
        catchError(this.handleError<Mission[]>('getMissions', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getMission(id: number): Observable<Mission> {
    return of(MISSIONS.find(hero => hero.id === id));
  }
}
