import { Component, OnInit, Renderer2 } from '@angular/core';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PanelMenu } from 'primeng/panelmenu';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor() {
    window.onload = function () {
      const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
      const navmenu = document.querySelector('.navmenu');

      if (mobileNavToggle && navmenu) {
        mobileNavToggle.addEventListener('click', function () {
          navmenu.classList.toggle('mobile-nav-active');
        });
      }
    };

  }
}
