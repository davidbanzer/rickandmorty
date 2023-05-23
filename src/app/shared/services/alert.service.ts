import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  activeAlert: { type: string, message: string } | null = null;

  constructor() { }

  showAlert(type: string, message: string) {
    this.activeAlert = { type, message };

  }

  hideAlert() {
    this.activeAlert = null;
  }
}
