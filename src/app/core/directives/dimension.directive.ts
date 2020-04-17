import { Directive, Input, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDimension]',
})
export class DimensionDirective implements AfterViewInit {
  @Input() height!: number;
  @Input() width!: number;
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngAfterViewInit() {
    const element: ElementRef = this.el.nativeElement.children[0];
    this.renderer.setStyle(element, 'height', `${this.height}px`);
    this.renderer.setStyle(element, 'width', `${this.width}px`);
  }
}
