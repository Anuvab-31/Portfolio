import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  changeToDefault :boolean = true;

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      offset:200,
      duration:2000
    });
  }
}
