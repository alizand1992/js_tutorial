const cls = require('../../src/selectors/class');
const $ = require('jquery');

beforeEach(() => {
  document.body.innerHTML =
    '<div id="body">' +
    '  <div class="removeMe">Remove Me</div>' +
    '  <div class="removeMe">Remove Me</div>' +
    '  <div class="removeMe">Remove Me</div>' +
    '  <div class="changeMyText">I need changing!</div>' +
    '  <div class="changeMyText">I need changing!</div>' +
    '  <div class="changeMyText">I need changing!</div>' +
    '  <div class="index"></div>' +
    '  <div class="index"></div>' +
    '  <div class="index"></div>' +
    '  <button id="run" />' +
    '</div>';
});

describe('Class', () => {
  test('Remove multiple with class', () => {
    cls.removeMultipleWithClass();

    expect($('.removeMe')).toHaveLength(3);
    $('#run').click();
    expect($('.removeMe')).toHaveLength(0);
    expect($('#body').children()).toHaveLength(7);
  });

  test('Change multiple with class', () => {
    cls.changeMultipleWithClass();

    $('#run').click();

    $('.changeMyText').forEach((ele) => {
      expect(ele.text()).toBe('I got changed!');
    });

    $('.changeMyText, .index').forEach((ele) => {
      expect(ele.text()).not.toBe('I got changed!');
    });
  });

  test('Change with index', () => {
    cls.changeContentToIndex();

    $('#run').click();
    $('.index').forEach((ele, index) => {
      expect(ele.text()).toBe(index);
    });
  });∂
});
