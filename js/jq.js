/*
* @Author: Dell
* @Date:   2020-06-07 19:28:06
* @Last Modified by:   Dell
* @Last Modified time: 2020-06-07 19:38:07
*/
<script>
	var index=0;     
	$(".slide").mousemove(function () {     
	      $(this).addClass("active").siblings().removeClass("active");      
		index=$(this).index();          
		$(".slide").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);    
	});
	var time=setInterval(move,1000);
	function move() {
        index++;
        if (index==9){
            index=0;
        }
        $(".slide").eq(index).addClass("active").siblings().removeClass("active");
        $(".slide").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
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
            index=8
        }
        $(".slide").eq(index).addClass("active").siblings().removeClass("active"); 
        $(".slide").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    }
    $("#left").click(function () {
        toLeft();
    });
</script>