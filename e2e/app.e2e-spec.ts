import { NycmakeupbyalePage } from './app.po';

describe('nycmakeupbyale App', () => {
  let page: NycmakeupbyalePage;

  beforeEach(() => {
    page = new NycmakeupbyalePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
