import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject, debounce, debounceTime, map } from 'rxjs';
import { WorkMetadata } from '../../shared/models/work-metadata.model';
import { ListPipe } from '../../shared/pipes/list.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'popo-search',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ListPipe,

  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  searchTerm$: Subject<string> = new Subject();
  debouncedSearchTerm$: Observable<string> = new Observable();
  works$: Observable<WorkMetadata[]> = new Observable();

  displayFilters: boolean = false;

  ngOnInit(): void {
    this.debouncedSearchTerm$ = this.searchTerm$.pipe(
      debounceTime(200),
    );
    this.works$ = this.debouncedSearchTerm$.pipe(
      map(v => [
        {
          id: '1',
          title: 'Work 1',
          authors: ['anniey'],
          tags: [],
        },
        {
          id: '2',
          title: 'Work 2',
          authors: ['evel'],
          tags: ['appa', 'sydney'],
        },
        {
          id: '1',
          title: 'Work 1',
          authors: ['anniey'],
          tags: [],
        },
        {
          id: '2',
          title: 'Work 2',
          authors: ['evel'],
          tags: ['appa', 'sydney'],
        },
        {
          id: '1',
          title: 'Work 1',
          authors: ['anniey'],
          tags: [],
        },
        {
          id: '2',
          title: 'Work 2',
          authors: ['evel'],
          tags: ['appa', 'sydney'],
        },
        {
          id: '1',
          title: 'Work 1',
          authors: ['anniey'],
          tags: [],
        },
        {
          id: '2',
          title: 'Work 2',
          authors: ['evel'],
          tags: ['appa', 'sydney'],
        },
        {
          id: '1',
          title: 'Work 1',
          authors: ['anniey'],
          tags: [],
        },
        {
          id: '2',
          title: 'Work 2',
          authors: ['evel'],
          tags: ['appa', 'sydney'],
        },
      ]), 
    )
  }

  onSearch(e: Event) {
    this.searchTerm$.next((e.target as HTMLInputElement).value);
  }

  toggleFilters() {
    this.displayFilters = !this.displayFilters;
  }

}
