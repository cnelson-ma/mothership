import { MothershipPage } from './app.po';

describe('mothership App', () => {
  let page: MothershipPage;

  beforeEach(() => {
    page = new MothershipPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
