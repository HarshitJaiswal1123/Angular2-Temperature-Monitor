import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
  
  it('test the median', () => {
    // [5, 1, -7, 7, 8, 3]
      let appComponent = new AppComponent();
      appComponent.recordTemperature(5);
      appComponent.recordTemperature(1);
      appComponent.recordTemperature(-7);
      appComponent.recordTemperature(7);
      appComponent.recordTemperature(8);
      appComponent.recordTemperature(3);
      
      let median = appComponent.getCurrentMedian();
      
      expect(median).toEqual(4);
      appComponent.recordTemperature(9);
      
      let next_median = appComponent.getCurrentMedian();
      expect(next_median).toEqual(5);
      
  })
  
});
