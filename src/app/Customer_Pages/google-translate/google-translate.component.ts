import { AfterViewInit, Component } from '@angular/core';
import { GoogletranslateService } from '../Core/Services/google_translate/googletranslate.service';

@Component({
  selector: 'app-google-translate',
  standalone: true,
  imports: [],
  templateUrl: './google-translate.component.html',
  styleUrl: './google-translate.component.css'
})
export class GoogleTranslateComponent implements AfterViewInit{

  isTranslateVisible: boolean = false;

constructor(private googleTranslate: GoogletranslateService) {}

ngAfterViewInit(): void {
  this.googleTranslate.loadGoogleTranslate();
  (window as any)['googleTranslateElementInit'] = this.googleTranslateElementInit.bind(this);
}

googleTranslateElementInit() {
  new (window as any)['google'].translate.TranslateElement(
    {
      pageLanguage: 'en',
      includedLanguages: 'ar,hi,mr,en',
    },
    'google_translate_element'
  );
}

toggleTranslate() {
  this.isTranslateVisible = !this.isTranslateVisible;
}
}
