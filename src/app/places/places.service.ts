import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
// tslint:disable-next-line:variable-name
private _places: Place[] = [
  new Place(
    'p1',
    'Dog 1',
    'Description XXXXXXXXXXXXX',
    'https://fortunedotcom.files.wordpress.com/2019/01/boo.jpg',
    149.99
  ),
  new Place(
    'p2',
    'Dog 2',
    'Description XXXXXXXXXXXXX',
    'https://cdn.images.express.co.uk/img/dynamic/1/590x/dog-650299.jpg',
    149.99
  ),
  new Place(
    'p3',
    'Dog 3',
    'Description XXXXXXXXXXXXX',
    'http://images6.fanpop.com/image/photos/39000000/Siberian-Husky-Puppy-siberian-huskies-39031689-1600-1200.jpg',
    149.99
  )
];
get places() {
  return [...this._places];
}
  constructor() { }
}
