$('.navli').hover(function(){
	var index=$(this).index('.navli');
	$('.nav-about').eq(index).css('height','120px')
},function(){
	$('.nav-about').css('height',0)
})