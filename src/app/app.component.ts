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
  userName : string;
  nameError : string;

  /** One way data binding. */
  ngOnInit() : void {
    this.title = "Hello from BridgeLabz";
  }

  /** Event binding */
  onClick($event) {
    console.log("clicked logo!" , $event);
    window.open(this.siteUrl);
  }

  /** Validating user name with regex pattern. */
  onInput($event) {
    console.log("change event occured!" , $event.data);
    const nameRegex = /^[A-Z]{1}[A-Za-z\\s]{2,}/;
    if(this.userName === ""){
      return this.nameError = " ";
    }
    else if(nameRegex.test(this.userName)) {
      return this.nameError = " "; 
    }
    else {
      return this.nameError = "Invalid name...!";
    }
  }
}
