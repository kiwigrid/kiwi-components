import { identity } from 'lodash-es';
import { createStore } from '@stencil/store';
import { TFunction } from 'i18next';

const store = createStore<{ t: TFunction }>({
  t: identity,
});

export default store;
