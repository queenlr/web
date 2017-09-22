/*
* @Author: lenovo
* @Date:   2017-08-26 11:29:02
* @Last Modified by:   lenovo
* @Last Modified time: 2017-08-27 23:07:52
*/

window.onload=function(){
	let imgs=document.getElementsByClassName('imgs');
	let imgsli=imgs[0].getElementsByTagName('li');
	let bans=document.getElementsByClassName('ban-bottom');
	let bansli=bans[0].getElementsByTagName('li');
	let num=0;
	let t = setInterval(fn,3000);
	imgs[0].onmouseenter=function(){
		clearInterval(t);
	}
	imgs[0].onmouseleave=function(){
		t=setInterval(fn,3000);
	}
	function fn(){
		num++;
		if(num==imgsli.length){
			num=0;
		}
		for(let i=0;i<imgsli.length;i++){
			imgsli[i].style.display='none';
		}
		imgsli[num].style.display='block';
	}
	for(let i=0;i<bansli.length;i++){
		bansli[i].onclick=function(){
			for(let j=0;j<imgsli.length;j++){
				imgsli[j].style.display='none';
			}
			imgsli[i].style.display='block';
		}
	}


}