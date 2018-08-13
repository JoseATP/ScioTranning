
import { ArtistParams } from './../shared/models/ArtistParams';
import { ArtistService } from './../shared/services/external/artist/artist.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artists: Array<ArtistParams>;
  constructor(
    private artistService: ArtistService,
    private _router: Router) {
    this.artistService.getArtist()
    .subscribe(artists => {
      console.log(artists);
      this.artists = artists;
    });
  }

  ngOnInit() {
  }

  deleteArtist(id) {
    const response = confirm('are you sure to delete it?');
    if (response ) {
      const tasks = this.artists;
      this.artistService.deleteArtist(id)
        .subscribe(data => {
          if (data.n == 1) {
            for (let i = 0; i < tasks.length; i++) {
              if (tasks[i]._id === id) {
                tasks.splice(i, 1);
              }
            }
          }
        });
    }
  }

  updateArtist(artistId) {
    this._router.navigate(['Artist/edit', artistId]);
  }

}
