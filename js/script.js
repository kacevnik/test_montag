jQuery(function($) {
	$('.back').height($(document).height());

	$(".to-modal").fancybox({
		'padding': '0px',
		'beforeClose': function(){
			location.reload();
		}
	});

	$(document).resize(function(){
		$('.back').height(resizeBack());
	});

	$("form").ajaxForm(function(){
		//$("a[title='Close']").trigger("click");
		$("form").clearForm();
		$("#modal_view").trigger("click");	
		$('.back').height(resizeBack());
	});

	function resizeBack(){
		if($('.resize').height() > $(window).height()){
			return $('.resize').height();
		}else{
			return $(document).height();
		}
	}

	$('input[name="phone"]').mask("+7 (999) 999-9999");
	
	$('.video_item').find('iframe').height($('.video_item').find('iframe').width()/1.777777777777778);

	$('a[href^="#"]').click(function () { 
	    elementClick = $(this).attr("href");
	    destination = $('[name="'+elementClick+'"]').offset().top;

       $('body,html').animate( { "scrollTop": destination }, "slow" );
       return false;
   });

	$('#but_start').click(function(){
		$('.main__text').hide();
		$('.back').fadeIn(700);
		$('.back').height(resizeBack());
	});

	$('.label_it').click(function(){
		var text = '';
		var text_fin = '';
		var sum = 2000 * $(this).attr('group');
		var nextStep = $(this).attr('group')*1;
		$('button[from="step_'+(nextStep+1)+'"]').show();
		$('.layer1').show();
		$('#price').text(sum);
		$('.back').height(resizeBack());
		if($(this).hasClass('ext')){
			true;
		}else{
			$('.label_it[group='+$(this).attr('group')+']').css({'background-position-y':'0px'});
		}

		if($(this).css('background-position-y') == '0px'){
			$(this).css({'background-position-y':'-28px'});
			text = $(this).parent('ul').parent().parent().find('h1').text() + ': ' + $(this).text()+'; ';
			$(this).parent('ul').parent().parent().find('h1').attr('data', text);	
			text_fin = $('input[name=arr]').attr('value');
			$('input[name=arr]').attr('value', text_fin + text);
			$('input[name=test]').attr('value', text_fin + text);			
		}else{
			$(this).css({'background-position-y':'0px'});
		}
	});

	$('.step').click(function(){
		$('.test_body_item').hide();
		if($(this).attr('from').split('_')[1] == 11){
			$('.one').hide();
			$('.two').fadeIn(500);
		}else{
			$('#step_'+ $(this).attr('from').split('_')[1]).fadeIn(500);
		}
		$('.back').height(resizeBack());
	});

});