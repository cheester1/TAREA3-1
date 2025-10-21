import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FAQItem {
  question: string;
  answer?: string;
  open: boolean;
}

@Component({
  selector: 'app-seccion5',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule si usas directivas como NgClass o NgStyle
  templateUrl: './seccion5.html',
  styleUrl: './seccion5.scss'
})
export class Seccion5 {
  faqList: FAQItem[] = [
    {
      question: 'What is Payoobel Financial exactly?',
      answer: 'Payoobel Financial is a comprehensive spend management platform powered by fully regulated and cutting-edge global banking and payment technology, designed for multi-national businesses.',
      open: false
    },
    {
      question: 'How will I save money by using Payoobel?',
      answer: 'Payoobel Financial is a comprehensive spend management platform powered by fully regulated and cutting-edge global banking and payment technology, designed for multi-national businesses.',
      open: false
    },
    {
      question: 'Who is Payoobel for?',
      answer: 'Payoobel Financial is a comprehensive spend management platform powered by fully regulated and cutting-edge global banking and payment technology, designed for multi-national businesses.',
      open: false
    },
    {
      question: 'Does Payoobel integrate with accounting systems?',
      answer: 'Payoobel Financial is a comprehensive spend management platform powered by fully regulated and cutting-edge global banking and payment technology, designed for multi-national businesses.',
      open: false
    },
    {
      question: 'How much does it cost?',
      answer: 'Payoobel Financial is a comprehensive spend management platform powered by fully regulated and cutting-edge global banking and payment technology, designed for multi-national businesses.',
      open: false
    }
  ];

  toggleFAQ(item: FAQItem): void {
    item.open = !item.open;
  }
}