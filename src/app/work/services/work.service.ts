import { Injectable, WritableSignal, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  activeChapter: WritableSignal<number | null> = signal(null);

  constructor() {
    effect(() => {
      console.log(this.activeChapter());
    });
  }

  setActiveChapter(index: number) {
    this.activeChapter.set(index);
  }
  getActiveChapter(): WritableSignal<number | null> {
    return this.activeChapter;
  }
}
