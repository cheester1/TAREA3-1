import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grafi1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grafi1.html',
  styleUrl: './grafi1.scss'
})
export class Grafi1 {
  currentValue: number = 32123;
  targetAchieved: number = 31221;
  thisMonthTarget: number = 41521;
  date: string = 'Jun, 2024';
}