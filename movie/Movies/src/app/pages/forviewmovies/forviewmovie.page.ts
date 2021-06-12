import { ApiService } from './../../services/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-forviewmovie',
  templateUrl: 'forviewmovie.page.html',
})
export class ForviewmoviePage {
  forviewmovie;

  constructor(private apiSvc: ApiService) {}

  ionViewWillEnter() {
    this.apiSvc.get('api/Forviewmovies').subscribe((response) => {
      this.forviewmovie = response;
    });
  }
}
