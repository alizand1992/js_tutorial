const selectors = require('../src/selectors');
const $ = require('jquery');

beforeEach(() => {
  document.body.innerHTML =
    '<div id="body">' +
    '  <div id="removeMe">Remove Me</div>' +
    '  <div id="changeMyText">I need changing!</div>' +
    '  <div id="addToMyText">Ive been here.</div>' +
    '  <div id="addRedTextToMe"></div>' +
    '  <button id="run" />' +
    '</div>';
});

test('Remove With ID Works', () => {
  selectors.removeWithId();

  expect($('#removeMe')).toHaveLength(1);
  $('#run').click();
  expect($('#removeMe')).toHaveLength(0);
});

test('Change with id text', () => {
  selectors.changeTextWithId();

  expect($('#changeMyText').text()).toBe('I need changing!');
  $('#run').click();
  expect($('#changeMyText').text()).toBe('I got changed!');
});

test('Add to element with id', () => {
  selectors.addTextWithId();

  expect($('#addToMyText').text()).toBe('Ive been here.');
  $('#run').click();
  expect($('#addToMyText').text()).toBe('Ive been here. I got added!');
});

test('Add text with style', () => {
  selectors.addRedTextWithId();

  $('#run').click();
  expect($('#addRedTextToMe span')).toHaveLength(1);
  expect($('#addRedTextToMe span').attr('style')).toBe('color: red;');
});
