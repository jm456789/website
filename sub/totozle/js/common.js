$(document).ready(function () {
    /* gnb */
    $(".gnb_open").click(function(){       
        $("body").addClass("nav_open");
        $("#gnb li:first-child a").focus();
    });
    $(".gnb_close").click(function(){       
        $("body").removeClass("nav_open");
        $(".gnb_open").focus();
    });
    $("#skip ul li a").focusin(function(){       
        $("body").removeClass("nav_open");
    });
    /* gnb */

	/* 레이어 팝업 */
	$(".layer_popup").hide();
	$(".btn_layer").click(function(){
		$('html, body').css({'overflow': 'hidden', 'height': '100%'});
		var el = $(this);
		$(".layer_overlay").show();
		$(".layer_popup").removeClass("mini_popup")
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
		$(".layer_popup").removeClass("mini_popup");
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
			$(".layer_popup").removeClass("mini_popup");
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
	

	$(".btn_popup button:last-child, .btn_popup a:last-child").keydown(function(e){
		if(e.shiftKey && e.keyCode == 9){

		}else if(e.keyCode == 9){
			$('html, body').css({'overflow': 'auto', 'height': 'auto'});
			$(".layer_popup").removeClass("mini_popup");
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


	$(".btn_layer.btn_mini_popup").click(function(){
		$(".layer_popup").addClass("mini_popup");
		return false;
	});	

	/* 질문지 만들기 */
	 $("#ques_add").click(function(){
		var chk = $(this).is(":checked");//.attr('checked');
		if(chk){
			$('.ques_add_box').slideDown();
		}else{
			$('.ques_add_box').slideUp();
		}
	});

	/* number_type 증가 / 감소 */
	$('.btn_minus').click(function(e){
		e.preventDefault();
		var stat = $(this).parent().find('input').val();
		var num = parseInt(stat,10);
		num--;
		if(num<=0){
			alert('더이상 줄일수 없습니다.');
			num =1;
		}
		$(this).parent().find('input').val(num);
	});
	
	$('.btn_plus').click(function(e){
		e.preventDefault();
		var stat = $(this).parent().find('input').val();
		var num = parseInt(stat,10);
		num++;
		$(this).parent().find('input').val(num);
	});
	
	/* 참여타입 선택 처리 */
	$('.play_set_type button').click(function(e){
		$('.play_set_type button').removeClass('on');
		$(this).addClass('on');
	});

	/* 만다라트 선택 처리 */
	$('.mandalart_type button').click(function(e){
		$('.mandalart_type button').removeClass('on');
		$(this).addClass('on');
	});

	/* 옵션항목 추가 */
	$('.option_control button.option_add').click(function(e){
		$(this).parent().parent().parent().find('ul').append('<li><input type="text" id="" name="" title="항목입력" /></li>');
	});
	
	/* 옵션항목 삭제 */
	$('.option_control button.option_del').click(function(e){
		$(this).parent().parent().parent().find('ul > li:last-child').remove();
	});

	/* 지난토론방 전체토론step */
	$('.btn_prev_step').click(function(e){
		$('.prev_step_list').toggle();
	});

	/* 버튼활성화 처리 */
	$('.btn_active button, .btn_active a').click(function(e){
		$(this).parent().children().removeClass('on');
		$(this).addClass('on');
	});

	/* 하브루타 숨기기 처리 */
	$('.btn_havruta_hide button').click(function(e){
		if($(this).children().hasClass('icon_show')){
			$(this).find('span').text('숨기기').removeClass('icon_show').addClass('icon_hide');
			$(this).parents('.havruta_cont').find('.text_hide').hide();
		}else{
			$(this).find('span').text('보이기').removeClass('icon_hide').addClass('icon_show');
			$(this).parents('.havruta_cont').find('.text_hide').show();
		}
	});

	/* 성취도평가 설명문구 노출 */
	$('.btn_evalu_text button').click(function(e){
		$(this).next().toggle();
	});

	/* tab 활성화 처리 */
	$('.cont_tab > li > button').click(function(e){
		$('.cont_tab > li').removeClass('on');
		$(this).parent().addClass('on');
	});
	
	/* 신호등기법 활성화 */
	$('.traf_state .btn_active button').click(function(e){
		$('.traf_state button').removeClass('on');
		$(this).addClass('on');
	});
	


	/* 둘가고 둘남기 파견자 입력 컨트롤 */
	$(".twogo_control").on("click", "button", function(){
		if($(this).hasClass('option_add')){
			$('.twogo_reason').append('<textarea name="" rows="" cols="" placeholder="정리한 내용을 입력하세요!" class="mt10"></textarea>');
		}else if($(this).hasClass('option_del')){
			var num = $('.twogo_reason > textarea').length;
			if(num<=1){
				alert('더이상 줄일수 없습니다.');
			} else {
				$('.twogo_reason > textarea:last-child').remove();
			}
			
		}
	});

	/* 페이오프 표로 보기 */
	$(".btn_tbl_view").on("click", function(){
		if($(this).hasClass('btn_graph')){
			$(this).removeClass('btn_cr4 btn_graph').addClass('btn_ln4').text('페이오프 매트릭스(POM)');
			$('.view_table').show();
			$('.payoff_graph').hide();
		}else{
			$(this).removeClass('btn_ln4').addClass('btn_cr4 btn_graph').text('데이터 테이블');
			$('.view_table').hide();
			$('.payoff_graph').show();
		}
	});

	/* 생선뼈 원인선택 */
	$(".cause_btn > button").on("click", function(){
		$('.cause_list').show(300);
	});
	$(".cause_list button").on("click", function(){
		$('.cause_list').hide(300);
	});
	/* 생선뼈 원인명 선택 및 노출 */
	$(".cause_list > ul > li > a").on("click", function(){
		var cause_text = $(this).text();
		$('.cause_subject').text(cause_text);
		$('.cause_list').hide(300);
		return false;
	});

	/* 생선뼈 원인 사이즈 일괄 적용 */
	if(typeof ('.fish_cont') !== "undifined"){
		var maxHeight = 0;
		for(i=0;i<$(".fish_cont > ol> li > p").length;i++){
			if($(".fish_cont > ol> li > p").eq(i)){
				var currentHeight = $(".fish_cont > ol> li > p").eq(i).height();
				if(currentHeight>=maxHeight){
					maxHeight = currentHeight;
				}
			}
			else{
			 break;
			}
		}
		$(".fish_cont > ol> li > p").height(maxHeight);
	}

	/* 탭 보기 스크립트 */
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





});

