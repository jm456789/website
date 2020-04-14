// 상단메뉴

$(document).ready(function() {
    
    /* header */
    $(".h_sub > ul > li > a").mouseover(function(){
        $(".h_bg").stop().slideDown("fast");
        $(".h_sub ul ul").stop().slideDown("fast");
    });
    
    $(".h_sub").mouseleave(function(){
        $(".h_bg").stop().slideUp("fast");
        $(".h_sub ul ul").stop().slideUp("fast");
    });
    
    /* 탭 */
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
    
    /* 메인 이벤트 */
    $('.img_cont').hide();
	$('.img_cont:eq(0)').show();
	$(".event_list").on("mouseenter", "a", function(){

		var tab_type = $(this).parents('.event_list').find('li').length; //ul 타입인지 확인 
		if ($(tab_type).length > 0 ){ // ul 타입일때 
			var tab_num = $(this).parent().index() + 1;
			$('.img_cont').hide();
			$('.img_cont'+ tab_num ).show();
		} else { // inline 타입일때 
			var tab_num = $(this).index()+1;
			$('.img_cont').hide();
			$('.img_cont'+ tab_num ).show();
		}
		return false;
	});
    
    /* 회원가입 */
    $("#che1").click(function(){
        
        if($("#che1").prop("checked")){
            $("input[name=checkbox]").prop("checked",true);
        }else{
            $("input[name=checkbox]").prop("checked",false);
        }
    })
    
    $('.join_form .join_agree ul .agree_inner').hide();
    $(".join_agree ul li button").click(function(){
        $(this).parent().find(".agree_inner").slideToggle();
        $(this).parent().toggleClass("on");
    });
    
    /* 팝업 */
	$(".btn_pop").click(function(){
		$('html, body').css({'overflow': 'hidden', 'height': '100%'});        
        var el = $(this);
        $("body").addClass("pop_show");
		var pop_name = $(this).data('pop_name')
		$("."+ pop_name +"").show();
        $(".pop_wrap").attr("tabindex", "0").focus().css('outline','0');
        el.attr('data-focus','on');
		var pop_height = $("."+ pop_name +" .pop_wrap").outerHeight();
		$("."+ pop_name +" .pop_wrap").css('margin-top','-'+ pop_height/2 +'px');
		return false;
	});
	
	$(".btn_pop_close").click(function(){
		$('html, body').css({'overflow': 'auto', 'height': 'auto'});
		$("body").removeClass("pop_show");
		$(".popup").hide();
        $("a[data-focus~=on]").focus();
		$("button[data-focus~=on]").focus();
		window.setTimeout(function(){
			$("a[data-focus~=on]").removeAttr("data-focus");
			$("button[data-focus~=on]").removeAttr("data-focus");
		},500);
	});
    
    $(".btn_pop_close1").click(function(){
		$(this).parents().find(".pop_step_1").hide();
	});
    
    /* 매장찾기 */
    $(".btn_find_list").click(function(){
        
        var mar_list = $(this).parent().hasClass("on");
        
        if( mar_list == true){
            $(".mar_find_list li").removeClass("on");
            $(".mar_find_list .map_pic").slideUp("fast");
        }else{
            $(".mar_find_list li").removeClass("on");
            $(".mar_find_list .map_pic").slideUp("fast");
            $(this).parent().addClass("on");
            $(this).next().slideDown("fast");
        }
    });
    
});















