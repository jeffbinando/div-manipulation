// JavaScript Document
var color;
var rotation = 0;
$(document).ready(function(){

})
.on("click", "#submitColor", function(){
	selectColor();
})
.on("click", "#submitWidth", function(){
	selectWidth();
})
.on("click", "#submitHeight", function(){
	selectHeight();
})
.on("click", ".swatch", function(){
	swatchSplit = $(this).attr('style').split(':');
	swatch = swatchSplit[1];
	$('#block').css('background',swatch);
})
.on("keypress", "#colorInput", function(e){
	if(e.which == 13) {
    	selectColor(); 
		return false;
    }
})
.on("keypress", "#widthInput", function(e){
	if(e.which == 13) {
    	selectWidth(); 
		return false;
    }
})
.on("keypress", "#heightInput", function(e){
	if(e.which == 13) {
    	selectHeight(); 
		return false;
    }
})
.on("click", "#rotate", function(e){
	rotation += 45;
    $("#block").rotate(rotation);	
})
;

function selectColor(){
	var hex = $('#colorInput').val();
	if(hex.charAt(0)=='#'){
		$('#block').css('background',hex);
		$('#color-history').append('<a href="#" class="swatch" style="background:'+hex+'"></a>');	
	}else{
		alert('Please prefix your hex code with the "#" symbol.');
	}
    return false;
}
function selectWidth(){
	var width = $('#widthInput').val();
	$('#block').animate({width:width+'px'},500);
    return false;
}
function selectHeight(){
	var height = $('#heightInput').val();
	$('#block').animate({height:height+'px'},500);
    return false;
}
jQuery.fn.rotate = function(degrees) {
    $('#block').css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    return $('#block');
};
