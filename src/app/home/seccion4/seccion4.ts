import { Component } from '@angular/core';

interface Card {
  title: string;
  desc: string;
  price: string;
  features: string[];
  popular: boolean;
}

@Component({
  selector: 'app-seccion4',
  templateUrl: './seccion4.html',
  styleUrls: ['./seccion4.scss']
})
export class Seccion4 {
  cards: Card[] = [
    {
      title: 'Premium Cards',
      desc: 'Provides a simple and convenient interface for you to bill customers',
      price: '$19',
      features: [
        'Dedicated bank 1 accounts',
        'Visa Credit and Debit cards',
        'Automated notifications',
        'Advanced card controls and spend policies',
        'Carbon emissions tracking on card spend'
      ],
      popular: false
    },
    {
      title: 'All-In-One Spend',
      desc: 'Scale up your business by automating your payouts',
      price: '$39',
      features: [
        'Dedicated bank 3 accounts',
        'Automated notifications',
        'Maximize payment success rate',
        'Create customized invoices simply',
        'Instant transfers, even on holidays'
      ],
      popular: true
    },
    {
      title: 'Enterprise',
      desc: 'Enable recurring payments with e-wallets, credit cards, and direct debit',
      price: '$69',
      features: [
        'Dedicated bank 8 accounts',
        'Maximize payment success rate',
        'Customized subscription schedule',
        'Advanced card controls and spend policies',
        'Leading success rates and speed'
      ],
      popular: false
    }
  ];
}