import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meteorite',
  templateUrl: './meteorite.component.html',
  styleUrl: './meteorite.component.css',
})
export class MeteoriteComponent {
  @Input() meteorite: string;
  lalaVariable: string = '';
  blablaVariable: string = 'blabla3';
  aVariable: string = 'lala5';
  bVariable: number = 5;
  z: number = 7;
  a: string = 'lala8';
  b: string = 'lalala8';
  c: number = 8;
  d: string = 'lala10';
  e: number = 11;
  f: boolean = true;
  g: string = 'lala13';
  h: string = 'lala14';
  i: number = 14;
  j: number = 15;
  k: string = 'lala16';
  l: boolean = false;

  constructor() {
    this.meteoriteClick(this.lalaVariable);
    const x: boolean = this.meteoriteClick2('lala2');
    console.log(x);
    const y: string = this.meteoriteClick3(this.blablaVariable);
    console.log(y);
    const i: number = this.meteoriteClick4();
    console.log(i);
    this.meteoriteClick5(this.aVariable, this.bVariable);
    const result: number = this.meteoriteClick6(1, 1);
    console.log(result);
    const z: number = this.meteoriteClick7();
    console.log(z);
    this.meteoriteClick8(this.a, this.b, this.c);
    this.meteoriteClick9(9);
    this.meteoriteClick10(this.d);
    const e: number = this.meteoriteClick11();
    console.log(e);
    const f: boolean = this.meteoriteClick12();
    console.log(f);
    this.meteoriteClick13(this.g);
    this.meteoriteClick14(this.h, this.i);
    console.log(this.j);
    this.meteoriteClick16(this.k, this.l);
  }

  meteoriteClick(meteorite: string): void {
    console.log(meteorite);
  }

  meteoriteClick2(blabla2: string): boolean {
    console.log(blabla2);
    return true;
  }

  meteoriteClick3(blabla3: string): string {
    console.log(blabla3);
    return 'lala3';
  }
  meteoriteClick4(): number {
    const x: number = 1;
    return x;
  }

  meteoriteClick5(a: string, b: number): void {
    console.log(a, b);
  }

  meteoriteClick6(a: number, b: number) {
    console.log(a, b);
    return a + b;
  }
  meteoriteClick7(): number {
    return this.z;
  }
  meteoriteClick8(a: string, b: string, c: number): void {
    console.log(a, b, c);
  }

  meteoriteClick9(a: number): void {
    console.log(a);
  }

  meteoriteClick10(d: string): void {
    console.log(d);
  }
  meteoriteClick11(): number {
    return this.e;
  }
  meteoriteClick12(): boolean {
    return this.f;
  }

  meteoriteClick13(g: string): void {
    console.log(g);
  }

  meteoriteClick14(h: string, i: number): void {
    console.log(h, i);
  }
  meteoriteClick15(j: number): number {
    return j;
  }
  meteoriteClick16(k: string, l: boolean): void {
    console.log(k, l);
  }
}
