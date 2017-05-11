import { MojProjekatPage } from './app.po';

describe('moj-projekat App', () => {
  let page: MojProjekatPage;

  beforeEach(() => {
    page = new MojProjekatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
