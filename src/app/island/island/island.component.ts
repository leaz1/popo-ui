import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { BehaviorSubject, Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'popo-island',
  standalone: true,
  imports: [
    CommonModule,
    MenuComponent,
  ],
  templateUrl: './island.component.html',
  styleUrl: './island.component.scss'
})
export class IslandComponent implements OnInit {
  show$: BehaviorSubject<string> = new BehaviorSubject('menu');

  ngOnInit(): void {
  }
}
