import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
// import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Website_Pages/layout/header/header.component';
import { FooterComponent } from './Website_Pages/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, ButtonModule, RippleModule, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyDreamProperty';
  ingredient!: string;
}
