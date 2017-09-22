let flag=true;
$(window).scroll(function(){
	let scroll=$('body').scrollTop();
	if(scroll>650){
		if(flag){
			flag=false;
			$('.goback').css({right:'3px',bottom:'20px'});
		}
	}else{
		if(!flag){
			flag=true;
			$('.goback').css({right:0,bottom:'-50px'});
		}
	}
})