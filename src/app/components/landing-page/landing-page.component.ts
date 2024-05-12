import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  public person: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('api/person').subscribe({
      next: (res) => {
        this.person = res;
      },
    });
  }
}
