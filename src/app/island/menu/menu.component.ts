import { Component } from '@angular/core';
import { MenuItem } from '../../shared/models/menu-item.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
    { name: 'home', path: '/home'},
    { name: 'search', path: '/search'},
    { name: 'write', path: '/write'},
  ]
}
