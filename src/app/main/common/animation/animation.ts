import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";

export let slideRight = trigger('slideRight', [
  state('void', style({
    transform: 'translateX(-100%)'
  })),
  
  transition('void => *', [
    animate('2s ease-out', keyframes([
      style({
        offset: .7,
        transform: 'translateX(40px)'
      }),
      style({
        offset: 1,
        transform: 'translateX(0px)'
      })
    ]))
  ])
])

export let fadeIn = trigger('fadeIn', [
  state('void', style({
    opacity: 0
  })),
  
  transition('void => *', [
    animate('2s 1s')
  ])
])