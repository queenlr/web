/*
* @Author: lenovo
* @Date:   2017-08-23 09:03:26
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-19 00:23:53
*/

/*
属性：
	哪些字符、个数、速度、得分、关卡、生命值、减分、奖励
方法
	开始:产生字符
	消除字符
	产生字符（个数，哪些字符）
	下一关
	重新开始
 */

function Game(){
	this.charSheet = [
		['Q','A-Z/Q.png'],
		['W','A-Z/W.png'],
		['E','A-Z/E.png'],
		['R','A-Z/R.png'],
		['T','A-Z/T.png'],
		['Y','A-Z/Y.png'],
		['U','A-Z/U.png'],
		['I','A-Z/I.png'],
		['O','A-Z/O.png'],
		['P','A-Z/P.png'],
		['A','A-Z/A.png'],
		['S','A-Z/S.png'],
		['D','A-Z/D.png'],
		['F','A-Z/F.png'],
		['G','A-Z/G.png'],
		['H','A-Z/H.png'],
		['J','A-Z/J.png'],
		['K','A-Z/K.png'],
		['L','A-Z/L.png'],
		['Z','A-Z/Z.png'],
		['X','A-Z/X.png'],
		['C','A-Z/C.png'],
		['V','A-Z/V.png'],
		['B','A-Z/B.png'],
		['N','A-Z/N.png'],
		['M','A-Z/M.png']
	];
	// this.charSheet=['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
	this.length=5;
	this.elements=[];  //保存页面中的元素
	this.speed=10;
	this.score=0;
	this.scoreObj=document.querySelector('.score:nth-child(2)>span');
	this.life=10;
	this.lifeObj=document.querySelector('.score:nth-child(3)>span');
	this.guanqia=1;
	this.gqObj=document.querySelector('.score:nth-child(1)>span');
	this.position=[];
}
Game.prototype={

	// 开始游戏
	start:function(){
		this.getchars();
		this.drop();
		this.key();
	},

	// 产生字符
	getchars:function(){
		for(let i=0;i<this.length;i++){
			this.getchar();	
		}
	},
	// 判断元素重复方法
	checkRepeat:function(num){
		// num对应的字符charSheet[num]与element里边的元素element[i].innerText比较
		return this.elements.some(value=>value.innerText==this.charSheet[num][0])
	},
	// 判断位置重复方法
	checkPosition:function(lefts){
		return this.position.some(function(value){
			return Math.abs(value-lefts)<50;
		})
	},
	getchar:function(){
		// let num=Math.floor(Math.random()*this.charSheet.length);
		let num;
		let divs=document.createElement('div');
		// let widths=Math.random()*(window.innerWidth-400)+150;
		let lefts;
		let tops=Math.random()*100;
		// 判断元素是否重复
		do{
			num=Math.floor(Math.random()*this.charSheet.length);
		}while(this.checkRepeat(num))
		// 位置重复
		do{
			lefts=Math.random()*(window.innerWidth-400)+150;
		}while(this.checkPosition(lefts))

		divs.classList.add('char');
		divs.style.cssText=`
			left:${lefts}px;
			top:${tops}px;
			background:url(${this.charSheet[num][1]}) no-repeat center/cover;
		`;
		// function bgcolor(){
  //       	let r=Math.round(Math.random()*256);
  //       	let g=Math.round(Math.random()*256);
  //       	let b=Math.round(Math.random()*256);
  //       	return `rgb(${r},${g},${b})`;
  //       }
		document.body.appendChild(divs);
		divs.innerText=this.charSheet[num][0];
		this.elements.push(divs);
		this.position.push(lefts);
	},
	drop:function(){
		let that=this;
		this.t=setInterval(function(){			
			for(let i=0;i<that.elements.length;i++){
				let tops=that.elements[i].offsetTop;
				// 先判断位置再删除
				that.elements[i].style.top=`${tops+that.speed}px`;
				if(tops>=500){
					// 到达指定位置删除
					document.body.removeChild(that.elements[i]);
					that.elements.splice(i,1);
					that.position.splice(i,1);
					that.life--;
					that.lifeObj.innerText=that.life;
					if(that.life==-1){
						confirm('生命值不足，退出游戏！');
					}
				}	
			} 
			// 添加元素
			if(that.elements.length<that.length){
				that.getchar();
			}
		},100)
	},
	key:function(){
		let that=this;
		document.onkeydown=function(e){
			// 将按下的键盘码转换成对应的unicode编码
			let char=String.fromCharCode(e.keyCode);
			for(let i=0;i<that.elements.length;i++){
				// 判断按下的键在页面中的是否存在
				if(char==that.elements[i].innerText){
					// 得分+1
					that.score++;
					that.scoreObj.innerText=that.score;
					document.body.removeChild(that.elements[i]);
					that.elements.splice(i,1);
					if(that.score>=10){
						that.next();
						that.life--;
						that.lifeObj.innerText=that.life;
					}
				}
			}
		}
	},
	// 下一关
	next:function(){
		clearInterval(this.t);
		for(let i=0;i<this.elements.length;i++){
			document.body.removeChild(this.elements[i]);
		}
		this.elements=[];
		this.score=0;		
		this.length+=1;
		this.start();
		this.guanqia++;
		this.gqObj.innerText=this.guanqia;
		
	}







}