jQuery(function($) {
	$('.main').height($(document).height());
	$('.fon_activ').height($(document).height());

	$("form").ajaxForm(function(){
		$("form").clearForm();
		//$("#modal_view").trigger("click");	
		$('.fon_activ').removeClass('fon_activ');
		$('.for_form, #final, .test').hide();
		$('.enter').fadeIn(300);
	});

	$('input[name="phone"]').mask("+7 (999) 999-9999");

	$('.li_click').click(function(){
		var grup = $(this).attr('grup');
		$('.li_click[grup="'+grup+'"]').removeClass('li_check');
		$('.error').remove();
		if(!$(this).hasClass('li_check')){
			$(this).addClass('li_check');
		}
		var val = $('input[name="test"]').attr('value');
		$('input[name="test"]').attr('value', val+'вопрос №'+grup+': '+$(this).text()+'<br>');
		$(this).parent('ul').next().attr('check', '1');
		$('.result span').text(grup*2000+'р');
		$('.informa').slideDown('slow');
	});

	$('#start').click(function(){
		$('.fon').height($(document).height());
		$('.fon').addClass('fon_activ');
		$('.enter').hide();
		$('.for_form').show();
		$('.test').fadeIn(300);	
		return false;	
	});

	$('.steping').click(function(){
		if($(this).attr('check') == 1){
			if($(this).attr('to') == 'final'){
				$('.informa').hide();
				$('.form p').text('Получите материалы прямо сейчас');
				$('.form button').text('Получить материалы');
				$('.form').css({'maegin-top':'50px'});
				$('input[name="hidden"]').attr('value', 'Форма в конце теста');
			}
			$(this).parent().hide();
			$('#'+$(this).attr('to')).fadeIn(300);
		}else{
			$(this).parent().append('<div class="error"><i>!Следует выбрать один из вариантов</i></div>');
		}
		return false;	
	});
});
	