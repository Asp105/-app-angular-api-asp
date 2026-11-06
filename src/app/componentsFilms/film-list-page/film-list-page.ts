import { Component, inject, signal } from '@angular/core';
import { FilmItemComponent } from '../film-item-component/film-item-component';
import { FilmService } from '../../servicesFilms/film-service';
import { Film } from '../../interfacesFilms/film-list-response';

@Component({
  imports: [FilmItemComponent],
  selector: 'app-film-list-page',
  styleUrl: './film-list-page.css',
  templateUrl: './film-list-page.html',
})
export class FilmListPage {

  filmService = inject(FilmService)
  filmList = signal<Film[]>([]);

  ngOnInit(): void {
      
    this.filmService.getAll().subscribe(resp => {
      this.filmList.set(resp.results);
    });
  }



}
