/*
* @Author: lenovo
* @Date:   2017-08-28 23:46:22
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-10 18:10:18
*/

window.onload=function(){
	//导航
	let lis=document.querySelectorAll('.nav>li');
	let navs=document.querySelectorAll('.nav-about');
	for(let i=1;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			navs[i-1].style.height='120px';
		}
		lis[i].onmouseleave=function(){
			navs[i-1].style.height=0;
		}
	}
	//轮播图
	let img=document.querySelector('.imgs');
	let imgs=document.querySelectorAll('.imgs>li');
	let t=setInterval(fn,3000);
	let num=0;
	img.onmouseenter=function(){
		clearInterval(t);
	}
	img.onmouseleave=function(){
		t=setInterval(fn,3000);
	}
	function fn(){
		num++;
		if(num==imgs.length){
			num=0;
		}
		for(let i=0;i<imgs.length;i++){
			imgs[i].style.opacity='0';
		}
		imgs[num].style.opacity='1';
	}
	function fn1(){
		num--;
		if(num==-1){
			num=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
			imgs[i].style.opacity='0';
		}
		imgs[num].style.opacity='1';
	}
	let left=document.querySelector('.icon-zuoyoujiantou')
	let right=document.querySelector('.icon-zuoyoujiantou1')
	left.onclick=fn;
	right.onclick=fn1;
	//装饰案例
	let display=document.querySelector('.display');
	let displays=document.querySelectorAll('.display>li');
	let shades=document.querySelectorAll('.shade');
	for(let i=0;i<displays.length;i++){
		displays[i].onmouseenter=function(){
			shades[i].style.opacity='0.7';
			displays[i].style.transform='scale(1.1,1.1)';
		}
		displays[i].onmouseleave=function(){
			shades[i].style.opacity=0;
			displays[i].style.transform='scale(1,1)';
		}
	}
}