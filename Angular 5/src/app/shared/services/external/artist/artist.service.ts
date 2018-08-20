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

getOneArtist(identifier) {
  return this._http.get(Constant.API + `artists/${identifier}`)
  .map((res: Response) => res.json())
  .catch((error: any) => Observable.throw(error || 'Server error'));
}

deleteArtist(id): Observable<Artist> {
  return this._http.delete(Constant.API + `artists/${id}`)
  .map((res: Response) => res.json())
  .catch((error: any) => Observable.throw(error || 'Server error')
);
}

updateArtist(body: ArtistParams): Observable<Artist> {
  return this._http.put(Constant.API + 'artists/' + body._id, body, Constant.options)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error || 'Server error'));
}

createArtist(body: ArtistParams): Observable<Artist> {
  return this._http.post(Constant.API + 'artists/', body, Constant.options)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error || 'Server error'));
}

}
