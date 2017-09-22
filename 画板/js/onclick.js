window.onload=function(){
	let labels=document.querySelectorAll('label');
	let canvas=document.querySelector('canvas');
	let inputs=document.querySelectorAll('input');
	let colors=document.querySelectorAll('.color>label');
	let font=document.querySelector('.icon-wenzi');
	let ctx=canvas.getContext('2d');
	let mask=document.querySelector('.mask');
	let board=new palette(canvas,mask);
	let num=0;
	let num1=0;
	for(let i=0;i<labels.length;i++){
		labels[i].onclick=function(){
			//点击效果
			labels[num].style.background='#eaffea';
			labels[i].style.background='pink';
			num=i;
			//方法
			if(i!=6){
				board.draw(this.id);
			}else{
				board.pencil();
			}
		}
	}
	
	//描边  填充
	inputs.forEach((element,index)=>{
		inputs[index].onchange=function(){
			if(index==1){
				board.fillStyle=this.value;
			}
			if(index==0){
				board.strokeStyle=this.value;
			}
		}
	})
	colors.forEach((element,value)=>{
		colors[value].onclick=function(){
			colors[num1].style.background='#eaffea';
			colors[value].style.background='pink';
			num1=value;	
			if(value==0){
				board.style=this.id;
			}
			if(value==2){
				board.style=this.id;
			}
		}	
	})
	
	//清除
	let era=document.querySelector('.era');
	let eraser=document.querySelector('.icon-choiceEraser');
	era.onclick=function(){
		board.eraser(era);
	}
	
	//文字
	// let text=document.querySelector('.icon-wenzi');
	// wenzi.addEventListener('click',function(){
	// 	board.font();
	// })
	
	//裁剪
	let cut=document.querySelector('.icon-caijian');
	let cutObj=document.querySelector('.cut');
	cutObj.onclick=function(){
		board.clip(clipObj);
	}
	

	
	//保存下载
//	let save=document.querSelector();
//	save.onclick=function(){
//		save.href=canvas.toDataURL();
//		save.download='';
//	}


}
