$(document).ready(function() {    
    
    /*   gnb    */
   $(".gnb > li > a").click(function(){       
       $(this).parent().children("ul").slideToggle();
       $(".gnb > li > a").not(this).parent().children("ul").slideUp();      
       $(this).parent().toggleClass("on");
       $(".gnb > li > a").not(this).parent().removeClass("on");      
       $(".gnb > li > ul > li > a").not(this).parent().children("ul").slideUp(); 
       $(".gnb > li > ul > li > a").not(this).parent().removeClass("on");  
       return false;
   });
    
    $(".gnb > li > ul > li > a").click(function(){       
       $(this).parent().children("ul").slideToggle();
       $(".gnb > li > ul > li > a").not(this).parent().children("ul").slideUp(); 
       $(this).parent().toggleClass("on");
       $(".gnb > li > ul > li > a").not(this).parent().removeClass("on");
   });
    
    $(".plus_a").click(function(){ 
        return false;
   });
    
    /*  gnb 이미지 추가  */
    $(".gnb > li > ul > li ").children("ul").parent().addClass("plus");
    
    /*   header    */
   $(".show_h").click(function(){       
       $(".wrap").toggleClass("hide");
   });
    
    /*  tab */
    $(".tab > ul > li > button").click(function(){   
       $(".tab > ul > li > button").parent().removeClass("on");
       $(this).parent().addClass("on");
   });
    
});