import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Mission } from './mission';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  private missionsUrl = 'api/missions';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /**
   * return list of all missions
   */
  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.missionsUrl)
      .pipe(
        catchError(this.handleError<Mission[]>('getMissions', []))
      );
  }

  /**
   * GET: get mission from id
   * @param id
   */
  getMission(id: number): Observable<Mission> {
    const url = `${this.missionsUrl}/${id}`;
    return this.http.get<Mission>(url).pipe(
      tap(_ => console.log(`fetched mission id=${id}`)),
      catchError(this.handleError<Mission>(`getMission id=${id}`))
    );
  }

  /**
   * POST: add a new mission to the server
   * @param mission
   */
  addMission(mission: Mission): Observable<Mission> {
    console.log(mission);
    return this.http.post<Mission>(this.missionsUrl, mission, this.httpOptions).pipe(
      tap((mission: Mission) => console.log(`added mission w/ id=${mission.id}`)),
      catchError(this.handleError<Mission>('addMission'))
    );
  }

  /**
   * DELETE: delete the mission from the server
   * @param mission
   */
  deleteMission (mission: Mission | number): Observable<Mission> {
    const id = typeof mission === 'number' ? mission : mission.id;
    const url = `${this.missionsUrl}/${id}`;

    return this.http.delete<Mission>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted mission id=${id}`)),
      catchError(this.handleError<Mission>('deleteMission'))
    );
  }

  /**
   * PUT: update the mission on the server
   * @param mission
   */
  updateMission(mission: Mission): Observable<any> {
    return this.http.put(this.missionsUrl, mission, this.httpOptions).pipe(
      tap(_ => console.log(`updated mission id=${mission.id}`)),
      catchError(this.handleError<any>('updateMission'))
    );
  }

  /**
   * GET: find missions by name
   * @param term
   */
  searchMissions(term: string): Observable<Mission[]> {
    if (!term.trim()) {
      // if not search term, return empty mission array.
      return of([]);
    }
    return this.http.get<Mission[]>(`${this.missionsUrl}/?missionName=${term}`).pipe(
      tap(_ => console.log(`found missions matching "${term}"`)),
      catchError(this.handleError<Mission[]>('searchMission', []))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
