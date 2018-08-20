import { ArtistParams } from './../../shared/models/ArtistParams';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { ArtistService } from './../../shared/services/external/artist/artist.service';
import { FormGroup, Validators, FormControl } from '../../../../node_modules/@angular/forms';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { Artist } from '../../shared/models/Artist';

@Component({
  selector: 'app-edit-artist',
  templateUrl: './edit-artist.component.html',
  styleUrls: ['./edit-artist.component.css']
})
export class EditArtistComponent implements OnInit {
  editForm: FormGroup;
  artistObject: ArtistParams;
  artist: String;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private artistService: ArtistService,
              private _router: Router, ) {
    this.sub = this.route.params.subscribe(params => {
      this.artist = params['id'];
   });

   }
  ngOnInit() {


       /*Buscar datos*/
   this.artistService.getOneArtist(this.artist)
   .subscribe(para => {
     console.log(para);
     this.artistObject = para.artist;

      this.editForm = new FormGroup({
        nombre: new FormControl(
          this.artistObject.name,
          [Validators.required]
        ),
        generos: new FormControl(
          this.artistObject.genres,
          [Validators.required]
        ),
        url: new FormControl(
          this.artistObject.images,
          [Validators.required]
        )
      });

      },
    (error) => {
      console.log(error);

    });

  }
  backArtist() {
    this._router.navigate(['/Artist']);
  }
  onSubmit() {
    if (this.editForm.valid) {
      // Construct the object to send.
      const edit: ArtistParams = {
        name: this.editForm.get('nombre').value,
        images: this.editForm.get('url').value,
        genres: this.editForm.get('generos').value,
        identifier: this.artistObject.identifier,
        _id: this.artistObject._id,
      };
      // Make call using live API
      let response: Observable<Artist>;
      response = this.artistService.updateArtist(edit);
      response.subscribe(
        (data) => {
          if (data.n === 1) {
            // Save in user service.
          // if (this._userService.setActiveToken(data.token)) {
              // Do redirect
              console.log('entra');
              this._router.navigate(['/Artist']);
          // }
          }
        },
        (error) => {

        }
      );
    }
  }

}
