const css = require('../../src/selectors/css');
const $ = require('jquery');

beforeEach(() => {
  document.body.innerHTML =
    '<div id="body">' +
    '  <div id="sameBeginning1"></div>' +
    '  <div id="sameBeginning2"></div>' +
    '  <div id="sameBeginning3"></div>' +
    '  <div id="aSameContain1"></div>' +
    '  <div id="bSameContain2"></div>' +
    '  <div id="cSameContain3"></div>' +
    '  <div id="haveChildren">' +
    '    <span></span>' +
    '    <span></span>' +
    '    <span></span>' +
    '    <div></div>' +
    '  </div>' +
    '  <button id="run" />' +
    '</div>';
});

describe('CSS Selectors', () => {
  test('startWith', () => {
    css.startWith();
    $('#run').click();
  });

  test('contains', () => {
    css.contains();
    $('#run').click();
  });

  test('elementsInsideAnotherElement', () => {
    css.elementsInsideAnotherElement();
    $('#run').click();
  });
});
