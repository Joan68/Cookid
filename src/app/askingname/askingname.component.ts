import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-askingname',
  templateUrl: './askingname.component.html',
  styleUrls: ['./askingname.component.scss']
})

export class AskingnameComponent implements OnInit {
  value = '';
  onEnter(value: string) { this.value = value; }
  constructor() { }

  ngOnInit(): void {
  }


}