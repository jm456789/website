$(document).ready(function() {
    //menu_over
    $(".tab-con >li").on("mouseover focusin", function(){
        $(".tab-con>li").removeClass("on");
        $(this).addClass("on");
        $(".header").addClass("show");
    });

    $(".tab-con").on("mouseleave", function(){
        $(".header").removeClass("show");
        $(".tab-con>li").removeClass("on");
    });

    $(".all_menu").on("focusin", function(){
        $(".header").removeClass("show");
        $(".tab-con>li").removeClass("on");
    });
    
    //all_menu
    $(".all_menu").on("click", function(){
        var menu_open = $(".wrap").hasClass("show_all_menu");
		if(menu_open == true){
			$(".wrap").removeClass("show_all_menu");		
            $(".all_menu_list").slideUp( "slow");
		}else{
			$(".wrap").addClass("show_all_menu");
            $(".all_menu_list").slideDown( "slow");
		}
	});
    $( window ).resize(function() {
        
       var windowWidth = $( window ).width();
        
        if (windowWidth > 1024) {
            $(".all_menu_list").hide();	
            $(".wrap").removeClass("show_all_menu");
        }
    });
    
    
    //popup    
    
    $(".btn-example.p3").click(function () {
        $(".pop-layer").hide();
        $(".dim-layer").show();
        $("#layer3").show();
        $("body").addClass("pop");
        return false
    });
    $(".btn-example.p5").click(function () {
        $(".pop-layer").hide();
        $(".dim-layer").show();
        $("#layer5").show();
        $("body").addClass("pop");
        return false
    });    
    $(".btn-example.p6").click(function () {
        $(".pop-layer").hide();
        $(".dim-layer").show();
        $("#layer6").show();
        $("body").addClass("pop");
        return false
    });
     $(".btn-example.p1").click(function () {
        $(".pop-layer").hide();
        $(".dim-layer").show();
        $("#layer1").show();
         $("body").addClass("pop");
        return false
    });
    $(".btn-example.p2").click(function () {
        $(".pop-layer").hide();
        $(".dim-layer").show();
        $("#layer2").show();
        $("body").addClass("pop");
        return false
    });
    $(".btn-example.p7").click(function () {
        $(".pop-layer").hide();
        $(".dim-layer").show();
        $("#layer7").show();
        $("body").addClass("pop");
        return false
    });
    $(".btn-example.p8").click(function () {
        $(".pop-layer").hide();
        $(".dim-layer").show();
        $("#layer8").show();
        $("body").addClass("pop");
        return false
    });
    $(".btn-example.p9").click(function () {
        $(".pop-layer").hide();
        $(".dim-layer").show();
        $("#layer9").show();
        $("body").addClass("pop");
        return false
    });
    $(".popup_cloes").click(function () {
		$(".dim-layer").hide();
        $("body").removeClass("pop");
    });
    $(".join").click(function () {
        $("body").addClass("pop");
        $(".pop-layer").hide();
        $(".dim-layer").show();
        $("#layer7").show();
        return false
    });   
    $(".map").click(function () {
        $("body").addClass("pop");
        $(".pop-layer").hide();
        $(".dim-layer").show();
        $("#layer5").show();
        return false
    });
    var announcements = $(".pl").bxSlider({
        pagerCustom: '#bx-pager',
        adaptiveHeight:true,
        mode: 'horizontal',
        autoStart:true,
        minSlides: 1,
        maxSlides: 1,
        autoReload:true,
        stopAutoOnClick:true,
        captions: true,
    });
    var pager = $("#bx-pager").bxSlider({
        mode: 'horizontal',
        pager:false,
        controls:true,
        slideWidth: 116,
        minSlides: 1,
        maxSlides: 20,

    });
    $(".btn-example.p4").click(function () {
        $("body").addClass("pop");
        $(".pop-layer").hide();
		$(".dim-layer").show();
        $("#layer4").show();
        announcements.reloadSlider();
        pager.reloadSlider();
        return false
    });
    
    //popup_popup
    $(".btn-example.p10").click(function () {        
        $(".dim-layer_1").show();
        $("#layer10").show();
    });
    $(".btn_c").click(function () {
		$(".dim-layer_1").hide();
    });
});
