import { Component, OnInit, Injectable  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VariablesGlobales } from '../common/variablesGlobales';

@Component({
  selector: 'app-askingname',
  templateUrl: './askingname.component.html',
  styleUrls: ['./askingname.component.scss']
})
export class AskingnameComponent implements OnInit {
  value = VariablesGlobales.test;
  onEnter(value: string) { VariablesGlobales.test = value; }
  constructor() { }

  ngOnInit(): void {
  }
}
