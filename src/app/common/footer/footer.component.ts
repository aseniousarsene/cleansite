import { Component, OnInit, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBehance } from '@fortawesome/free-brands-svg-icons';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() light!: boolean;
  public faInstagram = faInstagram;
  public faBehance = faBehance;
  public faDribbble = faDribbble;
  public faLinkedinIn = faLinkedinIn;
  public isHome!: boolean;

  constructor(private router: Router) {
    this.router.events.subscribe(events => {
      if (events instanceof NavigationEnd) {
        events.url === '/home' || events.url === '/' || events.url === '/contact' ? this.isHome = true : this.isHome = false;
      }
    });
  }

  ngOnInit() {
  }

}
