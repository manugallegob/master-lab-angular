import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[rotate]',
})
export class RotateDirective {
  @Input() step: number = 10;
  @Input() rotate: number | string = 0;

  angle: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `rotate(${this.rotate}deg)`
    );

    if (this.rotate !== '') {
      this.angle =
        typeof this.rotate === 'number'
          ? this.rotate
          : parseInt(this.rotate, 10);
    }
  }

  @HostListener('click', ['$event.shiftKey'])
  rotateImg(event: any) {
    if (event) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'transform',
        `rotate(${(this.angle -= this.step)}deg)`
      );
    } else {
      this.renderer.setStyle(
        this.el.nativeElement,
        'transform',
        `rotate(${(this.angle += this.step)}deg)`
      );
    }
  }
}
