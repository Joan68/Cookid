import {Component, OnInit} from '@angular/core';
import {VariablesGlobales} from '../common/variablesGlobales';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  value = VariablesGlobales.test;

  constructor() {
  }

  ngOnInit(): void {
  }

}
