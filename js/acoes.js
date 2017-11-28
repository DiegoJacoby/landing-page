jQuery(document).ready(function($) {

	//Slider
	function slider() {
		var sliderEl = $('section#slider');

		function animaSlider(el){
			var limite = el.find('.item').length - 1;
			var animacao = setInterval(function(){
				var ativo = el.find('.item.ativo').index();
				var proximo;

				if ( ativo == limite){
					proximo = 0;
				} else {
					proximo = ativo + 1;
				}
				 
				movimento(el, proximo);
			}, 4000);

			$(document).on('click', '#slider a.seta', function(event) {
				event.preventDefault();

				clearInterval(animacao);

				var ativo = el.find('.item.ativo').index();
				var proximo;
				
				if ($(this).hasClass('mais')){
					if ( ativo == limite){
						proximo = 0;
					} else {
						proximo = ativo + 1;
					}
				} else {
					if ( ativo == 0){
						proximo = limite;
					} else {
						proximo = ativo - 1;
					}
				}
				 
				movimento(el, proximo);
			});		
		}
		
		function movimento(el, proximo) {
			el.find('.item:eq('+proximo+')').css('opacity','1');
			el.find('.item.ativo').animate({opacity: 0}, 300, function(){
				$(this).removeClass('ativo');			
				el.find('.item:eq('+proximo+')').addClass('ativo');
			});		
		}

		animaSlider(sliderEl);
	}

	slider();

	// Menu mobile
	$('.menu-mobile').click(function(event) {
		$('header').toggleClass('aberto');
	});
	
});
