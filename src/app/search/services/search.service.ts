import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkSummary } from '../../shared/models/work-summary.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(searchTerm: string): Observable<WorkSummary[]> {
    return this.http.get<WorkSummary[]>('/');
  }
}
