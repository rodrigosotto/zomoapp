import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MixPage } from './mix.page';

describe('MixPage', () => {
  let component: MixPage;
  let fixture: ComponentFixture<MixPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
