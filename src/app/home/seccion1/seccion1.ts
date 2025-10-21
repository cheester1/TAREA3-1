import { Component } from '@angular/core';

@Component({
  selector: 'app-seccion1',
  templateUrl: './seccion1.html',
  styleUrls: ['./seccion1.scss']
})
export class Seccion1 {
  avatars = [
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/men/45.jpg',
    'https://randomuser.me/api/portraits/women/46.jpg',
    'https://randomuser.me/api/portraits/men/47.jpg',
  ];

  logos = [
    {
      src: 'n.png',
      alt: 'novo',
    },
    {
      src: 't.png',
      alt: 'Telia Cygate',
    },
    {
      src: 'c.png',
      alt: 'customer.io',
    },
    {
      src: 'f',
      alt: 'Fastmail',
    },
    {
      src: 'm.png',
      alt: 'Medtronic',
    },
  ];
}