function menuMore(){
	var $menumore=$(".displaynone");
	$menumore.removeClass("displaynone");	
	var $morebtn=$(".menu-more-btn");
	$morebtn.hide();
    $(".pick-up-btn").show();	
}
function pickUp(){
	$(".menu-more-btn").show();
	$(".pick-up-btn").hide();
	$(".menu-item:gt(7)").addClass("displaynone");
}

$(function(){
	$(".btn").each(function(){
    $(this).click(function(){
    	console.log($(this).index());
    $(this).removeClass('btn').addClass('btn active');
    $(this).siblings().removeClass('btn active').addClass('btn');
    for(var i=0;i<4;i++){
    	if(i===$(this).index()){
    		$(".list"+i).removeClass("displaynone1");
    		//$(".list"+i).show();
    	}
    	else{
    		$(".list"+i).addClass('displaynone1');
    		//$(".list"+i).hide();
    	}
    }
  });
 });
});

$(document).ready(function(){
	var rating=(function(){
    var init=function(el,num){	
	var $starBars=$(el);
	$starBars.each(function(index){
		$starBar = $(this);
		var $itemstar=$starBar.find('.nostar');
		var lightOn=function(num){
		  $itemstar.each(function(index){
		  if(index<num){
			  $(this).removeClass("nostar").addClass("star");	  		
		  }
		  else{
	    	$(this).removeClass("star").addClass("nostar");
		  }
		})
		};
		lightOn(num);
		$starBar
		.on("click",".nostar",function(){
			num=$(this).index()+1;
			lightOn(num);
	    console.log("click in num " + num);
		}).on("click",".star",function(){
			num=$(this).index()+1;
			lightOn(num);		
		})
		})
   	}
	return {
	init:init	
	};
})();
rating.init('.star-bar',3);
rating.init('.star-bar1',3);
rating.init('.star-bar2',3);
rating.init('.star-bar3',3);
})
$(document).ready(function(){
	var sub=$('#sub');
	var activeRow;
	var activeMenu;
	$('.navication li').on('mouseenter',function(e){
		sub.removeClass('none')
	}).on('mouseleave',function(e){
		sub.addClass('none')
		if(activeRow){
			activeRow.removeClass('active');
			activeRow=null;
		}
		if(activeMenu){
			activeMenu.addClass('none');
			activeMenu=null;	
		}
	})
	$('.navication ul').on('mouseover','li',function(e){
		if(!activeRow){//没有放上去的时候，第一次
			activeRow=$(e.currentTarget).addClass('active')
			activeMenu=$('#'+activeRow.data('id'))
			activeMenu.removeClass('none');
			return
		}
		//第二次
		activeRow.removeClass('active');
		activeMenu.addClass('none');
		
		activeRow=$(e.currentTarget);
		activeRow.addClass('active');
		activeMenu=$('#'+activeRow.data('id'))
		activeMenu.removeClass('none');
	})
	 $(function () {
            var container = $('.index-banner');
            var list = $('.index-banner-bg');
            var buttons = $('#buttons span');
            var prev = $('#prev');
            var next = $('#next');
            var index = 1;
            var len = 5;
            var interval =3000;
            var timer;


            function animate (offset) {
                var left = parseInt(list.css('left')) + offset;
                if (offset>0) {
                    offset = '+=' + offset;
                }
                else {
                    offset = '-=' + Math.abs(offset);
                }
                list.animate({'left': offset}, 300, function () {
                    if(left > -1347){
                        list.css('left', -1347 * len);
                    }
                    if(left < (-1347 * len)) {
                        list.css('left', -1347);
                    }
                });
            }

            function showButton() {
                buttons.eq(index-1).addClass('on').siblings().removeClass('on');
            }
            //函数的递归
            function play() {
                timer = setTimeout(function () {
                    next.trigger('click');
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }

            next.on('click', function () {
                if (list.is(':animated')) {
                    return;
                }
                if (index == 5) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-1347);
                showButton();
            });

            prev.on('click', function () {
                if (list.is(':animated')) {
                    return;
                }
                if (index == 1) {
                    index = 5;
                }
                else {
                    index -= 1;
                }
                animate(1347);
                showButton();
            });

            buttons.each(function () {
                 $(this).on('click', function () {
                     if (list.is(':animated') || $(this).attr('class')=='on') {
                         return;
                     }
                     var myIndex = parseInt($(this).attr('index'));
                     var offset = -1347 * (myIndex - index);

                     animate(offset);
                     index = myIndex;
                     showButton();
                 })
            });

            container.hover(stop, play);

            play();

        });
})

window.onload=function(){
var btn=document.getElementById("btn");
var istop=true;
var timer=null;
var cheight=document.documentElement.clientHeight;

	window.onscroll=function(){
		var ostop=document.documentElement.scrollTop||document.body.scrollTop;
		if(ostop>=cheight){
			btn.style.display="block";
		}
		else{
			btn.style.display="none";
		}
	if(!istop){
		clearInterval(timer);
	}
	istop=false;
}
	
	btn.onclick=function(){
		timer=setInterval(function(){
			var ostop=document.documentElement.scrollTop||document.body.scrollTop;
			var speed=Math.ceil(ostop/8);
			istop=true;
		document.documentElement.scrol=document.body.scrollTop=ostop-speed;
		console.log(ostop-speed)
		if(ostop==0){
			clearInterval(timer);
		}
		},30)		
	}
}