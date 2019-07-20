jQuery(document).ready(function(){
	$('.header-top-line .menu-btn').click(function(){
		$(this).next('div').slideToggle('fast');
	});
});