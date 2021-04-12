import { Component, OnInit } from '@angular/core';
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
    'My name is Thanh, I am a Front-End developer.',
    'I graduated from University of North Texas with a degree of Computer Infomation System.',
    'The website will have more information about me. And feel free to leave any comment.',
    'Have Fun!'
  ]
  i = 0;
  constructor() { }

  ngOnInit(): void {
  }

  talk(){
    if(this.i < this.dialog.length - 1){
      this.i++
    }
    else this.i=0;
  }

}
