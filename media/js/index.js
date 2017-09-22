window.onload=function(){
	let audio=document.querySelector('audio');
	let title=document.querySelector('.title');
	let author=document.querySelector('.author');
	let song=document.querySelector('.song');
	let lyrics=document.querySelector('.lyrics');
	let palys=document.querySelector('.play');
	let play=document.querySelector('.icon-bofang');
	let stop=document.querySelector('.icon-zanting');
	let duration=document.querySelector('.duration');
	let width=duration.offsetWidth;
	let progress=document.querySelector('.progress');
	let time=document.querySelector('.time');
	let fulltime=document.querySelector('.fulltime');
	let gm=document.querySelector('.mid-title');
	let name=document.querySelector('.name');
	let num=0;
	render(database[num]);
	
	//歌词
	function render(data){
		title.innerText=data.songs;
		gm.innerText=data.songs;
		author.innerText=data.name;
		name.innerText=data.name;
		audio.src=data.src;
		fulltime.innerText=data.alltime;
		lyrics.innerText='';
		for(let i=0;i<data.lyrics.length;i++){
			lyrics.innerHTML +=`
				<li>${data.lyrics[i].lyric}</li>
			`;			
		}
	}
	
	//歌曲切换
	let before=document.querySelector('.icon-xiayishou2');
	let next=document.querySelector('.icon-xiayishou1');
	let i=0;
	before.onclick = function(){
		if(num==0){
			if(i==0){
				i=database.length;
			}
			i--;
		}else if(num==1){
			i = Math.floor(Math.random()*database.length);
		}
		render(database[i]);
		audio.play();
	}
	next.onclick = function(){
		if(num==0){
			i++;
			if(i==database.length){
				i=0;
			}
		}else if(num==1){
			i = Math.floor(Math.random()*database.length);
		}
		render(database[i]);
		audio.play();
	}
			
	//播放暂停
	play.onclick=function(){
		if(audio.paused){
			audio.play();
			play.classList.remove('icon-bofang');
			play.classList.add('icon-zanting');
		}else{
			audio.pause();
			play.classList.remove('icon-zanting');
			play.classList.add('icon-bofang');
		}
	}
	
	//进度条  比例*宽度
	audio.ontimeupdate=function(){
		let now=audio.currentTime;
		let full=audio.duration;
		//时间更新
		let min=Math.floor(audio.currentTime/60)>9?Math.floor(audio.currentTime/60):`0${Math.floor(audio.currentTime/60)}`;
		let sec=Math.floor(audio.currentTime%60)>9?Math.floor(audio.currentTime%60):`0${Math.floor(audio.currentTime%60)}`;
		let times = `${min}:${sec}`;
		time.innerText= times;
		//进度条更新
		let bili=now/full;
		progress.style.width=`${bili*100}%`;
		database[i].lyrics.forEach((ele,index)=>{
			if(ele.time==times){
				let j=index;
				if(index<6){
					index = 0;
				}else{
					index-=6;
				}
				lyrics.innerHTML='';
				for(let j=index;j<database[i].lyrics.length;j++){
					lyrics.innerHTML+=`
						<li class="list${j}">${database[i].lyrics[j].lyric}</li>
					`;
				}
				document.querySelector(`.list${j}`).style.color = '#121dfd';
			}
		})
	}
	
	//调节音量
//	let vol=document.querySelector('.vol');
//	let volw=document.querySelector('volw');
//	let volbut=document.querySelector('.volbut');
//	volbut.onmousedown=function(e){
//		e.preventDefault();
//		let cx=e.clientX;
//		let left=this.offsetLeft;
//		let lefts;
//		vol.onmousemove=function(e){
//			e.preventDefault();
//			let ox = e.clientX;
//			lefts = ox-cx+left;
//			console.log(ox-cx);
//			if(lefts<=-0.07){
//				lefts=-0.07;
//			}
//			if(lefts>=(vol.offsetWidth-volbut.offsetWidth/2)){
//				lefts=(vol.offsetWidth-volbut.offsetWidth/2);
//			}
//			volbut.style.left = `${lefts}rem`;
//			volw.style.width = `${lefts+0.07}rem`;
//			audio.vol=(lefts+0.07)/100;
//		}
//		volbut.onmouseup = function(){
//			vol.onmousemove= null;
//			volbut.onmouseup =null;
//		}
//	}

}
