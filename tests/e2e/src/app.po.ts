import { browser, by, element, promise } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return browser.getTitle();
  }

  getPageTitle() {
    return element(by.css('app-root h1')).getText();
  }
}
