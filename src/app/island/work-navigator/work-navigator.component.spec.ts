import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkNavigatorComponent } from './work-navigator.component';

describe('WorkNavigatorComponent', () => {
  let component: WorkNavigatorComponent;
  let fixture: ComponentFixture<WorkNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkNavigatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
