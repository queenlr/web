/*
* @Author: lenovo
* @Date:   2017-09-06 18:33:23
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-18 21:54:15
*/


//购物车
$('.shop').hover(function(){
	$(this).children('.null').css('display','block');
},function(){
	$('.null').css('display','none')
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
	clearInterval(t);
	num++;
	if(num==$('.img1 img').length){
		num=0;
	}
	fn1();	
})
$('.back').click(function(){
	clearInterval(t);
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
	$('.circle li').eq(num).css({background:'#eeeeee'})
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
$('.fir').hover(function(){
	$(this).children('.choice').css('display','block');
},function(){
	$('.choice').css('display','none')
})
//搜索框
$('.search').focus(function(){
	$('.note').css('display','block');
	$('.mix').fadeOut('slow');
	$('.TV').fadeOut('slow');
})
$('.search').blur(function(){
	$('.note').css('display','none');
	$('.mix').fadeIn('slow');
	$('.TV').fadeIn('slow');	
})
//小米明星单品
let flag=true;
let width=$('.choose').offsetWidth;
let tt=setInterval(fun, 5000)
function fun(){
	if(flag){
		this.func();
	}
	if(!flag){
		this.func1();
	}
	flag=!flag;
}
function func(){
	$('.choose').css('left','-1226px');
	$('.choose1').css('left','0');
	$('.rightin').css('color','#e0e0e0');
	$('.leftin').css('color','#666');
}
function func1(){
	$('.choose').css('left','0');
	$('.choose1').css('left','1226px');
	$('.rightin').css('color','#666');
	$('.leftin').css('color','#e0e0e0');
}
$('.rightin').click(function(){
	func();
})
$('.leftin').click(function(){
	func1();
})
//为你推荐
let nums=0;
$('.right').click(function(){
	if(nums==3){
		return;
	}
	nums++;
	$('.bigmatch1').css('left',`${-1226*nums}px`);
	if(nums>2){
		this.classList.remove('able');
	}
})
$('.left').click(function(){
	if(nums==0){
		return;
	}
	nums--;
	$('.bigmatch1').css('left',`${-1226*nums}px`);
	if(nums<1){
		this.classList.remove('able');
	}
})
//搭配
let num1=0;
let dpnum=0;
$('.dapei').each(function(index,obj){
	$(obj).find('.power a').hover(function() {
		$(obj).find('.power a').removeClass('dapeili');
		$(this).addClass('dapeili');
		$(obj).find('.bigmatch-right').css({display: 'none'});
		$('.bigmatch-right').eq($(this).index('.power a')).css({display: 'block'});
	});
})
//内容
let nrnum=0;
$('.hide').click(function(){
	nr();
})
function nr(){
	$('.stype').css('diaplay','none');
	$('.scircle').remove('cir1');
	$('.stype').eq[nrnum].css('diaplay','block');
	$('.scircle').eq[nrnum].add('cir1');
}