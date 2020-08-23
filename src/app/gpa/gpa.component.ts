/*
============================================
Title: 7.3- Form Validation
Author: Clayton Stacy
Date: 23 August 2020
Modified by: Clayton Stacy
Description: Validating Reactive Forms
============================================
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
