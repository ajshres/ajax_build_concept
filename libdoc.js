function getAjax(options){
	var defaultOptions = {

	};
	var url = options.url;
	var type = options.type||"GET";
	var headers = getHeaders(options.headers);
	var success = options.success
	console.log("options",success);
	var evaluatedOptions = {
		url:url,
		type:type,
		headers:headers
	};

	var a = $.ajax(evaluatedOptions);
	if("dataType" in options){
		evaluatedOptions.dataType = options.dataType;
	}
	return $.ajax(evaluatedOptions).done(function(){
		var s = getFunction('success',success);
		s&&s.apply(this,arguments);
	}).error(function(){

		var e = getFunction('error',options.error);
		e&&e.apply(this,arguments);
	}).complete(function(){

		var c = getFunction('complete',options.complete);
		c&&c.apply(this,arguments);
	});
}


function getFunction(type,variable){
	if(!variable){
		return false;
	}
	var vR = variable.split('.');
	var aM = AjaxMethods;
	var rF = aM;
	var flag = true;
	for(var i=0,len=vR.length;i<len&&flag;i++){
		var tV = vR[i];
		if(tV in rF){
			rF = rF[tV];
		} else{
			rF = false;
			flag = false;
		}
	}
	return rF;
}


var AjaxMethods={
	"first":{
		"success":function(){
			console.log("first success",arguments);
		},
		"error":function(){
			console.log("first error");
		},
		"complete":function(){
			console.log("first complete");
		}
	},
	"outer":{
		"first":{
			"success":function(){
				console.log("outer first success",arguments);
			},
			"error":function(){
				console.log("outer first error");
			},
			"complete":function(){
				console.log("outer first complete");
			}		
		}
	}
}

function getHeaders(){
	return {
		"Access-Control-Allow-Origin":"*"
	};
}