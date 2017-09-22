/*
* @Author: lenovo
* @Date:   2017-09-12 08:41:02
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-12 22:16:13
*/
//微信
$('.w1').hover(function(){
	$('.ma').css('display','block');
},function(){
	$('.ma').css('display','none');
})
//搜索
$('.lhotsearch').click(function(){
	$('.sousuo').css({display:'none'});
})
//购物车
$('.goshopping').hover(function(){
	$('.kong').css('display','block');
	$('.beijing').css('display','block')
},function(){
	$('.kong').css('display','none');
	$('.beijing').css('display','none')
})
//导航
$('.navii').hover(function(){
	var index=$(this).index('.navii')
	$('.xiala').eq(index).css('height','555px')
	
},function(){
	$('.xiala').css('height',0)
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
$('.bannerleft').click(function(){
	clearInterval(t);
	num++;
	if(num==$('.img1 img').length){
		num=0;
	}
	fn1();	
})
$('.bannerright').click(function(){
	clearInterval(t);
	num--;
	if(num==-1){
		num=$('.img1 img').length-1;
	}
	fn1();
})		
function fn1(){
	$('.img1 img').css({display:'none'})
	$('.cir li').css({background:''})
	$('.img1 img').eq(num).css({display:'block'})
	$('.cir li').eq(num).css({background:'#a10000'})
}
// 鼠标移入效果
$('.img1 img').mouseenter(function(){
	clearInterval(t);
})
$('.img1 img').mouseleave(function(){
	t=setInterval(fn,3000);
})
//下方按钮
$('.cir>li').click(function(){
	clearInterval(t);
	let index=$(this).index('.cir>li')
	num=index;
	fn1();
})