import { Component, OnInit, HostListener, ElementRef, Input, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

// import {faBu}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() navbarColor = '';
  @ViewChild('nav') navbar!: ElementRef;
  mobileNavActive!: boolean;
  navbarDark!: boolean;
  navbarTransparent!: boolean;
  navbarClasses!: {};

  constructor(private router: Router, private el: ElementRef) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
        document.body.classList.remove('modal-open');
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 100) {
      this.navbar.nativeElement.classList.add('short');
      if (this.navbarTransparent && !this.navbarDark) {
        this.navbar.nativeElement.classList.remove('navbar-dark', 'bg-transparent');
        this.navbar.nativeElement.classList.add('navbar-light', 'bg-white');
      }
    } else {
      this.navbar.nativeElement.classList.remove('short');
      if (this.navbarTransparent && !this.navbarDark) {
        this.navbar.nativeElement.classList.add('navbar-dark', 'bg-transparent');
        this.navbar.nativeElement.classList.remove('navbar-light', 'bg-white');
      }
    }
  }

  ngOnInit() {
    if (this.navbarColor === 'dark') {
      this.navbarDark = true;
      this.navbarTransparent = false;
    } else if (this.navbarColor === 'transparent') {
      this.navbarDark = false;
      this.navbarTransparent = true;
    }
    this.navbarClasses = {
      'bg-primary': this.navbarDark,
      'navbar-light bg-white': !this.navbarDark && !this.navbarTransparent,
      'navbar-dark bg-transparent': this.navbarTransparent
    };
  }

  navbarToggle() {
    this.mobileNavActive = !this.mobileNavActive;
    this.mobileNavActive ? document.body.classList.add('modal-open') : document.body.classList.remove('modal-open');
  }

}
