/*
============================================
Title: 7.3- Form Validation
Author: Clayton Stacy
Date: 23 August 2020
Modified by: Clayton Stacy
Description: Validating Reactive Forms
============================================
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
  }
}
