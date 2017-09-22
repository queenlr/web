/*
* @Author: lenovo
* @Date:   2017-08-14 17:27:42
* @Last Modified by:   lenovo
* @Last Modified time: 2017-08-18 06:59:00
*/


// 左右轮播
$(function(){
	let img=$('.img1');
	let imgs=$('li',img[0]);
	let cir=$('.circle');
	let cirs=$('li',cir[0]);
	let now=0;	//当前图片
	let next=0;	//下一张图片
	let i=0;	//	下一个按钮
	let t;
	let flag=true;
	let width=img[0].offsetWidth;
	t=setInterval(move, 3000);
	function move(){
		next++;
		if(next==imgs.length){
			next=0;
		}
		// imgs[next].style.left=`${width}px`;
		
		animate(imgs[now],{opacity:1})
		animate(imgs[next],{opacity:0})
		now=next;
	}
	// 鼠标移入效果
	img[0].onmouseenter=function(){
		clearInterval(t);
	}
	img[0].onmouseleave=function(){
		t=setInterval(move,3000);
	}
	//鼠标点击按钮
	for(let i=0;i<cirs.length;i++){
		cirs[i].onclick=function(){
			if(now==i){
				return;
			}
			if(now>i){
				imgs[i].style.left=`${width}px`;
				animate(imgs[now],{left:-width});
				animate(imgs[i],{left:0});
				// animate(imgs[now],{opacity:1})
				// animate(imgs[i],{opacity:0})
			}else if(now<i){
				imgs[i].style.left=`${-width}px`;
				animate(imgs[now],{left:width});
				animate(imgs[i],{left:0});
				// animate(imgs[now],{opacity:0})
				// animate(imgs[i],{opacity:1})
			}
			now=next=i;
		}
	}
})