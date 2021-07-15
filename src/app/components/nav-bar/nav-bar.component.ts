import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  btnMenu?: any;
  btnBack?: any;
  firstSection?: any;
  isActive: boolean = false;

  constructor() {}

  /* ------------ to observe when window  have changed his size ------------ */
  @HostListener('window:resize', ['$event']) change(event: any) {
    this.fixDynamicMenu(event);
  }
  /* ------------------------ get btn of responsive navBar ---------------------- */
  ngOnInit(): void {
    this.btnMenu = <HTMLDivElement>document.getElementById('nav_bar__btn_menu');
    this.btnBack = <HTMLDivElement>document.getElementById('nav_bar__btn_back');
  }

  /* ----------------------- responsive menu event click ---------------------- */
  activateMenu() {
    this.isActive = !this.isActive;
  }

  popMenu() {
    this.activateMenu();
    if (window.screen.width > 1366) {
      this.btnMenu.style.display = 'none';
      this.btnBack.style.display = 'none';
    } else if (window.screen.width <= 1366) {
      if (this.btnMenu.style.display == '') {
        this.btnBack.style.display = 'block';
        this.btnMenu.style.display = 'none';
      } else if (this.btnBack.style.display == 'block') {
        this.btnBack.style.display = 'none';
        this.btnMenu.style.display = 'block';
      } else if (this.btnMenu.style.display == 'block') {
        this.btnBack.style.display = 'block';
        this.btnMenu.style.display = 'none';
      }
    }
  }

  /* ------ to fix display of btn of responsive menu when you change size ----- */
  fixDynamicMenu(event: any) {
    if (event.target.screen.width > 1366) {
      this.btnMenu.style.display = 'none';
      this.btnBack.style.display = 'none';
    } else if (event.target.screen.width <= 1366) {
      if (this.btnMenu.style.display == 'block') {
        this.btnMenu.style.display = 'block';
        this.btnBack.style.display = 'none';
      } else if (this.btnBack.style.display == 'block') {
        this.btnMenu.style.display = 'none';
        this.btnBack.style.display = 'block';
      } else {
        this.btnMenu.style.display = 'block';
      }
    }
  }
}
