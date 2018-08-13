import { ArtistParams } from './../../shared/models/ArtistParams';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from './../shared/services/external/artist/artist.service';

@Component({
  selector: 'app-edit-artist',
  templateUrl: './edit-artist.component.html',
  styleUrls: ['./edit-artist.component.css']
})
export class EditArtistComponent implements OnInit {
  artistObject: ArtistParams;
  artist: String;
  private sub: any;
  constructor(private route: ActivatedRoute,
              private artistService: ArtistService) {
    this.sub = this.route.params.subscribe(params => {
      this.artist = params['id'];
   });
   /*Buscar datos*/
   this.artistService.getArtist()
   .subscribe(artists => {
     console.log(artists);
     this.artistObject = artists;
    });
   }
  ngOnInit() {

  }

}
