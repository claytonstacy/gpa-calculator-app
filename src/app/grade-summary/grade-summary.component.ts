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
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  @Input() grade: string;
  @Input() course: string;


  constructor() {

  }

  ngOnInit(): void {
  }
}
