var $ = require('jquery');

exports.startWith = () => {
  $('#run').click(function () {
    // TODO: Select all elements with IDs starting with "sameBeginning" and change their text
    //       to "I got changed."
  });
};

exports.contains = () => {
  $('#run').click(function () {
    // TODO: Select all elements with IDs containing "SameContain" and change their text to
    //       "I got changed."
  });
};

exports.elementsInsideAnotherElement = () => {
  $('#run').click(function () {
    // TODO: Select all spans inside of an element with ID "haveChildren" and change their
    //       text to "I got changed."
  });
};
