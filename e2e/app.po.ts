export class BernierebuttalsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bernierebuttals-app h1')).getText();
  }
}
