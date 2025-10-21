import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Grafi1 } from '../../graficos/grafi1/grafi1';
import { Grafi2 } from '../../graficos/grafi2/grafi2';
import { Grafi3 } from '../../graficos/grafi3/grafi3';

interface Card {
  type: 'stats' | 'chart' | 'payments';
  category: string;
  title: string;
  desc: string;
  stats?: {
    currentValue: number;
    date: string;
    targetAchieved: number;
    thisMonthTarget: number;
  };
  payments?: {
    date: string;
    details: string;
    sub: string;
    amount: number;
  }[];
  chartHeights?: number[];
  cardColor: 'blue' | 'cream' | 'green';
}

@Component({
  selector: 'app-seccion2',
  standalone: true,
  imports: [CommonModule, Grafi1, Grafi2, Grafi3],
  templateUrl: './seccion2.html',
  styleUrl: './seccion2.scss'
})
export class Seccion2 {
  cards: Card[] = [
    {
      type: 'stats',
      category: 'Account Management',
      title: 'Accounts payable & purchase orders',
      desc: 'End-to-end accounts payable software including purchase orders, invoice.',
      stats: {
        currentValue: 32123,
        date: 'Jun, 2024',
        targetAchieved: 31221,
        thisMonthTarget: 41521
      },
      cardColor: 'blue'
    },
    {
      type: 'chart',
      category: 'Cash Management',
      title: 'All your spend. One platform',
      desc: 'Automate your most tedious tasks like manual data entry, correcting mistakes.',
      chartHeights: [60, 80, 45, 70, 30, 55, 65],
      cardColor: 'cream'
    },
    {
      type: 'payments',
      category: 'Multiple Currencies',
      title: 'Dedicated in multiple currencies',
      desc: 'Dedicated IBANs in multiple currencies, safeguarding of funds in line with PSD2.',
      payments: [
        { date: 'Jun\n26', details: 'Figma', sub: 'Figma - Monthly', amount: 280 },
        { date: 'Jun\n18', details: 'Adobe', sub: 'Adobe - Yearly', amount: 378 }
      ],
      cardColor: 'green'
    }
  ];
}