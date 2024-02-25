import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../shared/models/menu-item.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateService } from '../../main/services/state.service';

@Component({
  selector: 'popo-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  items: MenuItem[] = [
    { name: 'home', path: '/'},
    { name: 'search', path: '/search'},
    { name: 'about', path: '/about'},
    { name: 'me', path: '/me'},
    // { name: 'write', path: '/write'},
  ]

  constructor(private stateService: StateService) {}
}
