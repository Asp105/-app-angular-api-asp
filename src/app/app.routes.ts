import { Routes } from '@angular/router';
import { VehicleListPage } from './components/vehicle-list-page/vehicle-list-page';
import { PageNotFound } from './errors/page-not-found/page-not-found';
import { FilmListPage } from './componentsFilms/film-list-page/film-list-page';

export const routes: Routes = [

    {path: 'vehicle-list', component: VehicleListPage},
    {path: '', redirectTo: 'vehicle-list', pathMatch: 'full'},
    {path: 'film-list', component: FilmListPage},
    {path: '**', component: PageNotFound}
];
