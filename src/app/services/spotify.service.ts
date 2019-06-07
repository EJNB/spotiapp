import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(
      map((newReleases: any) => newReleases['albums'].items)
    );
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((artistas: any) => artistas.artists.items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map((data: any) => data.tracks));
  }

  private getQuery(query: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBJYjKit9abw8k0i8HuEp1zE0I7AGEZly12OQyfhEExMkd3M4zfPRq-qXtKhDQ6tToI1B2HTCHdRTKBUy4'
    });
    const url = `https://api.spotify.com/v1/${query}`;

    return this.http.get(url, {headers});
  }
}
