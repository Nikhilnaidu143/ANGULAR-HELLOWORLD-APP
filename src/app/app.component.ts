import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imageUrl = "../assets/bridgelabz-logo.png";
  siteUrl = "https://www.bridgelabz.com/";

  /** One way data binding. */
  ngOnInit() : void {
    this.title = "Hello from BridgeLabz";
  }

  /** Event binding */
  onClick($event) {
    console.log("clicked logo!" , $event);
    window.open(this.siteUrl);
  }
}
