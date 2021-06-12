import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {  AlertController, NavController } from "@ionic/angular";
import { Movie } from "src/app/models/movie.model";
import { Subscription } from 'rxjs';
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: 'app-edit-movie',
  templateUrl: 'edit.movie.page.html',
  
})
export class EditMoviePage {

  movie = new Movie();
  private routeSub: Subscription;
  private id: number;

  constructor(private apiSvc: ApiService, private route: ActivatedRoute, private navCtrl: NavController, private router: Router,private alertCtrl: AlertController,) {}
  
    ionViewWillEnter() {
  
      this.routeSub = this.route.params.subscribe(params => {
        this.id = params.id;
      });
  
      this.apiSvc.get(`api/movies/${this.id}`).subscribe((response: Movie) => {
        console.log(response);
        this.movie = response;
      });
  
    }
  
    editMovie(movie: Movie) {
      console.log(movie);
      this.apiSvc.put(`api/movies/${this.movie.id}`, movie).subscribe(
        () => {
          this.navCtrl.pop();
        },
        (err) => {
          let message = 'Validation error';
          const errorsArray = err?.error?.errors;
          if (errorsArray) {
            message = Object.values(errorsArray)[0] as string;
          }
          this.alertCtrl
            .create({
              header: 'Error',
              message,
              buttons: ['Ok'],
            })
            .then((al) => al.present());
        }
      );
    }

}
