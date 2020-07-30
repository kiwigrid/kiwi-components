import i18next from 'i18next';
import incDE from '../../src/components/inc/inc-i18n-provider/assets/locales/de/inc.json';
import commonDE from '../../src/components/inc/inc-i18n-provider/assets/locales/de/common.json';
import incEN from '../../src/components/inc/inc-i18n-provider/assets/locales/en/inc.json';
import commonEN from '../../src/components/inc/inc-i18n-provider/assets/locales/en/common.json';

const init = i18next.init.bind(i18next);

i18next.init = jest.fn((opts, cb) =>
  init(
    {
      ...opts,
      backend: undefined,
      resources: {
        en: {
          common: commonEN,
          inc: incEN,
        },
        de: {
          common: commonDE,
          inc: incDE,
        },
      },
    },
    cb,
  ),
) as any;

i18next.use = jest.fn(() => i18next);

export default i18next;
