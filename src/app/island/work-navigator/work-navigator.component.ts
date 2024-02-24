import { Component, Input, effect } from '@angular/core';
import { Work } from '../../shared/models/work.model';
import { WorkService } from '../../work/services/work.service';

@Component({
  selector: 'popo-work-navigator',
  standalone: true,
  imports: [],
  templateUrl: './work-navigator.component.html',
  styleUrl: './work-navigator.component.scss'
})
export class WorkNavigatorComponent {
  @Input() work: Work | null = null;

  constructor(private workService: WorkService) {
    
  }

  goToChapter(seq: number) {
    this.workService.setActiveChapter(seq);
  }
}
