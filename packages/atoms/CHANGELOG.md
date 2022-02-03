# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.9.0](https://github.com/kiwigrid/kiwi-components/compare/@kiwigrid/kiwi-atoms@0.8.3...@kiwigrid/kiwi-atoms@0.9.0) (2022-02-03)


### Features

* **kiwi-atoms:** kiwi-dropdown can now close on content click with optional property "closeOnContentClick", property "containerClass" is now optional ([fa946e5](https://github.com/kiwigrid/kiwi-components/commit/fa946e50f151c454da7e3318e9c75efe08ab905d))





## [0.8.3](https://github.com/kiwigrid/kiwi-components/compare/@kiwigrid/kiwi-atoms@0.8.2...@kiwigrid/kiwi-atoms@0.8.3) (2022-01-26)


### Bug Fixes

* **kiwi-atoms:** fix dropdown positioning at right screen edge ([3b39233](https://github.com/kiwigrid/kiwi-components/commit/3b39233d374ff528e0fde025e6a8e9cf940c1521))
* **kiwi-atoms:** fix dropdown positioning at right screen edge - additional code review fixes ([7aa6af8](https://github.com/kiwigrid/kiwi-components/commit/7aa6af83a085f137d7c0bbf7b9c9c86271c02943))
* **kiwi-atoms:** fix dropdown positioning at right screen edge, use negative margins for positioning ([1635c2b](https://github.com/kiwigrid/kiwi-components/commit/1635c2bb84d5d08b6cfa2ea67ccf6257eea8ed53))
* **kiwi-atoms:** fix dropdown positioning at right screen edge. User transform:translate(...) instead of translate:... to position the dropdown menu ([4107e0a](https://github.com/kiwigrid/kiwi-components/commit/4107e0acb9349a4898fd09e8b05a11c834980bee))





## [0.8.2](https://github.com/kiwigrid/kiwi-components/compare/@kiwigrid/kiwi-atoms@0.8.1...@kiwigrid/kiwi-atoms@0.8.2) (2021-10-07)

**Note:** Version bump only for package @kiwigrid/kiwi-atoms





## [0.8.1](https://github.com/kiwigrid/kiwi-components/compare/@kiwigrid/kiwi-atoms@0.8.0...@kiwigrid/kiwi-atoms@0.8.1) (2021-10-07)


### Bug Fixes

* **kiwi-atoms:** emit pageChanged on button click ([16b7c4f](https://github.com/kiwigrid/kiwi-components/commit/16b7c4f3c77fb92dcb055c7f00c23a00c885de37))





# [0.8.0](https://github.com/kiwigrid/kiwi-components/compare/@kiwigrid/kiwi-atoms@0.7.0...@kiwigrid/kiwi-atoms@0.8.0) (2021-07-21)


### Bug Fixes

* **kiwi-atoms:** fix JSX imports ([7cd986a](https://github.com/kiwigrid/kiwi-components/commit/7cd986a05248a7180fed2fc70ce0e0277027c23f))


### Features

* **kiwi-atoms:** add button debounce to pager ([8620b1d](https://github.com/kiwigrid/kiwi-components/commit/8620b1dc75b8e533bee2aac86150e876afdbe95a))
* **kiwi-atoms:** remove kiwi-link ([58bcc44](https://github.com/kiwigrid/kiwi-components/commit/58bcc443ad2a8dd6d6b0ac0c4ef08fd638e3beb9))





# [0.7.0](https://github.com/kiwigrid/kiwi-components/compare/@kiwigrid/kiwi-atoms@0.6.0...@kiwigrid/kiwi-atoms@0.7.0) (2021-07-20)


### Features

* **kiwi-atoms:** add size parameter to kiwi-modal ([ce43424](https://github.com/kiwigrid/kiwi-components/commit/ce434249338484fc143693b534ae9e742259b919))





# [0.6.0](https://github.com/kiwigrid/kiwi-components/compare/@kiwigrid/kiwi-atoms@0.5.0...@kiwigrid/kiwi-atoms@0.6.0) (2021-02-16)


### Features

* **kiwi-atoms:** add heading panel ([175ac17](https://github.com/kiwigrid/kiwi-components/commit/175ac17c74aee21cf1ce9f12dbf9acf627f271ae))





# [0.5.0](https://github.com/kiwigrid/kiwi-components/compare/@kiwigrid/kiwi-atoms@0.4.1...@kiwigrid/kiwi-atoms@0.5.0) (2021-01-28)


### Features

* **kiwi-atoms:** make i18next instance a prop ([87a080e](https://github.com/kiwigrid/kiwi-components/commit/87a080eff8962996df845726c3c0ce3be2ef592e))





## [0.4.1](https://github.com/kiwigrid/kiwi-components/compare/@kiwigrid/kiwi-atoms@0.4.0...@kiwigrid/kiwi-atoms@0.4.1) (2021-01-15)

**Note:** Version bump only for package @kiwigrid/kiwi-atoms





# [0.4.0](https://github.com/kiwigrid/kiwi-components/compare/@kiwigrid/kiwi-atoms@0.3.0...@kiwigrid/kiwi-atoms@0.4.0) (2020-12-04)


### Bug Fixes

* **kiwi-atoms:** "previous"-button in kiwi-modal is now on the left side ([f1a3764](https://github.com/kiwigrid/kiwi-components/commit/f1a3764c7267c5143398ce0ff62abc2a25575cda))
* **kiwi-atoms:** fix handling classes of kiwi-modal onLoad ([a7faa20](https://github.com/kiwigrid/kiwi-components/commit/a7faa2021d988fcf273d97f94a9007501ef10dcf))
* **kiwi-atoms:** fixed scrolling for long kiwi-modals, added delays for class changes so css transitions can actually be seen ([0d52c5c](https://github.com/kiwigrid/kiwi-components/commit/0d52c5ce3f39c29f5f2bf1ab83e1c51ada6ae85a))
* **kiwi-atoms:** kiwi-alert was missing "display: block;" css ([51f0114](https://github.com/kiwigrid/kiwi-components/commit/51f011404edc05f201b0489f3c8ff2d65899cae8))
* **kiwi-atoms:** refactor kiwi-toast interfaces ([97dc9fd](https://github.com/kiwigrid/kiwi-components/commit/97dc9fd3000c9ceb99a71eea12932fa63c8f6054))
* **kiwi-atoms:** refactored kiwi-toasts to use an array instead of object internally, toasts now get shown on the top of the page ([3e5420d](https://github.com/kiwigrid/kiwi-components/commit/3e5420dfbaeeda27249bed1ecaaca3910b93444c))
* **kiwi-atoms:** update dependencies ([930abcd](https://github.com/kiwigrid/kiwi-components/commit/930abcd5409c1ad60d162e5a63156275b740dead))
* **kiwi-atoms:** updated snapshots of kiwi-alert ([f830d6b](https://github.com/kiwigrid/kiwi-components/commit/f830d6b6786041b45334bab8e1bfdba3c19fc811))


### Features

* **kiwi-atoms:** added kiwi-toasts component, extended kiwi-alert with success type ([89fb7ad](https://github.com/kiwigrid/kiwi-components/commit/89fb7ad163359e6c3191679ee9be96a91f6e9601))
* **kiwi-atoms:** added stepping to kiwi-modal ([e7e3bc9](https://github.com/kiwigrid/kiwi-components/commit/e7e3bc9847058641010ce2958dce35bc55df6207))





# [0.3.0](https://github.com/kiwigrid/kiwi-components/compare/@kiwigrid/kiwi-atoms@0.2.2...@kiwigrid/kiwi-atoms@0.3.0) (2020-11-13)


### Features

* **kiwi-atoms:** add more atoms ([2f60532](https://github.com/kiwigrid/kiwi-components/commit/2f60532118266f6258cf29a967436281ccfa1351))
* **kiwi-atoms:** added kiwi-empty component ([6764eb6](https://github.com/kiwigrid/kiwi-components/commit/6764eb616775c014a774ca87d9a12de4e6994a64))





## [0.2.2](https://github.com/kiwigrid/kiwi-components/compare/@kiwigrid/kiwi-atoms@0.2.1...@kiwigrid/kiwi-atoms@0.2.2) (2020-09-13)

**Note:** Version bump only for package @kiwigrid/kiwi-atoms





## [0.2.1](https://github.com/kiwigrid/kiwi-components/compare/@kiwigrid/kiwi-atoms@0.2.0...@kiwigrid/kiwi-atoms@0.2.1) (2020-08-31)


### Bug Fixes

* **kiwi-atoms:** kiwi-modal now closes on click outside of it ([2ff6b01](https://github.com/kiwigrid/kiwi-components/commit/2ff6b012d509493a31a8b34f116c6eff87c37604))





# [0.2.0](https://github.com/kiwigrid/kiwi-components/compare/@kiwigrid/kiwi-atoms@0.1.1...@kiwigrid/kiwi-atoms@0.2.0) (2020-08-17)


### Features

* **kiwi-atoms:** added new component kiwi-modal ([b4361a5](https://github.com/kiwigrid/kiwi-components/commit/b4361a5478a92add361b4b92787f703af8c6d4b1))





## [0.1.1](https://github.com/kiwigrid/kiwi-components/compare/@kiwigrid/kiwi-atoms@0.1.0...@kiwigrid/kiwi-atoms@0.1.1) (2020-08-05)


### Bug Fixes

* **kiwi-atoms:** expose i18next t function in kiwi-i18next-provider ([22d8f42](https://github.com/kiwigrid/kiwi-components/commit/22d8f42f259ebe4af05556d040a9795b188cd27c))





# 0.1.0 (2020-08-03)


### Bug Fixes

* **kiwi-atoms:** fix kiwi-i18next-provider spec test ([23c2d66](https://github.com/kiwigrid/kiwi-components/commit/23c2d66e2c7495f288f235ec0e1549f46e7337a7))


### Features

* **kiwi-atoms:** added atom components package ([f2be86f](https://github.com/kiwigrid/kiwi-components/commit/f2be86f1cdac2871a8b3b27130a2be3a02cbb5ad))
