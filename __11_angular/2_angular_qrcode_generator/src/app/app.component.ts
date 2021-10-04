import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Angular Demo App';
  isCollapsed: boolean = true;

  href!: string;

  public values: string;
  public level: "L" | "M" | "Q" | "H";
  public width: number;
  public foreground: string = 'black';


  constructor() {
    this.level = "L";
    this.values = "";
    this.width = 200;
    this.foreground = "black";
  }

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }

  qrForeground(val: "black"| "darkblue" | "green" | "darkorange"){
    this.foreground = val;
  }
}