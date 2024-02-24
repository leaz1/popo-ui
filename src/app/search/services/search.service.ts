import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkMetadata } from '../../shared/models/work-metadata.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(searchTerm: string): Observable<WorkMetadata[]> {
    return this.http.get<WorkMetadata[]>('/');
  }
}
