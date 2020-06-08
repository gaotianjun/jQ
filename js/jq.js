/*
* @Author: Dell
* @Date:   2020-06-07 19:28:06
* @Last Modified by:   Dell
* @Last Modified time: 2020-06-08 08:29:57
*/
	var index=0;     
	$(".nav li").mousemove(function () {     
	      $(this).addClass("active").siblings().removeClass("active");      
		index=$(this).index();          
		$(".img li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);    
	});
	var time=setInterval(move,1000);
	function move() {
        index++;
        if (index==8){
            index=0;
        }
        $(".nav li").eq(index).addClass("active").siblings().removeClass("active");
        $(".img li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    };
    $("#box").hover(function () {
        clearInterval(time);
    },function () {
        time=setInterval(move,1000);
    });
    $("#right").click(function () {
       move();
    });

    function toLeft() {
        index--;
        if (index==-1){
            index=7
        }
        $(".nav li").eq(index).addClass("active").siblings().removeClass("active"); 
        $(".img li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    }
    $("#left").click(function () {
        toLeft();
    });
