import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {pipe} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getNewReleases() {
    return this.getQuery('')
      .pipe(
        map((newReleases: any) => newReleases.albums.items)
      );
  }

  searchArtista(termino: string) {
    return this.getQuery(termino)
      .pipe(
        map((artistas: any) => artistas.artistas.items)
      );
  }

  private getQuery(query: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer xxxxToken'
    });
    const url = `ccccccxxxxxx${query}`;

    return this.http.get(url, {headers});
  }

  getArtista(id: string) {
    return this.getQuery(`artist/${id}`);
      /*.pipe(
        map(data => )
      );*/
  }
}
