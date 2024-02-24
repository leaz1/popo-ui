import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  state$: Subject<string> = new Subject();

  constructor() {
    
    this.state$.subscribe(v => {
      console.log(v);
    });
  }

  getState$(): Subject<string> {
    return this.state$;
  }
}
