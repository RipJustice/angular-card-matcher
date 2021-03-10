import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardMatchComponent } from './card-match.component';
import { CardComponent } from '../../components/card/card.component';
import { WinComponent } from '../../components/win/win.component';

describe('CardMatchComponent', () => {
  let component: CardMatchComponent;
  let fixture: ComponentFixture<CardMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMatchComponent, CardComponent, WinComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
