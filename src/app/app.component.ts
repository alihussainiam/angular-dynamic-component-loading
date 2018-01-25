import { Component, AfterViewInit } from '@angular/core';
declare var Vue;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  title = 'app';
  templateHtml = '';
  constructor() {

  }


  ngAfterViewInit() {
    const vue = new Vue({
      el: '#iDapp',
      delimiters: ["<%", "%>"],
      data: {
        msg: 'Hello World!',
        message: '',
      }
    });

  }

}
