$('.menu-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
});



$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $('.menu.btn').toggleClass('menu.btn_active');
  $('.lil').toggleClass('lil_active');
})