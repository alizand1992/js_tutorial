const id = require('../../src/selectors/id');
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

describe('id', () => {
  test('Remove With ID Works', () => {
    id.removeWithId();

    expect($('#removeMe')).toHaveLength(1);
    $('#run').click();
    expect($('#removeMe')).toHaveLength(0);
  });

  test('Change with id text', () => {
    id.changeTextWithId();

    expect($('#changeMyText').text()).toBe('I need changing!');
    $('#run').click();
    expect($('#changeMyText').text()).toBe('I got changed!');
  });

  test('Add to element with id', () => {
    id.addTextWithId();

    expect($('#addToMyText').text()).toBe('Ive been here.');
    $('#run').click();
    expect($('#addToMyText').text()).toBe('Ive been here. I got added!');
  });

  test('Add text with style', () => {
    id.addRedTextWithId();

    $('#run').click();
    expect($('#addRedTextToMe span')).toHaveLength(1);
    expect($('#addRedTextToMe span').attr('style')).toBe('color: red;');
  });
});
