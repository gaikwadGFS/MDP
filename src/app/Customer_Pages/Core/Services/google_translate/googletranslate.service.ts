import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogletranslateService {

  private apiKey = 'AIzaSyCoX6RbpbKUObx0ViiiAPvFqe1ixVW2_WE'; // Replace with your API key
  private apiUrl = 'https://translation.googleapis.com/language/translate/v2';

  constructor(
    private http: HttpClient
  ) { }

  translate(text: string, targetLanguage: string): Observable<any> {
    const body = {
      q: text,
      target: targetLanguage,
      key: this.apiKey
    };

    return this.http.post(this.apiUrl, body);
  }

  loadGoogleTranslate(): void {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src =
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  }
}
