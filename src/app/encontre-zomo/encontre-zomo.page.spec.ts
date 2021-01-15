import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EncontreZomoPage } from './encontre-zomo.page';

describe('EncontreZomoPage', () => {
  let component: EncontreZomoPage;
  let fixture: ComponentFixture<EncontreZomoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncontreZomoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EncontreZomoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
