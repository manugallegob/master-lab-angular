import { Component, OnInit } from '@angular/core';
import { GaleryService } from 'src/app/services/galery.service';
import { GaleryItem } from './galery.interfaz';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss'],
})
export class GaleryComponent implements OnInit {
  constructor(public galeryService: GaleryService) {}

  galery: GaleryItem[] = [];
  imgSelected: GaleryItem | undefined;
  index: number = 0;
  interval: any;
  isPlay: boolean = false;
  width: number = 500;
  isImgSelected: boolean = false;
  firstIndexSlice: number = 0;
  secondIndexSlice: number = 3;

  ngOnInit() {
    this.galery = this.galeryService.getGalery(); // Añade la galería de imágenes a la variable galery
    this.imgSelected = this.galery[0]; // se inicializa la imagen seleccionada con el valor del primer elemento del array galery
  }

  getImgSelected(item: GaleryItem) {
    // Función para obtener la imagen seleccionada
    this.imgSelected = item;
    this.getIndex();
  }

  getIndex() {
    // obtiene el indice actual de la imagen seleccionada
    this.index = this.galery.findIndex(
      (item) => item.id === this.imgSelected?.id
    );
  }

  checkSilice() {
    // revisa cual es el slice de la galería que debería mostrarse a continuación
    if (this.index >= this.secondIndexSlice) {
      this.nextSlice();
    }
  }

  nextImgButtom() {
    // muestra la siguiente imagen del array de galeria y comprueba si es la última la envía al inicio
    this.getIndex();
    if (this.index <= this.galery.length - 1) {
      this.getImgSelected(this.galery[this.index + 1]);
    }
    this.checkSilice();
  }

  prevImgButtom() {
    // revisa cual es la imagen anterior a la que está actualmente seleccionada.
    this.getIndex();
    if (this.index > 0) {
      this.getImgSelected(this.galery[this.index - 1]);
    }
    this.checkSilice();
  }

  play() {
    // inica la reproducción automática de la galeria
    this.getIndex();
    this.isPlay = true;
    this.interval = setInterval(() => {
      if (this.index >= this.galery.length - 1) {
        this.index = 0;
        this.getImgSelected(this.galery[this.index]);
        this.secondIndexSlice = this.secondIndexSlice - this.firstIndexSlice;
        this.firstIndexSlice = 0;
      } else {
        this.getImgSelected(this.galery[this.index + 1]);
      }
      if (this.index >= this.secondIndexSlice) {
        this.nextSlice();
      }
    }, 2000);
  }

  stop() {
    // detiene la reproducción automática de la galeria
    this.isPlay = false;
    clearInterval(this.interval);
  }

  zoomIn(value: number) {
    // hace zoom a la imagen seleccionada
    this.width = this.width + value;
  }
  zoomOut(value: number) {
    //quita zoom a la imagen seleccionada
    this.width = this.width - value;
  }

  nextSlice() {
    // muestra el siguiente trozo del slice del array de galeria
    const incremento: number = this.secondIndexSlice - this.firstIndexSlice;
    this.secondIndexSlice = this.secondIndexSlice + incremento;
    this.firstIndexSlice = this.firstIndexSlice + incremento;
  }

  backSlice() {
    // muestra el trozo anterior del array de galeria
    const decremento: number = this.secondIndexSlice - this.firstIndexSlice;
    this.secondIndexSlice = this.secondIndexSlice - decremento;
    this.firstIndexSlice = this.firstIndexSlice - decremento;
  }
}
