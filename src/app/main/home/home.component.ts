import { Component, HostListener, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { fadeIn, slideRight } from '../common/animation/animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    slideRight,
    fadeIn
  ]
})

export class HomeComponent implements OnInit {

  dialog = [
    'Hello there, click the next button to start!',
    'My name is Thanh, I am a Software Engineer, expertise in Web Development, at FINRA Inc.',
    'I graduated from University of North Texas with a degree of Computer Infomation System.',
    'The platform is created to share knowledge and ideas.',
    'Have Fun!'
  ]
  i = 0;
  element = document.querySelector<HTMLElement>('div');
  //@ts-ignore
  sroll$: Observable<Event> = fromEvent(this.element, 'scroll')
  constructor() { }

  ngOnInit(): void {
    this.sroll$.subscribe(console.log);

  }

  talk(){
    if(this.i < this.dialog.length - 1){
      this.i++
    }
    else this.i=0;
  }
}
