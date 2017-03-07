import { TimsterPage } from './app.po';

describe('timster App', () => {
  let page: TimsterPage;

  beforeEach(() => {
    page = new TimsterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
