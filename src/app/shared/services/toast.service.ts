import { Injectable } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  showToast(toastElement: HTMLElement, title: string, message: string){
    if(toastElement != null){
      const toast = new bootstrap.Toast(toastElement);
      toast.show();

      let toastTitle = toastElement.querySelector('.toast-header strong');
      let toastMessage = toastElement.querySelector('.toast-body');

      if(toastTitle != null && toastMessage != null){
        toastTitle.textContent = title;
        toastMessage.textContent = message;
      }
    }
  }
}
