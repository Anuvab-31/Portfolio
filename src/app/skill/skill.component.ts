import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  

  constructor() {}

  ngOnInit(): void {
    AOS.init({
      offset:200,
      duration:2000
    });
  }

}
