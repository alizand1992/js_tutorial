test('Default test', () => {
  const $ = require('jquery');
  document.body.innerHTML =
    '<div id="body">' +
    '  <button id="load" />' +
    '</div>';

  require('../src/index');

  $('#load').click();

  console.log($('#body').html())
  expect($('#body').text()).toContain('I AM HERE');
});
