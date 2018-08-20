import { ArtistParams } from './../../shared/models/ArtistParams';
import { ArtistService } from './../../shared/services/external/artist/artist.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../node_modules/@angular/forms';
import { UserService } from '../../shared/services/internal/user/user.service';
import { Router } from '../../../../node_modules/@angular/router';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { Artist } from '../../shared/models/Artist';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.css']
})
export class AddArtistComponent implements OnInit {
  createForm: FormGroup;

  constructor(
    private artistService: ArtistService,
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.createForm = new FormGroup({
      'nombre': new FormControl(
        '',
        [Validators.required]
      ),
      'generos': new FormControl(
        '',
        [Validators.required]
      ),
      'image': new FormControl(
        '',
        [Validators.required]
      )
    });
  }

  backArtist() {
    this._router.navigate(['/Artist']);
  }
  onSubmit() {
    if (this.createForm.valid) {
      // Construct the object to send.
      const create: ArtistParams = {
        name: this.createForm.get('nombre').value,
        images: this.createForm.get('image').value,
        genres: this.createForm.get('generos').value,
        _id : null,
        identifier: null
      };
      // Make call using live API
      let response: Observable<Artist>;
      response = this.artistService.createArtist(create);
      response.subscribe(
        (data) => {
          if (data.n === 1) {
            // Save in user service.
            // if (this._userService.setActiveToken(data.token)) {
              // Do redirect
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

