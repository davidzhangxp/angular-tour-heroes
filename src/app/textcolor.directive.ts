import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTextcolor]',
})
export class TextcolorDirective implements OnInit {
  @Input() appTextcolor = '';
  @HostListener('mouseenter') mouseenter() {
    this.highlight(this.appTextcolor || 'grey');
  }
  @HostListener('mouseleave') mouseleave() {
    this.highlight('transparent');
  }
  constructor(private elRef: ElementRef) {}
  private highlight(color: string) {
    this.elRef.nativeElement.style.backgroundColor = color;
  }
  ngOnInit(): void {}
}
