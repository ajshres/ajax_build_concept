//http://gd.geobytes.com/GetCityDetails?callback=?&fqcn=
$(function(){
	var ajax = getAjax({
		url:"http://gd.geobytes.com/GetCityDetails?callback=?&fqcn=Kathmandu",
		success:"first.success",
		complete:"outer.first.complete",
		dataType:"jsonp"
	});
});


/*$(document).ready(function(){
	var a =$.ajax({
		url:"http://gd.geobytes.com/GetCityDetails?callback=?&fqcn=Kathmandu",
		type:"GET",
		dataType:"jsonp"
	}).done(function(responseText,status,xhr){
		$('ul').append('<li>'+responseText.geobytescapital+" "+responseText.geobytescityid+" "+responseText.geobytescountry+"</li>")
	}).error(function(error,errorType){
		console.log("error",error,errorType);
	}).always(function(responseText,status,xhr){
		console.log("complete",responseText,status,xhr);
	});
});*/
