import { ArtistParams } from './../../../models/ArtistParams';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Constant } from '../../../classes/Constant';
import { Artist } from '../../../models/Artist';

@Injectable()
export class ArtistService {

  constructor(private _http: Http) { }

  getArtist(): Observable<Array<ArtistParams>> {
    return this._http.get(Constant.API + 'artists', Constant.options)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error || 'Server error'));
}

deleteArtist(id): Observable<Artist> {
  return this._http.delete(Constant.API + `artists/${id}`)
  .map((res: Response) => res.json())
  .catch((error: any) => Observable.throw(error || 'Server error')
);
}

}
