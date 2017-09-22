/*
* @Author: lenovo
* @Date:   2017-09-07 01:22:41
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-18 23:30:22
*/

//我的淘宝
$('.header-right>li:nth-child(1)').hover(function(){
	$('.bought').css('display','block')
},function(){
	$('.bought').css('display','none')
})
//收藏夹
$('.header-right>li:nth-child(4)').hover(function(){
	$('.shoucang').css('display','block')
},function(){
	$('.shoucang').css('display','none')
})	
//手机版
$('.header-right>li:nth-child(6)').hover(function(){
	$('.ma').css('display','block')
},function(){
	$('.ma').css('display','none')
})	
//商家支持
$('.header-right>li:nth-child(9)').hover(function(){
	$('.shangjia').css('display','block')
},function(){
	$('.shangjia').css('display','none')
})
//网站导航
$('.header-right>li:nth-child(10)').hover(function(){
	$('.thisweb').css('display','block')
},function(){
	$('.thisweb').css('display','none')
})
//导航
$('.navi>li').hover(function(){
	$(this).children('.ear').css('display','block')
},function(){
	$('.ear').css('display','none')
})
//轮播图
let t=setInterval(fn,3000);
let num=0;
//自动轮播
function fn(){
	num++;
	if(num==$('.img1 img').length){
		num=0;
	}
	fn1();
}
//左右点击按钮
$('.forward').click(function(){
	num++;
	if(num==$('.img1 img').length){
		num=0;
	}
	fn1();	
})
$('.back').click(function(){
	num--;
	if(num==-1){
		num=$('.img1 img').length-1;
	}
	fn1();
})		
function fn1(){
	$('.img1 img').css({opacity:0})
	$('.circle li').css({background:''})
	$('.img1 img').eq(num).css({opacity:1})
	$('.circle li').eq(num).css({background:'#fafafa'})
}
// 鼠标移入效果
$('.img1 img').mouseenter(function(){
	clearInterval(t);
})
$('.img1 img').mouseleave(function(){
	t=setInterval(fn,3000);
})
//下方按钮
$('.circle>li').click(function(){
	clearInterval(t);
	let index=$(this).index('.circle>li')
	num=index;
	fn1();
})
//侧导航
$('aside>ul>li').hover(function(){
	$(this).children('.choice').css('display','block')
},function(){
	$('.choice').css('display','none')
})
//固定搜索
let flag=true;
$(window).scroll(function(){
	let scroll=$('body').scrollTop();
	if(scroll>650){
		if(flag){
			flag=false;
			$('.fixsearch').css({top:0,bottom:-50});
			$('.floor').css({left:3,bottom:380});
		}
	}else{
		if(!flag){
			flag=true;
			$('.fixsearch').css({top:-50});
			$('.floor').css({left:-50,bottom:-10});
		}
	}
})
//楼层跳转
$(window).scroll(function(){
	let scroll=$('body').scrollTop();
	if(scroll>1300&&scroll<1800){
		$('.floor>li:nth-child(2)').css({background:"#ea5f8d"});
		$('.floor>li:nth-child(2)').siblings().css({background:""});
	}
	if(scroll>1800&&scroll<2300){
		$('.floor>li:nth-child(3)').css({background:"#0aa6e8"});
		$('.floor>li:nth-child(3)').siblings().css({background:""});
	}
	if(scroll>2400&&scroll<2900){
		$('.floor>li:nth-child(4)').css({background:"#64C333"});
		$('.floor>li:nth-child(4)').siblings().css({background:""});
	}
	if(scroll>2900&&scroll<3400){
		$('.floor>li:nth-child(5)').css({background:"#F15453"});
		$('.floor>li:nth-child(5)').siblings().css({background:""});
	}
	if(scroll>3500&&scroll<4000){
		$('.floor>li:nth-child(6)').css({background:"#19C8A9"});
		$('.floor>li:nth-child(6)').siblings().css({background:""});
	}
	if(scroll>4000&&scroll<4500){
		$('.floor>li:nth-child(7)').css({background:"#F7A945"});
		$('.floor>li:nth-child(7)').siblings().css({background:""});
	}
	if(scroll>4600&&scroll<5100){
		$('.floor>li:nth-child(8)').css({background:"#c40000"});
		$('.floor>li:nth-child(8)').siblings().css({background:""});
	}
})