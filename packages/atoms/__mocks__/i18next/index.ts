import i18next from 'i18next';
import commonDE from './assets/de/common.json';
import commonEN from './assets/en/common.json';

const init = i18next.init.bind(i18next);

i18next.init = jest.fn((opts, cb) =>
  init(
    {
      ...opts,
      backend: undefined,
      resources: {
        en: {
          common: commonEN,
        },
        de: {
          common: commonDE,
        },
      },
    },
    cb,
  ),
) as any;

i18next.use = jest.fn(() => i18next);

export default i18next;
