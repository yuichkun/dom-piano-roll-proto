$(document).ready(() => {
  const p = $('#grid-parent');
  for (let i = 0; i < 40 * 10; i++){
    const d = $('<div>').addClass('grid-item');
    d.click(() => {
      d.css('background', 'blue');
    })
    p.append(d);
  }
  $('#play').click(() => {
    p.addClass('playing');
    setTimeout(() => {
      p.removeClass('playing');
     }, 3000);
  })
});

