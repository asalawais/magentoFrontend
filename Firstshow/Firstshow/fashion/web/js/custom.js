require([
	'jquery',
	'firstshow/owlcarousel'
	/* 'firstshow/waypoints',
	'firstshow/counterup' */
], function(jQuery){
	(function($) {
		$(document).ready(function(){
			$('.header .switcher-dropdown').hide();
			var widthScreen = $(window).width();
			var widthContainer = $('.header .middle-header-content .container').width();
			var rightPadding = (widthScreen-widthContainer-24)/2;
			$('.header .top-bar-right .minicart-wrapper.switcher').css("right", rightPadding+"px");
			$('.vertical-menu-home .vertical-title').click(function(){
				$(this).parent().find('.vertical-menu-content').slideToggle('fast');
			});
			$('.product-content .controls .towishlist.no-active').mouseover(function(){
				$(this).find('.fa').addClass('fa-heart');
				$(this).find('.fa').removeClass('fa-heart-o');
			});
			$('.product-content .controls .towishlist.no-active').mouseout(function(){
				$(this).find('.fa').addClass('fa-heart-o');
				$(this).find('.fa').removeClass('fa-heart');
			});
			$('.filter-options-block .block-title').click(function(){
				$(this).parent().find('.panel-body').slideToggle('fast');
				if($(this).hasClass('closed')){
					$(this).removeClass('closed');
					$(this).parent().removeClass('closed');
				}else{
					$(this).addClass('closed');
					$(this).parent().addClass('closed');
				}
			});
			$('.btn-responsive-nav').click(function(){
			   $('.navigation').addClass('show-menu')
			});
			$('.navigation .fa-times').click(function(){
				$('.navigation').removeClass('show-menu');
			});

			$('.mega-menu-item ul.dropdown-menu .level1 .toggle-menu .fa-plus').click(function(){
				$(this).parent().siblings('ul').slideDown('fade');
					$(this).addClass('hide-plus');
					$(this).siblings('.fa-minus').addClass('show-minus');
			});

			$('.mega-menu-item ul.dropdown-menu .level1 .toggle-menu .fa-minus').click(function(){
					$(this).parent().siblings('ul').slideUp('fade');
					$(this).siblings('.fa-plus').removeClass('hide-plus');
					$(this).removeClass('show-minus');
			});

			$('.static-menu .dropdown-submenu .toggle-menu .fa-plus').click(function(){
				$(this).parent().siblings('ul').slideDown('fade');
					$(this).addClass('hide-plus');
					$(this).siblings('.fa-minus').addClass('show-minus');
			});

			$('.static-menu .dropdown-submenu .toggle-menu .fa-minus').click(function(){
				$(this).parent().siblings('ul').slideUp('fade');
					$(this).siblings('.fa-plus').removeClass('hide-plus');
					$(this).removeClass('show-minus');
			});

			$('.header-promotion').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        autoplay: true,
        margin: 0,
        stagePadding: 0,
        autoplayTimeout:3500,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp'
      });

			var t = $(".c-dynamic_field").closest("form, .js-dynamic_form");
			$(".c-dynamic_field").on("focus", "input, textarea", (function (t) {
				$(t.currentTarget).closest(".form-group").addClass("".concat("active", " ").concat("focused"))
			})).on("blur", "input, textarea", (function (t) {
				t.currentTarget.value ? $(t.currentTarget).closest(".form-group").removeClass("focused") : $(t.currentTarget).closest(".form-group").removeClass("".concat("active", " ").concat("focused"))
			})).on("change input:changed", "input, textarea", (function (t) {
				t.currentTarget.value ? $(t.currentTarget).closest(".form-group").addClass("active") : $(t.currentTarget).closest(".form-group").removeClass("active")
			})).on("keyup", "input, textarea", (function (t) {
				t.currentTarget.value ? $(t.currentTarget).closest(".form-group").find(".js-clear-input").removeClass("d-none") : $(t.currentTarget).closest(".form-group").find(".js-clear-input").addClass("d-none")
			})).on("click", ".js-clear-input", (function (t) {
				var e = $(t.currentTarget),
					n = e.closest(".form-group");
				e.addClass("d-none").closest(".form-group").find("input").val("").trigger("change"), n.find(".is-invalid").removeClass("is-invalid")
			})), t.find("".concat(".c-dynamic_field", " input")).each((function (t, e) {
				var n = $(e),
					o = n.closest(".form-group");
				n.val() && o.find(".js-clear-input").removeClass("d-none"), (n.val() || n.css("box-shadow").match(/inset/)) && o.addClass("active")
			}));

		});
		$(window).load(function(){
			$('.header .switcher-dropdown').show();
		});
	})(jQuery);

});
