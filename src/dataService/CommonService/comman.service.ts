import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommanService {

  constructor() { }

  refreshpage()
  {
    location.reload();

  }
}
