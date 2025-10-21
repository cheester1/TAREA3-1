import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  bannerVisible = true;

  navLinks = [
    { label: 'Solutions', caret: true, href: '#' },
    { label: 'Industries', caret: true, href: '#' },
    { label: 'Pricing', caret: false, href: '#' },
    { label: 'Resources', caret: false, href: '#' },
    { label: 'Company', caret: false, href: '#' }
  ];

  closeBanner() {
    this.bannerVisible = false;
  }
}