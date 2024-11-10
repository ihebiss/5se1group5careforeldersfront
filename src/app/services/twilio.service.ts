import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TwilioService {

  private readonly accountSid: string = 'ACa53ace64cc983a8ff34f22663b08f360';
  private readonly authToken: string = 'e5f26e84243d05c86d5936ed70cf552b';
  private readonly fromNumber: string = '+13345819321';

  constructor(private http: HttpClient) { }

  sendMessage(message: string, toNumber: string): Observable<any> {
    const url = `https://api.twilio.com/2010-04-01/Accounts/${this.accountSid}/Messages.json`;
    const body = new URLSearchParams();
    body.set('To', toNumber);
    body.set('From', this.fromNumber);
    body.set('Body', message);

    const options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Authorization', 'Basic ' + btoa(`${this.accountSid}:${this.authToken}`))
    };

    return this.http.post(url, body.toString(), options);
  }
}
