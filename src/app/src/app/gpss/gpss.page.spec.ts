import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { GpssPage } from './gpss.page';

describe('GpssPage', () => {
  let component: GpssPage;
  let fixture: ComponentFixture<GpssPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GpssPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GpssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
