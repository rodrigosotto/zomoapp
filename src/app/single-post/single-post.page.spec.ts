import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SinglePostPage } from './single-post.page';

describe('SinglePostPage', () => {
  let component: SinglePostPage;
  let fixture: ComponentFixture<SinglePostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SinglePostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
