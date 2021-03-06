import { Component, ViewChild, OnInit, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  public isOpened: boolean = true;

  private toggleMenuBySize(innerWidth): void {
    if (innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.isOpened = false;
    } else {
      this.sidenav.fixedTopGap = 55;
      this.isOpened = true;
    }
  }

  public ngOnInit(): void {
    this.toggleMenuBySize(window.innerWidth);
  }

  public isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return width < 768;
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event) {
    this.toggleMenuBySize(event.innerWidth);
  }
}
