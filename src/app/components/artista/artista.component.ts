import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista: any;
  loadingArtist: boolean;
  topTracks: any[] = [];

  constructor(private activateRoute: ActivatedRoute, private spotifyService: SpotifyService) {
    // this.activateRoute.snapshot.paramMap.get('id');
    this.activateRoute.params.subscribe(param => {
      this.verArtista(param['id']);
      this.getTopTracks(param['id']);
    });

  }

  verArtista(id: string) {
    this.loadingArtist = true;
    this.spotifyService.getArtista(id).subscribe(artista => {
      console.log(artista);
      this.artista = artista;
      this.loadingArtist = false;
    });
  }

  getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id)
      .subscribe(topTracks => this.topTracks = topTracks);
  }
}
