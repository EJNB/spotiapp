import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista: any;
  loadingArtist: boolean;

  constructor(private activateRoute: ActivatedRoute, private spotifyService: SpotifyService) {
    // this.activateRoute.snapshot.paramMap.get('id');
    this.activateRoute.params.subscribe(param => this.verArtista(param['id']));
  }

  ngOnInit() {
  }

  verArtista(id: string) {
    this.loadingArtist = true;
    this.spotifyService.getArtista(id).subscribe(artista => {
      console.log(artista);
      this.artista = artista;
      this.loadingArtist = false;
    });
  }
}
