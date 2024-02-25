import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  state$: Subject<string> = new Subject();

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe((e) => {
      this.setState$(e.urlAfterRedirects)
    }) 
    
    this.state$.subscribe(v => {
      console.log(v);
    });
  }

  getState$(): Subject<string> {
    return this.state$;
  }
  setState$(path: string) {
    switch (path) {
      case '/':
        this.state$.next('out');
        break;
      default:
        this.state$.next('in');
    }
  }
}
