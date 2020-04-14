$(document).ready(function(){
	
    /* popup */
    $(".layer_pop button").click(function(){
        $("body").removeClass("pop_open");
        $(".layer_pop").hide();
    });
    
	//마우스 오버 시 메뉴 스타일 변경
	$("header nav").on("mouseenter focusin", function(){ 
		$("header").addClass("menu");
		$("header nav").addClass("on");
		$("header .bg").show(); 
	});
	
	$("header").on("mouseleave", function(){ 		
		$("header nav").removeClass("on");
		$("header .bg").hide(); 
	});
	
	$("header nav>ul>li:last-child>ul>li:last-child>a").on("focusout", function(){ 
		$("header").removeClass("menu");
		$("header nav").removeClass("on");
		$("header .bg").hide(); 
	});
	
	$("header nav>ul>li>ul").on("mouseenter focusin", function(){ 
		$(this).parent().addClass("on");
	});	
	$("header nav>ul>li>ul").on("mouseleave focusout", function(){ 
		$("header nav>ul>li>ul").parent().removeClass("on");
	});	
	
	//스크롤 내리면 header에 menu클래스를 추가해서 헤더의 스타일 변경!
	
	//문서가 준비되면 한번 실행
	var scrolling = $(window).scrollTop();
	console.log(scrolling);
	scroll_check();
	
	//윈도우가 스크롤될때 마다 한번씩 실행
	$(window).scroll(function(){
		scrolling = $(window).scrollTop();
		console.log(scrolling);
		scroll_check();
	});
	
	function scroll_check(){
		//header의 스타일 교체
		if(scrolling>0){
			$("header").addClass("menu");
		}else{
			$("header").removeClass("menu");
		}
		
		//all의 숫자 넘어가는 효과
		if(scrolling>0){
			$(".num").addClass("on");
		}else{
			$(".num").removeClass("on");
		}
		
		//board의 light 라인 나타나는 효과
		if(scrolling>1290){
			$(".board .bg_line .light_b").addClass("show");
			$(".board .bg_line .light_g").addClass("show");
		}else{
			$(".board .bg_line .light_b").removeClass("show");
			$(".board .bg_line .light_g").removeClass("show");
		}
		//board의 bold 라인 나타나는 효과
		if(scrolling>1847){
			$(".board .bg_line .bold_b").addClass("show");
			$(".board .bg_line .bold_g").addClass("show");
		}else{
			$(".board .bg_line .bold_b").removeClass("show");
			$(".board .bg_line .bold_g").removeClass("show");
		}
	}
	
});