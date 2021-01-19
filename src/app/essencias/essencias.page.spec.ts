import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EssenciasPage } from './essencias.page';

describe('EssenciasPage', () => {
  let component: EssenciasPage;
  let fixture: ComponentFixture<EssenciasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssenciasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EssenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
