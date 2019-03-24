


$('#hamburger').click(function(){

      $('.menuu').toggle('slow');
      $('#tlacidla_header').toggle(10);
  });

var backToTop = $('<a>', {
  href: '#domov',
  class: 'backToTop',
  html: '<i class="fas fa-sort-up fa-5x"></i>'

});

backToTop
.hide()
.appendTo('body')
.on('click', function() {
  $('body').animate({ scrollTop: 0 });
});

var win = $(window);
win.on('scroll', function() {
  if ( win.scrollTop() >= 500 ) backToTop.fadeIn();
  else backToTop.hide();
});
