import {Translate} from './translate.pipe';
import {ChangeDetection} from "./mocks";
import {TranslateService} from "./services/translate.service";

describe('TranslatePipe', () => {
  it('create an instance', () => {
    const pipe = new Translate(new TranslateService(), new ChangeDetection());
    expect(pipe).toBeTruthy();
  });
});
