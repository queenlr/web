/*
* @Author: lenovo
* @Date:   2017-08-11 08:38:46
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-11 14:02:44
*/


window.onload=function(){
//购物车
	let shop = document.getElementsByClassName('shop');
	let comebuy = document.getElementsByClassName('null');
	shop[0].onmouseenter=function(){
		comebuy[0].style.display='block';
	}
	shop[0].onmouseleave=function(){
		comebuy[0].style.display='none';
	}
//导航
	let nav=document.getElementsByTagName('nav')[0];
	let navbot=document.getElementsByClassName('navbot');
	let navs=nav.getElementsByTagName('li');
	for(let i=0;i<navs.length-2;i++){
		
		navs[i].onmouseenter=function(){
			navbot[0].style.display='block';
		}
		navs[i].onmouseleave=function(){
			navbot[0].style.display='none';
		}
	}
//搜索
	let search=document.getElementsByClassName('search')[0];
	let note=document.getElementsByClassName('note')[0];
	let mix=document.getElementsByClassName('mix')[0];
	let tv=document.getElementsByClassName('TV')[0];
	let body=document.getElementsByTagName('body')[0];
	search.onfocus=function(){
		note.style.display='block';
		mix.style.display='none';
		tv.style.display='none';
	}
	search.onblur=function(){
		note.style.display='none';
		mix.style.display='none';
		tv.style.display='none';
	}
//侧导航
	let left=document.getElementsByClassName('banner-left')[0];
	let choices=left.getElementsByClassName('choice');
	let lefts=document.getElementsByClassName('fir');
	for(let i=0;i<choices.length;i++){
		lefts[i].onmouseenter=function(){
			choices[i].style.display='block';
		}
		lefts[i].onmouseleave=function(){
			choices[i].style.display='none';
		}
	}
//自动轮播
	let imgbox=document.getElementsByClassName('img1');
	let imgs=imgbox[0].getElementsByTagName('li');
	let circle=document.getElementsByClassName('circle');
	let circles=circle[0].getElementsByTagName('li');
	let forward=document.getElementsByClassName('forward')[0];
	let back=document.getElementsByClassName('back')[0];
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
			imgs[i].style.opacity='0';
			circles[i].style.background='';
		}
		imgs[num].style.opacity='1';
		circles[num].style.background='#eeeeee';
	}
	function fn1(){
		num--;
		if(num==-1){
			num=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
			imgs[i].style.display='none';
			circles[i].style.background='';
		}
		imgs[num].style.display='block';
		circles[num].style.background='#eeeeee';
	}
	forward.onclick=fn;
	back.onclick=fn1;
//轮播点
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
// 小米明星单品
	let choose=document.getElementsByClassName('choose')[0];
	let choose1=document.getElementsByClassName('choose1')[0];
	let leftin=document.getElementsByClassName('leftin')[0];
	let rightin=document.getElementsByClassName('rightin')[0];
	let widths=choose.offsetWidth;
	let flag=true;
	let tt=setInterval(fn2,5000);
	function fn2(){
		if(flag){
			choose.style.left=`-${widths}px`;
			choose1.style.left=0;
			rightin.style.color='#e0e0e0';
			leftin.style.color='#666';
		}
		if(!flag){
			choose.style.left=0;
			choose1.style.left=`${widths}px`;
			rightin.style.color='#666';
			leftin.style.color='#e0e0e0';
		}
		flag=!flag;
	}
	rightin.onclick=function(){
		choose.style.left=`-${widths}px`;
		choose1.style.left=0;
		rightin.style.color='#e0e0e0';
		leftin.style.color='#666';
	}
	leftin.onclick=function(){
		choose.style.left=0;
		choose1.style.left=`${widths}px`;
		rightin.style.color='#666';
		leftin.style.color='#e0e0e0';
	}
	// 搭配开始
	let dapei=document.getElementsByClassName('dapei');
	for(let k=0;k<dapei.length;k++){
		let power=dapei[k].getElementsByClassName('power')[0];
			let powers=power.getElementsByTagName('a');
			let matchs=dapei[k].getElementsByClassName('bigmatch-right');
			for(let i=0;i<powers.length;i++){
				powers[i].onmouseenter=function(){
					for(let j =0;j<powers.length;j++){
						powers[j].classList.remove('dapeili');
					}
					for(let j =0;j<matchs.length;j++){
						matchs[j].style.display='none';
					}
					powers[i].classList.add('dapeili');
					matchs[i].style.display='block';
				}
	}		
	}
	// 为你推荐
	let tuijian=document.getElementsByClassName('bigmatch1')[0];
	let tuijians=tuijian.getElementsByClassName('classify');
	let tleft=document.getElementsByClassName('left')[0];
	let tright=document.getElementsByClassName('right')[0];
	let nums=0;
	tright.onclick=function(){
		if(nums ==3){
			return ;
		}
		nums++;
		tuijian.style.left=`${-1226*nums}px`;
		if(nums >2){
			this.classList.remove('abled');
		}
	}
	tleft.onclick=function(){
		if(nums ==0){
			return ;
		}
		nums--;
		tuijian.style.left=`${-1226*nums}px`;
		if(nums <1){
			this.classList.remove('abled');
		}
	}
	// 内容
	let xiaoyuan=document.getElementsByClassName('xiaoyuan')[0];
	let xiaoyuans=xiaoyuan.getElementsByClassName('scircle');
	let stype=document.getElementsByClassName('stype');
	let hide=document.getElementsByClassName('hide')[0];
	let hide1=document.getElementsByClassName('hide1')[0];
	let nums1=0;
	function fn11(){
		nums1++;
		if(nums1==stype.length){
			nums1=0;
		}
		for(let i=0;i<stype.length;i++){
			stype[i].style.display='none';
			// xiaoyuans[i].style.background='';
		}
		stype[nums1].style.display='block';
		// xiaoyuans[nums1].style.background='#eeeeee';
	}
	function fn12(){
		nums1--;
		if(nums1==-1){
			nums1=stype.length-1;
		}
		for(let i=0;i<stype.length;i++){
			stype[i].style.display='none';
			// xiaoyuans[i].style.background='';
		}
		stype[nums1].style.display='block';
		// xiaoyuans[nums1].style.background='#eeeeee';
	}
	hide.onclick=fn11;
	hide1.onclick=fn12;
}