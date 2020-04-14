$(document).ready(function () {
    
    /* header menu */
    $(".gnb > ul > li > a").mouseenter(function(){
        $(".gnb").addClass("menu_on");
        $(".gnb > ul > li").removeClass("on");
        $(this).parent().addClass("on");
    });
    
    $(".gnb > ul > li").mouseleave(function(){
        $(".gnb").removeClass("menu_on");
        $(".gnb > ul > li").removeClass("on");
    });
    
    $(".gnb > ul > li > a").click(function(){
        return false;
    });
    
    $(".gnb.site_map_on > ul > li > a").mouseenter(function(){
        $(".gnb").removeClass("menu_on");
        $(".gnb > ul > li").removeClass("on");
    });
    
    /* header sitemap */
    $(".gnb > ul > li > .site_map").click(function(){
        $("body").addClass("sitemap_bg");
        $(".gnb").addClass("site_map_on");
    })
    
    $(".gnb .site_map_close").click(function(){
        $("body").removeClass("sitemap_bg");
        $(".gnb").removeClass("site_map_on");
    })
    
    /* header bell */
    $(".h_btn_bell").click(function(){
       $(this).next().toggle(); 
    });
    
    /* main mobile tab */
    if($(window).width() < 1024) { 
            
        $('.tab_view').show();
        $('.tab_cont').hide();
        $('.tab_cont:eq(0)').show();
        $(".tab_view").on("click", "button", function(){
            $(this).parents('.tab_view').find('button').removeClass('on');
            $(this).addClass('on');

            var tab_type = $(this).parents('.tab_view').find('li').length; //ul 타입인지 확인 
            if ($(tab_type).length > 0 ){ // ul 타입일때 
                var tab_num = $(this).parent().index() + 1;
                $('.tab_cont').hide();
                $('.tab_cont'+ tab_num ).show();
            } else { // inline 타입일때 
                var tab_num = $(this).index()+1;
                $('.tab_cont').hide();
                $('.tab_cont'+ tab_num ).show();
            }
            return false;
        });
    } else{
        $('.tab_view').hide();
        $('.tab_cont').show();
    }
    
    $(window).on("resize", function() { 
        
        if($(window).outerWidth() < 1025) { 
            
            $('.tab_view').show();
            $('.tab_cont').hide();
            $('.tab_cont:eq(0)').show();
            $(".tab_view").on("click", "button", function(){
                $(this).parents('.tab_view').find('button').removeClass('on');
                $(this).addClass('on');

                var tab_type = $(this).parents('.tab_view').find('li').length; //ul 타입인지 확인 
                if ($(tab_type).length > 0 ){ // ul 타입일때 
                    var tab_num = $(this).parent().index() + 1;
                    $('.tab_cont').hide();
                    $('.tab_cont'+ tab_num ).show();
                } else { // inline 타입일때 
                    var tab_num = $(this).index()+1;
                    $('.tab_cont').hide();
                    $('.tab_cont'+ tab_num ).show();
                }
                return false;
            });
            $('.tab_view li button').removeClass('on');
            $('.tab_view li:first-child button').addClass('on');
        } else{
            $('.tab_view').hide();
            $('.tab_cont').show();
        }
    });
    
    /* 레이어 팝업 */
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
    $(".popup_title .btn_pop_close").keydown(function(e){
		if(e.shiftKey && e.keyCode == 9){
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
		}
	});
    
    $(window).on("resize", function() { 
        
        if($(window).width() < 1025) { 
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
            $(".popup_title .btn_pop_close").keydown(function(e){
                if(e.shiftKey && e.keyCode == 9){
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
                }
            });
        } 
    });
    
    /* upload */
    var fileTarget = $('.filebox .upload-hidden');
    
    fileTarget.on('change', function(){ // 값이 변경되면
        if(window.FileReader){ // modern browser
            var filename = $(this)[0].files[0].name;
        } else { // old IE
            var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출
        } 
        
        // 추출한 파일명 삽입 
        $(this).siblings('.upload-name').val(filename);
    });
    
    
    
    
    
    
    
    /* 전체체크 */
    $("#all_check1").click(function(){
        
        if($("#all_check1").prop("checked")){
            $("input[name=checkbox1]").prop("checked",true);
        }else{
            $("input[name=checkbox1]").prop("checked",false);
        }
    })
    
    $("#all_check2").click(function(){
        
        if($("#all_check2").prop("checked")){
            $("input[name=checkbox2]").prop("checked",true);
        }else{
            $("input[name=checkbox2]").prop("checked",false);
        }
    })
    
    $("#all_check3").click(function(){
        
        if($("#all_check3").prop("checked")){
            $("input[name=checkbox3]").prop("checked",true);
        }else{
            $("input[name=checkbox3]").prop("checked",false);
        }
    })
    
    /* datepicker */
    $(".datepicker").datepicker({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        dayNames: ['일','월','화','수','목','금','토'],
        dayNamesShort: ['일','월','화','수','목','금','토'],
        dayNamesMin: ['일','월','화','수','목','금','토'],
        showMonthAfterYear: true,
        changeMonth: true,
        changeYear: true,
        yearRange: 'c-100:c+10',
    });
    
    /* MonthPicker 
    options = {
        pattern: 'yyyy-mm', // Default is 'mm/yyyy' and separator char is not mandatory        
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        showMonthAfterYear: true,
        changeMonth: true,
        changeYear: true,
        startYear:1900
    };
    $('.monthpicker').monthpicker(options);
    */
    
    /* MonthPicker Set */
    $('.monthpicker').monthpicker({
    pattern: 'yyyy-mm', // Default is 'mm/yyyy' and separator char is not mandatory
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
    });
    
    /* scrollbar */
    $(".mCustomScrollbar").mCustomScrollbal();
    
    
});


