import { browser, by, element } from 'protractor';

export class CompanyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('nx-root h1')).getText();
  }
}
