import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleEssencesPage } from './single-essences.page';

describe('SingleEssencesPage', () => {
  let component: SingleEssencesPage;
  let fixture: ComponentFixture<SingleEssencesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleEssencesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleEssencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
