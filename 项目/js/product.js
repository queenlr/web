/*
* @Author: lenovo
* @Date:   2017-09-12 11:34:11
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-12 23:04:27
*/
$('.pli').hover(function(){
	var index=$(this).index('.pli');
	$('.pli>a').eq(index).css('color','rgb(216,0,0)')
	$('.navii').eq(index).css('height','200px')
},function(){
	$('.navii').css('height',0)
	$('.pli>a').css('color','')
})