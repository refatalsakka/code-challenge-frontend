import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval, switchMap, timer } from 'rxjs';
import { environment } from '../../environments/environment';

export interface IStatsResponse {
  visitors: number;
  registrations: number;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  geStats(): Observable<IStatsResponse> {
    return timer(0, 5000).pipe(
      switchMap(() => this.http.get<IStatsResponse>(environment.apiUrl))
    );
  }
}
