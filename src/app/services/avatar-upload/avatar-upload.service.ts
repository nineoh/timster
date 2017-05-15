import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AvatarUploadService {

  constructor(private _http: Http) { }

  public upload(fileToUpload: any) {
    const input = new FormData();
    input.append('file', fileToUpload);

    return this._http.post('/api/uploadFile', input);
  }
}
