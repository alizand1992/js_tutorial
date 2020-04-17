test('Default test', () => {
  const $ = require('jquery');
  document.body.innerHTML =
    '<div id="body">' +
    '  <button id="load" />' +
    '</div>';


  require('../src/index');
  console.log(require('../src/index'));

  $('#load').click();

  expect($('#body').text()).toContain('I AM HERE');
});
