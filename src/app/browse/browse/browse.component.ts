import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Tag } from '../../shared/models/tag.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'popo-browse',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent implements OnInit {
  tags$: Tag[] = [
      { id: '0', name: 'changge'},
      { id: '1', name: 'wulei'},
      { id: '2', name: 'laogong'},
    ];

  ngOnInit(): void {
  }

  getRouterLinkOfTag(tag: Tag): string {
    return `/tag/${tag.id}`;
  }
}
