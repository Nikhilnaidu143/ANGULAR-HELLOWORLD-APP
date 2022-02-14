import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';

  /** One way data binding. */
  ngOnInit() : void {
    this.title = "Hello from BridgeLabz";
  }
}
