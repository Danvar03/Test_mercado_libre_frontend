import '@testing-library/jest-dom'
// eslint-disable-next-line no-undef
global.matchMedia = global.matchMedia || function () {
  return {
    matches: false,
    addListener: function () {},
    removeListener: function () {}
  }
}
