import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'read_time_ang';
  readTime!: string;
  onReadTimeCalculated(readTimeStr: string) {
    this.readTime = readTimeStr;
  } 
}
