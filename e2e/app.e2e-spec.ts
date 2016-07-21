import { BernierebuttalsPage } from './app.po';

describe('bernierebuttals App', function() {
  let page: BernierebuttalsPage;

  beforeEach(() => {
    page = new BernierebuttalsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
