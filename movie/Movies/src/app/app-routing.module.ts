import { NgModule } from '@angular/core';
import { LoginPage } from './pages/login/login.page';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MoviesPage } from './pages/movies/movies.page';
import { AddMoviePage } from './pages/add.movie.page.ts/add.movie.page';
import { ForviewmoviePage } from './pages/forviewmovies/forviewmovie.page';
import { EditMoviePage } from './pages/edit.movie/edit.movie.page';

const routes: Routes = [
    
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'movies',
    component: MoviesPage,
  },
  {
    path: 'movies/add',
    component: AddMoviePage,
  },
  {
    path: 'forviewmovies',
    component: ForviewmoviePage,
  },
  {
    path: 'movies/:id',
    component: EditMoviePage,
  },
  // {
  //   path: 'movies/:id',
  //   component: DetailMoviePage,
  // },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
