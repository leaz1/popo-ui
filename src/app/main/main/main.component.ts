import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IslandComponent } from '../../island/island/island.component';
import { RouterModule } from '@angular/router';
import { WorkComponent } from '../../work/work/work.component';
import { CommonModule, NgClass } from '@angular/common';
import { Subject } from 'rxjs';
import { StateService } from '../services/state.service';

@Component({
  selector: 'popo-main',
  standalone: true,
  imports: [
    IslandComponent,
    RouterModule,
    WorkComponent,
    CommonModule,
    NgClass,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit, AfterViewInit {
  state$: Subject<string>;

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.state$ = this.stateService.getState$();
  }

  ngAfterViewInit(): void {
    this.state$.next('out');
  }
}
