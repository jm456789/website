$(document).ready(function () {
        
    /* slogan */
    $("#s_main .slogan").addClass("load");
    
    /* contact me */
    $(".btn_contact").click(function(){
        $(".icon_phone").addClass("on");
        $(".icon_mail").addClass("on");
    });
    
    /* aside */
    (function (global, $) {

        var $menu     = $('#aside ul li'),
            $contents = $('.cont'),
            $doc      = $('html, body');
        $(function () {

            $menu.on('click','a', function(e){
                var $target = $(this).parent(),
                    idx     = $target.index(),
                    section = $contents.eq(idx),
                    offsetTop = section.offset().top;
                $doc.stop()
                        .animate({
                            scrollTop :offsetTop
                        }, 500);
                return false;
            });
        });

        $(window).scroll(function(){

            var scltop = $(window).scrollTop();

            $.each($contents, function(idx, item){
                var $target   = $contents.eq(idx),
                    i         = $target.index(),
                    targetTop = $target.offset().top;

                if (targetTop <= scltop) {
                    $menu.removeClass('on');
                    $menu.eq(idx).addClass('on');
                }
            })

        });

    }(window, window.jQuery));
    
    /* slider */
    var $status = $('.pagingInfo');
    var $slickElement = $('.main_slider'); 
    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.html('<span>' + i + '</span>' + '/' + slick.slideCount);
    });

    $('.main_slider').slick({
        dots: false, 
        arrows: false,
        infinite: true,
        autoplay:true,
        speed:500,
        fade: true,
    });
        
    /* project */
    $("#s_project .tab button").click(function(){
        
        $("#s_project .tab li").removeClass("on");
        $(this).parent().addClass("on");        
        
        var tab_d = $("#s_project .tab .tab_design").hasClass("on");
        var tab_p = $("#s_project .tab .tab_publishing").hasClass("on");
        
        if( tab_d == true ){            
            $(".project_list ul li").hide();
            $(".project_list ul .p_design").show();
            
        }else if( tab_p == true){            
            $(".project_list ul li").hide();
            $(".project_list ul .p_publishing").show();
            
        }else{
            $(".project_list ul .p_design").show();
            $(".project_list ul .p_publishing").show();
        }
        
    });
    
    /* popup */
	$(".layer_popup").hide();
	$(".btn_layer").click(function(){
		$('html, body').css({'overflow': 'hidden', 'height': '100%'});
		var el = $(this);
		$(".layer_overlay").show();
		var pop_name = $(this).data('pop_name')
		$("."+ pop_name +"").show();
		$(".layer_wrap").attr("tabindex", "0").focus().css('outline','0');
		el.attr('data-focus','on');
		var pop_height = $("."+ pop_name +" .layer_wrap").outerHeight();
		var pop_width = $("."+ pop_name +" .layer_wrap").outerWidth();
		$("."+ pop_name +" .layer_wrap").css('margin-top','-'+ pop_height/2 +'px').css('margin-left','-'+pop_width/2+'px');
		return false;
	});
	
	$(".layer_popup .btn_pop_close").click(function(){
		$('html, body').css({'overflow': 'auto', 'height': 'auto'});
		$(".layer_overlay").hide();
		$(".layer_popup").hide();
		$("a[data-focus~=on]").focus();
		$("button[data-focus~=on]").focus();
		window.setTimeout(function(){
			$("a[data-focus~=on]").removeAttr("data-focus");
			$("button[data-focus~=on]").removeAttr("data-focus");
		},500);
		return false;
	});
        
    /* scrollbar */
    $(".mCustomScrollbar").mCustomScrollbal();  
        
    
});

/* scroll */
$(window).load(function(){
	objAni();
    
    function objAni(){
        if(!($('.bg_txt').length > 0)) return;
            $(window).scroll(function(){
            var winTop = $(document).scrollTop();
            var topSet = $('#s_about').offset().top - 200;
            var wHeight = $(window).height();
            var alpha = (wHeight - (winTop * 62)) / wHeight;
            $(window).scroll(function(){
                if(topSet < winTop){
                    $('#s_about .bg_txt').css('transform', 'translateX('+ alpha  +'vw)');
                }
            });
        });
    }
});


