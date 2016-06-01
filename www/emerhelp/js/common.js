$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
$(document).ready(function(){
	$(".toggle-menu").click(function() {
		$(".menu-block").toggle('active');
	});

	$('.slider-div').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '200px'
	});

	$('.logos-div').slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		adaptiveHeight: true
	});

	$("a#inline").fancybox({
		'hideOnContentClick': true
	});

	$(".btn-green").click(function(){
		var compServerCount = "Компьютеров:" + $("#compInput").val()+" Серверов"+$("#servInput").val();
		$('#comment').append(compServerCount);
	});

	$("#compInput, #servInput").on('input', function(){
		compVal = parseInt($("#compInput").val());
		servVal = parseInt($("#servInput").val());

		if( isNaN( compVal ))
			compVal = 0
		if( isNaN( servVal ))
			servVal = 0

		if( compVal >= 1 && compVal <= 10 ) compVal = compVal * 850
			else if( compVal >= 11 && compVal <= 20 ) compVal = compVal * 800
				else if( compVal >= 21 && compVal <= 35 ) compVal = compVal * 750
					else if( compVal >= 36 && compVal <= 50 ) compVal = compVal * 700
						else if( compVal >= 51 && compVal <= 80 ) compVal = compVal * 650
							else if( compVal >= 81 && compVal <= 120 ) compVal = compVal * 600

								if( servVal >=1 && servVal <= 3 ) servVal = servVal * 4000
									else if( servVal >= 4 && servVal <= 6 ) servVal = servVal * 3500
										else if( servVal >= 7 && servVal <= 12 ) servVal = servVal * 3200

											priceVal = compVal + servVal
										$("#priceInput").val(priceVal)

									});

	$("#forma").validate({

		rules:{

			name:{
				required: true,
				minlength: 4,
				maxlength: 16,
			},

			email:{
				minlength: 6,
				maxlength: 30,
				email: true
			},
			phone:{
				minlength: 10,
				maxlength: 12,
				number: true
			}
		},

		messages:{

			name:{
				required: "Это поле обязательно для заполнения",
				minlength: "Имя должен быть минимум 4 символа",
				maxlength: "Максимальное число символо - 16"
			},

			email:{
				email: "Это некорректный e-mail",
				minlength: "e-mail должен быть минимум 6 символа",
				maxlength: "e-mail должен быть максимум 30 символов"
			},

			phone:{
				required: "Обязательно",
				minlength: "минимум 10 символа",
				maxlength: "максимум 12 символов"
			},
		}
	});
	$("#forma2").validate({

		rules:{

			name:{
				required: true,
				minlength: 4,
				maxlength: 16,
			},

			email:{
				minlength: 6,
				maxlength: 30,
				email: true
			},
			phone:{
				required: true,
				minlength: 10,
				maxlength: 12,
				number: true
			}
		}
	});
	$("body").on('click', '[href*="#"]', function(e){
		var fixed_offset = 100;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		e.preventDefault();
	});
	$(window).scroll(function(){
		$('.top-line').toggleClass('scrolled', $(this).scrollTop() > 300);
	});

});
