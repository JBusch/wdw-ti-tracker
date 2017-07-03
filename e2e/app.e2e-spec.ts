import { WdwTwiRoundtrackerPage } from './app.po';

describe('wdw-ti-tracker App', () => {
  let page: WdwTwiRoundtrackerPage;

  beforeEach(() => {
    page = new WdwTwiRoundtrackerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to wdw!!');
  });
});
