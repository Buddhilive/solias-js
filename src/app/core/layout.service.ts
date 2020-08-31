import { Injectable } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  fileUrl: any;

  constructor() { }

  getUrl() {
    console.log(this.fileUrl);
    return this.fileUrl;
  }
}
