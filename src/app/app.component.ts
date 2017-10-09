import { Component, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  title = 'Url Shortener ';
  show = false;
  urlData;
  formData = {
    'myUrl': '',
  };
  constructor(public http: HttpClient) { }
  getData() {
    let userUrl = 'https://api-ssl.bitly.com/v3/shorten?access_token=7d504b99a2bce4d4afbf9131c317826415c8b59d' + '&longUrl=' + this.formData.myUrl;
    this.http.get(userUrl).subscribe(data => {
      this.urlData = data;
    });
    this.show = true;
  }
  ngOnChanges() { }
  ngAfterViewChecked() { }

}
