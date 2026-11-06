import { Component, inject, input, output } from '@angular/core';
import { Film } from '../../interfacesFilms/film-list-response';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-film-item-component',
  styleUrl: './film-item-component.css',
  templateUrl: './film-item-component.html',
})
export class FilmItemComponent {

  film = input<Film>();

  filmClicked = output<string>();
  id: string = '';

  private route = inject(ActivatedRoute)

  getFilmId() {
    this.id = this.film()?.url.split("/")[5]!;
    return this.id;
  }

  emitCharacterClicked() {
    const id = this.getFilmId();
    this.filmClicked.emit(id);
  }

  constructor() {
    this.route.params.subscribe((params) => {
      const view = params['view'];
      const filter = params ['filter'];
    });
  }
}
