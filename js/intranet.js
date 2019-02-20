$(function() {
  $('.item-menu').click(function() {
    $('.item-menu').removeClass('is-active');
    menu = $(this).data('menu');
    if (sessionStorage['menuAtual'] == menu) {
      $('#' + menu).toggle();
      sessionStorage['menuAtual'] = '';
    }
    else {
      $('.conteudo-menu').hide();
      $('#' + menu).toggle();
      sessionStorage['menuAtual'] = menu;
      $(this).addClass('is-active');
    }
  });
});