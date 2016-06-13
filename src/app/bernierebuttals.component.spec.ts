import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BernierebuttalsAppComponent } from '../app/bernierebuttals.component';

beforeEachProviders(() => [BernierebuttalsAppComponent]);

describe('App: Bernierebuttals', () => {
  it('should create the app',
      inject([BernierebuttalsAppComponent], (app: BernierebuttalsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'bernierebuttals works!\'',
      inject([BernierebuttalsAppComponent], (app: BernierebuttalsAppComponent) => {
    expect(app.title).toEqual('bernierebuttals works!');
  }));
});
