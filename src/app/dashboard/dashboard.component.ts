import { Component, OnInit } from '@angular/core';
import { DashboardService, IStatsResponse } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  public registrationsToday: number = 0;
  public visitorsToday: number = 0;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.geStats().subscribe((data: IStatsResponse) => {
      this.registrationsToday = data.registrations;
      this.visitorsToday = data.visitors;
    });
  }
}
