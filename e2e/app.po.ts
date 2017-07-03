import { browser, by, element } from 'protractor';

export class WdwTwiRoundtrackerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('wdw-root h1')).getText();
  }
}
