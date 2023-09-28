import { Injectable } from '@angular/core';
import { GaleryItem } from '../routed-components/galery/galery.interfaz';

@Injectable({
  providedIn: 'root'
})
export class GaleryService {

  constructor() { }

private galery: GaleryItem[] = [
  {
    id:1,
    src:'/assets/img/img1.jpg',
    title:'coche 1'
  },
  {
    id:2,
    src:'/assets/img/img2.jpg',
    title:'coche 2'
  },
  {
    id:3,
    src:'/assets/img/img3.jpg',
    title:'coche 3'
  },
  {
    id:4,
    src:'/assets/img/img4.jpg',
    title:'coche 4'
  },
  {
    id:5,
    src:'/assets/img/img5.jpg',
    title:'coche 5'
  },
  {
    id:6,
    src:'/assets/img/img6.jpg',
    title:'coche 6'
  },
  {
    id:7,
    src:'/assets/img/img7.jpg',
    title:'coche 7'
  },
  {
    id:8,
    src:'/assets/img/img8.jpg',
    title:'coche 8'
  },

]

getGalery(){
  return this.galery;
}

}
