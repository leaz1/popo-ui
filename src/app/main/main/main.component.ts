import { Component } from '@angular/core';
import { IslandComponent } from '../../island/island/island.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'popo-main',
  standalone: true,
  imports: [
    IslandComponent,
    RouterModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
