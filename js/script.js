jQuery(function($) {
	$('.main').height($(document).height());
	$('.fon_activ').height($(document).height());

	$('.li_click').click(function(){
		var grup = $(this).attr('grup');
		$('.li_click[grup="'+grup+'"]').removeClass('li_check');
		if(!$(this).hasClass('li_check')){
			$(this).addClass('li_check');
		}
	});
});
	