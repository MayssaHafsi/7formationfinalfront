var selectCarousel = $('#carousel-1');
var selectInner = selectCarousel.find('.carousel-inner');

$('#btn-1').click( function() {
  selectInner.children('.item').remove();
  selectInner.append('<div class="item active"><img src="//placehold.it/900x300/c69/f9c/?text=1" alt=""></div>');
  selectInner.append('<div class="item"><img src="//placehold.it/900x300/9c6/cf9/?text=2" alt=""></div>');
  selectInner.append('<div class="item"><img src="//placehold.it/900x300/69c/9cf/?text=3" alt=""></div>');
  selectCarousel.carousel();
})

$('#btn-2').click( function() {
  selectInner.children('.item').remove();
  selectInner.append('<div class="item active"><img src="//placehold.it/900x300/c69/f9c/?text=4" alt=""></div>');
  selectInner.append('<div class="item"><img src="//placehold.it/900x300/9c6/cf9/?text=5" alt=""></div>');
  selectInner.append('<div class="item"><img src="//placehold.it/900x300/69c/9cf/?text=6" alt=""></div>');
  selectCarousel.carousel();
})


