import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmListResponse } from '../interfacesFilms/film-list-response';
import { FilmDetailsResponse } from '../interfacesFilms/film-details-response';

@Service()
export class FilmService {

        http = inject(HttpClient)

    getAll(): Observable<FilmListResponse> {
        return this.http.get<FilmListResponse>(`https://swapi.dev/api/films`);
    }

    getOne(id: string): Observable<FilmDetailsResponse> {
        return this.http.get<FilmDetailsResponse>(`https://swapi.dev/api/films/${id}`);
    }
}
