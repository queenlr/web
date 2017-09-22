/*
 * 属性
 * 	线宽    端点样式    颜色    边数    角数    橡皮擦尺寸    canvas的width height    history    ctx    canvas
 * 方法
 * 	画线    画虚线    铅笔    多边形    圆	  矩形  多角形
 * 	橡皮    裁切    文字
 * 	新建    保存    导入
 */

	function palette(canvas,mask){
		this.mask=mask;
		this.canvas=canvas;
		this.ctx=this.canvas.getContext('2d');
		// history   canvas 尺寸
		this.history=[];
		this.cw=this.canvas.width;
		this.ch=this.canvas.height;
		//样式
		this.lineWidth=1;
		this.lineCap='butt';
		this.fillStyle='#E8DFC4';
		this.strokeStyle='skyblue';
		//描边  填充
		this.style='stroke';
		//裁切
		this.temp=null;
		
	}
	palette.prototype={
		//初始化
		init:function(){
			this.ctx.linewidth=this.linewidth;
			this.ctx.lineCap=this.lineCap;
			this.ctx.fillStyle=this.fillStyle;
			this.ctx.strokeStyle=this.strokeStyle;
			this.ctx.setLineDash([0,0]);
		},
		
		draw:function(type){
			let that=this;
			this.mask.onmousedown=function(e){
				let ox=e.offsetX,oy=e.offsetY;
				that.init();
				that.mask.onmousemove=function(e){
					let cx=e.offsetX,cy=e.offsetY;
					that.ctx.clearRect(0,0,that.cw,that.ch);
					//历史记录
					if(that.history.length>0){
						that.ctx.putImageData(that.history[that.history.length-1],0,0)
					}
					that.ctx.setLineDash([0,0]);
					that[type](ox,oy,cx,cy);
				}
				that.mask.onmouseup=function(){
					that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
					that.mask.onmousemove=null;
					that.mask.onmouseup=null;
				}
			}	
		},
		
		//画线
		line:function(ox,oy,cx,cy){
					this.ctx.beginPath();
					this.ctx.strokeStyle=this.strokeStyle;
					this.ctx.moveTo(ox,oy);
					this.ctx.lineTo(cx,cy);
					this.ctx.closePath();
					this.ctx[this.style]();
			
		},

		//虚线
		dashed:function(ox,oy,cx,cy){
					this.ctx.beginPath();
					this.ctx.setLineDash([4,6]);
					this.ctx.moveTo(ox,oy);
					this.ctx.lineTo(cx,cy);
					this.ctx.closePath();
					this.ctx[this.style]();
		},
		
		//圆
		circle:function(ox,oy,cx,cy){
					let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
					this.ctx.beginPath();
					this.ctx.arc(ox,oy,r,0,Math.PI*2,true);
					this.ctx.closePath();
					this.ctx[this.style]();
					this.ctx.fiLinkStyle=this.fillStyle;
					this.ctx.strokeStyle=this.strokeStyle;
		},
		
		//矩形
		juxing:function(ox,oy,cx,cy){
					this.ctx.beginPath();
					this.ctx.rect(ox,oy,cx-ox,cy-oy);
					this.ctx.closePath();
					this.ctx[this.style]();
					this.ctx.fiLinkStyle=this.fillStyle;
					this.ctx.strokeStyle=this.strokeStyle;
		},
		
		//多边形
		plot:function(ox,oy,cx,cy,num=6){
					let ang=360/num/180*Math.PI;
					let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
					this.ctx.beginPath();
					this.ctx.moveTo(ox+r,oy);
					for(let i=1;i<6;i++){
						this.ctx.lineTo(ox+r*Math.cos(ang*i),oy+r*Math.sin(ang*i))
					}
					this.ctx.closePath();
					this.ctx[this.style]();
					this.ctx.fiLinkStyle=this.fillStyle;
					this.ctx.strokeStyle=this.strokeStyle;
		},

		//铅笔
		pencil:function(){
			this.mask.onmousedown=function(e){
				let ox=e.offsetX,oy=e.offsetY;
				this.init();
				if(this.history.length>0){
						this.ctx.putImageData(this.history[this.history.length-1],0,0)
					}
				this.ctx.beginPath();
				this.ctx.moveTo(ox,oy);
				this.mask.onmousemove=function(e){
					let cx=e.offsetX,cy=e.offsetY;
					this.ctx.lineTo(cx,cy);
					this.ctx[this.style]();
				}.bind(this)
				this.mask.onmouseup=function(){
					this.history.push(this.ctx.getImageData(0,0,this.cw,this.ch));
					this.mask.onmousemove=null;
					this.mask.onmouseup=null;
				}.bind(this)
			}.bind(this)
		},
		
		//多角形
		ploy:function(ox,oy,cx,cy,jiao=6){
					let ang=360/(jiao*2)/180*Math.PI;
					let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
					let r1=r*2/3;
					this.ctx.beginPath();
					this.ctx.moveTo(ox+r,oy);
					for(let i=1;i<jiao*2;i++){
						if(i%2){
							this.ctx.lineTo(ox+r1*Math.cos(ang*i),oy+r1*Math.sin(ang*i));
						}else{
							this.ctx.lineTo(ox+r*Math.cos(ang*i),oy+r*Math.sin(ang*i));
						}
					}
					this.ctx.closePath();
					this.ctx[this.style]();
					this.ctx.fiLinkStyle=this.fillStyle;
					this.ctx.strokeStyle=this.strokeStyle;
		},
		
		//擦除
		eraser:function(era){
			let that=this;
			this.mask.onmousedown=function(e){
				that.init();
				e.preventDefault()
					that.mask.onmousemove=function(e){
						era.style.display='block';
						let w=era.offsetWidth;
						let h=era.offsetHeight;
						let lefts=e.offsetX-w/2,tops=e.offsetY-h/2;
						if(lefts<0){
			  				lefts = 0;
			  			}
			  			if(lefts>that.ow-w){
			  				lefts = that.ow-w;
			  			}
			  			if(tops<0){
			  				tops = 0;
			  			}
			  			if(tops>that.oh-h){
			  				tops = that.oh-h;
			  			}
			  			era.style.left = `${lefts}px`;
			  			era.style.top = `${tops}px`;
			  			that.ctx.clearRect(lefts,tops,w,h)
					}
				}
				this.mask.onmouseup=function(){
					era.style.display='none';
					that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
					that.mask.onmousemove=null;
					that.mask.onmouseup=null;
				}
			
		},
		
		//输入文字
		font:function(){
			this.canvas.ondblclick=function(e){
				let ox=e.offsetX,oy=e.offsetY;
				let divs=document.createElement('div');
				divs.style.cssText=`
					winth:100px;
					height:50px;
					border:1px solid #eaffea;
					position:absolute;
					left:${ox}px;
					top:${oy}px;
				`
				divs.contentEditable=true;
				this.canvas.appendChild(divs);
				this.canvas.ondblclick=null;
				let lefts,tops;
				divs.onmousedown=function(e){
					let cx=e.clientX,cy=e.clientY;
					this.mask.onmousedown=null;
					let left=divs.offsetLeft;
					let top=divs.offsetTop;
					this.mask.onmousemove=function(e){
						let ex=e.clientX,ey=e.clientY;
						lefts = left+ex-cx;
         		 		tops = top+ey-cy;
						divs.style.lefts=`${lefts}px`;
						divs.style.tops=`${ltops}px`
					}
					divs.onmouseup=function(){
						this.mask.onmousemove=null;
						divs.onmouseup=null;
					}
				}
				divs.onblur=function(){
					this.mask.onmousedown=null;
					let value=this.innerText;
					this.ctx.font='30px sans-serif';
					this.ctx.fillText(value,lefts,tops);
					this.mask.removeChild(divs);
				}
			}.bind(this)
		},
		
		//反向
		reverse:function(){
			this.history.push(this.cvs.getImageData(0,0,this.cw,this.ch));
			for(let i=0;i<history.length;i+=4){
				history[i] = 255 - history[i];
				history[i+1] = 255 - history[i+1];
				history[i+2] = 255 - history[i+2]
			}
			this.ctx.putImageData(this.history[this.history.length-1],0,0);
		},

		//裁切
		clip:function(clipObj){
			let that=this;
			this.mask.onmousedown=function(e){
				let ox=e.offsetX,oy=e.offsetY;
				let w,h,minX,minY;
				that.mask.onmousemove=function(e){
					let cx=e.offsetX,cy=e.offsetY;
					w=Math.abs(ox-cx),h=Math.abs(oy-cy);
					minX=cx>=ox?ox:cx;
					minY=cy>=oy?oy:cy;
					clipObj.style.cssText=`
						display:block;
						left:${minX}px;top:${minY}px;
						width:${w}px;height:${h}px;
						border:1px solid #000;
					`
				}
				that.mask.onmouseup=function(){
					that.temp=that.ctx.getImageData(minX,minY,w,h);
					that.ctx.clearRect(minX,minY,w,h);
					tha.ctx.putImageData(that.temp,minX,minY);
					that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
					that.mask.onmousemove=null;
					that.mask.onmouseup=null;
					that.drag(minX,minY,w,h,clipObj)
				}
			}
		},
		drag:function(minX,minY,w,h,clipObj){
			let that=this;
			this.mask.onmousemove=function(e){
				let ox=e.offsetX,oy=e.offsetY;
				if(ox > minX && ox < minX + w && oy > minY && oy < minY + h){
					that.mask.style.cursor='move';
				}else{
					that.mask.style.cursor='default';
				}
			}
			this.mask.onmousedown=function(e){
				let ox=e.offsetX,oy=e.offsetY;
				that.mask.onmousemove=function(e){
					let cx=e.offsetX,cy=e.offsetY;
					let lefts=cx-ox+minX,tops=cy-oy+minY;
					if(lefts<=0){
						lefts=0;
					}if(lefts>=that.cw-w){
						lefts=that.cw-w;
					}
					if(tops<=0){
						tops=0;
					}if(tops>=that.ch-h){
						tops=that.ch-h;
					}
					that.ctx.ClientRect(0,0,that.cw,that.ch);
					if(that.history.length>0){
						that.ctx.putImageData(that.history[that.history.length-1],0,0)
					}
					clipObj.style.left=`${lefts}px`;
					clipObj.style.top=`${tops}px`;
					that.ctx.putImageData(that.temp,lefts,tops);
				}
				that.mask.onmouseup=function(){
					clipObj.style.display='none';
					that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
					that.temp=null;
					that.mask.onmousemove=null;
					that.mask.onmouseup=null;
				}
			
			}
		}
		
	}

