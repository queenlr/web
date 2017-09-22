/*
* @Author: lenovo
* @Date:   2017-08-12 23:01:05
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-12 08:52:47
*/

'use strict';

window.onload=function(){
	//微信
	let w1=document.getElementsByClassName('w1')[0];
	let ma=document.getElementsByClassName('ma')[0];
	w1.onmouseenter=function(){
		ma.style.display='block';
	}
	w1.onmouseleave=function(){
		ma.style.display='none';
	}

	//搜索
	let sousuo=document.getElementsByClassName('sousuo');
	let lhotsearch=document.getElementsByClassName('lhotsearch');
	lhotsearch[0].onclick=function(){
		sousuo[0].style.display='none';
		
	}
	lhotsearch[0].onmouseenter=function(){
		sousuo[0].style.background='#647aff';
	}

	// 购物车
	let shop=document.getElementsByClassName('goshopping')[0];
	let	kong=document.getElementsByClassName('kong')[0];
	let beijing=document.getElementsByClassName('beijing')[0];
	shop.onmouseenter=function(){
		kong.style.display='block';
		beijing.style.display='block';
	}
	shop.onmouseleave=function(){
		kong.style.display='none';
		beijing.style.display='none';
	}

	// 导航
	let navright=document.getElementsByClassName('navright')[0];
	let naviis=document.getElementsByClassName('navii');
	let xiala=document.getElementsByClassName('xiala');
	let childnum=xiala.childElementCount;
	for(let i=1;i<naviis.length;i++){
		naviis[i].onmouseenter=function(){
			xiala[i-1].style.height='555px';
		}
		naviis[i].onmouseleave=function(){
			xiala[i-1].style.height=0;
		}
	}

	//轮播
	let img=document.getElementsByClassName('img1')[0];
	let lis=img.getElementsByTagName('li');
	let cir=document.getElementsByClassName('cir')[0];
	let circle=cir.getElementsByTagName('li');
	let flag=true;
	for(let i=0;i<circle.length;i++){
		circle[i].onmouseenter=function(){
			for(let j=0;j<lis.length;j++){
				lis[j].style.display='none';
				circle[j].style.background='';
			}
			lis[i].style.display='block';
			circle[i].style.background='#a10000';
		}
	}
	//自动轮播
	let t=setInterval(fn, 3000);
	let num=0;
	function fn(){
		num++;
		if(num==lis.length){
			num=0;
		}
		for(let i=0;i<lis.length;i++){
			lis[i].style.display='none';
			circle[i].style.background='';
		}
		lis[num].style.display='block';
		circle[num].style.background='#a10000';
	}
	function fn1(){
		num--;
		if(num==-1){
			num=lis.length-1;
		}
		for(let i=0;i<lis.length;i++){
			lis[i].style.display='none';
			circle[i].style.background='';
		}
		lis[num].style.display='block';
		circle[num].style.background='#a10000';
	}
	img.onmouseenter=function(){
		clearInterval(t);
	}
	img.onmouseleave=function(){
		t=setInterval(fn,3000);
	}
	let forward=document.getElementsByClassName('bannerright')[0];
	let left=document.getElementsByClassName('bannerleft')[0];
	forward.onclick=fn;
	left.onclick=fn1;


}