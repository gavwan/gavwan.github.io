$( document ).ready(function() {
$('html').on('click', '#search-toggle', function() {
  $('#search').val('');
  if ($(this).find('span').hasClass('fa-search')) {
    $('#search').focus();
  }
	$('.main-search').toggleClass('active');
  $(this).find('span').toggleClass('fa-search');
  $(this).find('span').toggleClass('fa-times');
});
});
