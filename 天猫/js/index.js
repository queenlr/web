/*
* @Author: lenovo
* @Date:   2017-08-10 15:54:00
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-08 12:09:26
*/

'use strict';
window.onload=function(){

	//我的淘宝
	let header=document.getElementsByClassName('header-right');
	let taobao = header[0].getElementsByTagName('li');
	let bought = document.getElementsByClassName('bought');
	let shoucang=document.getElementsByClassName('shoucang');
	let ma=document.getElementsByClassName('ma');
	let shangjia=document.getElementsByClassName('shangjia');
	let thisweb=document.getElementsByClassName('thisweb');
	taobao[0].onmouseenter=function(){
		bought[0].style.display='block';
	}
	taobao[0].onmouseleave=function(){
		bought[0].style.display='none';
	}
	//收藏夹
	taobao[3].onmouseenter=function(){
		shoucang[0].style.display='block';
	}
	taobao[3].onmouseleave=function(){
		shoucang[0].style.display='none';
	}
	//手机版
	taobao[5].onmouseenter=function(){
		ma[0].style.display='block';
	}
	taobao[5].onmouseleave=function(){
		ma[0].style.display='none';
	}
	//商家
	taobao[8].onmouseenter=function(){
		shangjia[0].style.display='block';
	}
	taobao[8].onmouseleave=function(){
		shangjia[0].style.display='none';
	}
	// 网站导航
	taobao[9].onmouseenter=function(){
		thisweb[0].style.display='block';
	}
	taobao[9].onmouseleave=function(){
		thisweb[0].style.display='none';
	}

	// 左侧楼层跳转
	let sh=window.innerHeight;
	let floor=document.querySelector('.floor');
	let floors=floor.querySelectorAll('.floor>li');
	let newarr=[];
	let beau=document.querySelector('.beautiful');
	newarr.push(beau);
	let kuwan=document.querySelector('.kuwan');
	newarr.push(kuwan);
	let jujia=document.querySelector('.jujia');
	newarr.push(jujia);
	let dazao=document.querySelector('.dazao');
	newarr.push(dazao);
	let huwai=document.querySelector('.huwai');
	newarr.push(huwai);
	let qinzi=document.querySelector('.qinzi');
	newarr.push(qinzi);
	let like=document.querySelector('.like');
	newarr.push(like);
	console.log(newarr);

	// 固定搜索
	let flag=true;
	let flag1=true;
	window.onscroll=function(){
		let scroll=document.body.scrollTop;
		console.log(scroll);
		let fixsearch=document.querySelector('.fixsearch');
		let floors=document.querySelectorAll('.floor>li');

		if(scroll>650){
			if(flag){
			flag=false;
			animate(fixsearch,{top:0,bottom:-50});
			animate(floor,{left:3,bottom:50});
		}
		}else{
			if(!flag){
				flag=true;
				animate(fixsearch,{top:-50});
				animate(floor,{left:-50,bottom:-100});
			}
			
		}
	}




	// 导航
	let navi=document.getElementsByClassName('navi')[0];
	let lis=navi.getElementsByTagName('li');
	let ear=document.getElementsByClassName('ear');
	for(let i=1;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			ear[i-1].style.display='block';	
		}
		lis[i].onmouseleave=function(){
			ear[i-1].style.display='none';
		}
	}
	

	//轮播
	let imgbox=document.getElementsByClassName('img1');
	let imgs=imgbox[0].getElementsByTagName('li');
	let circle=document.getElementsByClassName('circle');
	let circles=circle[0].getElementsByTagName('li');
	let num=0;
	let t = setInterval(fn,3000);
	imgbox[0].onmouseenter=function(){
		clearInterval(t);
	}
	imgbox[0].onmouseleave=function(){
		t=setInterval(fn,3000);
	}
	function fn(){
		num++;
		if(num==imgs.length){
			num=0;
		}
		for(let i=0;i<imgs.length;i++){
			imgs[i].style.display='none';
			circles[i].style.background='';
		}
		imgs[num].style.display='block';
		circles[num].style.background='#fafafa';
	}
	for(let i=0;i<circles.length;i++){
		circles[i].onclick=function(){
			for(let j=0;j<imgs.length;j++){
				imgs[j].style.display='none';
				circles[j].style.background='';
			}
			imgs[i].style.display='block';
			circles[i].style.background='#eeeeee';
		}
	} 

	//侧导航
	let left=document.getElementsByTagName('aside')[0];
	let lefts=left.getElementsByTagName('li');
	for(let i=0;i<lefts.length;i++){
		let choices=lefts[i].querySelector('.choice');
		lefts[i].onmouseenter=function(){
			choices.style.display='block';
		}
		lefts[i].onmouseleave=function(){
			choices.style.display='none';
		}
	}

}