import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmListPage } from './film-list-page';

describe('FilmListPage', () => {
  let component: FilmListPage;
  let fixture: ComponentFixture<FilmListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmListPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmListPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
