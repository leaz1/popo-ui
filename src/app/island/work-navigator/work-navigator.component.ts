import { Component, Input } from '@angular/core';
import { Work } from '../../shared/models/work.model';

@Component({
  selector: 'popo-work-navigator',
  standalone: true,
  imports: [],
  templateUrl: './work-navigator.component.html',
  styleUrl: './work-navigator.component.scss'
})
export class WorkNavigatorComponent {
  @Input() work: Work | null = null;

  
}
