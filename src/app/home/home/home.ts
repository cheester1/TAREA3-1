import { Component } from '@angular/core';
import { Seccion1 } from '../seccion1/seccion1';
import { Seccion2 } from '../seccion2/seccion2';
import { Seccion3 } from '../seccion3/seccion3';
import { Seccion5 } from '../seccion5/seccion5';
import { Seccion4 } from '../seccion4/seccion4';
import { Seccion6 } from '../seccion6/seccion6';

@Component({
  selector: 'app-home',
  imports: [Seccion1,Seccion2,Seccion3,Seccion4,Seccion5,Seccion6],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
