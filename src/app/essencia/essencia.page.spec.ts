import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EssenciaPage } from './essencia.page';

describe('EssenciaPage', () => {
  let component: EssenciaPage;
  let fixture: ComponentFixture<EssenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssenciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EssenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
