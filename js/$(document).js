$(document).ready(function(){
	$(".nav-toggle").click(function(){
		$("nav").toggleClass("active");
		$(".bar").toggleClass("active");
	});
	$("video").hover(function(){
		$(this).get(0).play();
		$(this).attr("controls","controls");
	});
	$("video").mouseout(function(){
		$(this).get(0).pause();
		$(this).removeAttr("controls");
	});
	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
			$("#topBtn").fadeIn();
		} else{
			$("#topBtn").fadeOut();
		}
	});
	$("#topBtn").click(function(){
		$("html, body").animate({scrollTop : 0},1000);
	});
	$(".soc-img").hover(function(){
			$(this).css({"transform":"rotate(360deg) scale(1.2)","transition":"1s"});
		});
	$(".soc-img").mouseout(function(){
			$(this).css({"transform":"rotate(-360deg)","transition":"2s"});
		});
});