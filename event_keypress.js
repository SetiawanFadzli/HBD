function CurrencyValue(e){
	var unicode=e.charCode? e.charCode : e.keyCode
	if(unicode<37||unicode>40){if (unicode!=8 && unicode!=44 && unicode!=46 && unicode!=118  && unicode!=99){ if (unicode<48||unicode>57) return false }}
}

function DateValue(e){
	if(unicode<37||unicode>40){if (unicode!=8 && unicode!=58 && unicode!=46 && unicode!=118  && unicode!=99){ if (unicode<48||unicode>57) return false }}
}

function DecimalValue(e){
	var unicode=e.charCode? e.charCode : e.keyCode
	
	if(unicode==8 || unicode==46){
		return true;
	}else if(unicode >= 48 && unicode <= 57){ 
		return true;
	}else{
		return false;
	}
}

function EmailValue(e){
	
	var unicode=e.charCode? e.charCode : e.keyCode
	if((unicode<37||unicode>40) && unicode!=45){
		if(unicode==58 || unicode==91 || unicode==92 || unicode==93 || unicode==94 || unicode==96 || unicode==47){
			return false ;
		}else{
			if ((unicode<65||unicode>122) && (unicode<46||unicode>57) && (unicode!=8 && unicode!=58 && unicode!=64 && unicode!=46 && unicode!=118 && unicode!=99)){ 
				return false ;
			}
		}
	}
}

function NotCharSpecial(e){
	var unicode=e.charCode? e.charCode : e.keyCode
	if(unicode<37||unicode>40){
		if (unicode==39 || unicode==34 || unicode==36 || unicode==96 || unicode==123 || unicode==125 ||
		unicode==91 || unicode==93 || unicode==94 || unicode==95 || unicode==60 || unicode==62){ return false }
	}
}

function NotSpace(e){
	var unicode=e.charCode? e.charCode : e.keyCode
	if(unicode<37||unicode>40){
		if(unicode==58 || unicode==91 || unicode==92 || unicode==93 || unicode==94 || unicode==95 || unicode==96){
			return false ;
		}else{
			if ((unicode<65||unicode>122) && (unicode<47||unicode>57) && (unicode!=8 && unicode!=58 && unicode!=45 && unicode!=46 && unicode!=118  && unicode!=99)){ 
				return false ;
			}
		}
	}
}

function NumberNSpace(e){
	var unicode=e.charCode? e.charCode : e.keyCode
	if(unicode<37||unicode>40){if (unicode!=8 && unicode!=32 && unicode!=46 && unicode!=118  && unicode!=99){ if (unicode<48||unicode>57) return false }}
}

function NumberNString(e){
	var unicode=e.charCode? e.charCode : e.keyCode
	if(unicode<37||unicode>40){
		if(unicode==46 || unicode==58 || unicode==91 || unicode==92 || unicode==93 || unicode==94 || unicode==95 || unicode==96){
			return false ;
		}else{
			if ((unicode<65||unicode>122) && (unicode<47||unicode>57) && (unicode!=8 && unicode!=58 && unicode!=32 && unicode!=46 && unicode!=118  && unicode!=99)){ 
				return false ;
			}
		}
	}
}

function NumberOnly(e){
	var unicode=e.charCode? e.charCode : e.keyCode
	if(unicode<37||unicode>40){if (unicode!=8 && unicode!=46){ if (unicode<48||unicode>57) return false }}
}

function NumberPlus(e){
	var unicode=e.charCode? e.charCode : e.keyCode
	if(unicode<37||unicode>40){if (unicode!=8 && unicode!=120 && unicode!=88 && unicode!=46 && unicode!=118  && unicode!=99){ if (unicode<48||unicode>57) return false }}
}

function StringNSpace(e){
	var unicode=e.charCode? e.charCode : e.keyCode
	if(unicode<37||unicode>40){if (unicode!=8 && unicode!=32 && unicode!=45 && unicode!=46 && unicode!=118  && unicode!=99){ if (unicode<65||unicode>122) return false }}
}

function StringOnly(e){
	var unicode=e.charCode? e.charCode : e.keyCode
	if(unicode<37||unicode>40){if (unicode!=8 && unicode!=46 && unicode!=118  && unicode!=99){ if (unicode<65||unicode>122) return false }}
}

function TimeValue(e){
	var unicode=e.charCode? e.charCode : e.keyCode
	if(unicode<37||unicode>40){if (unicode!=8 && unicode!=45 && unicode!=46 && unicode!=58 && unicode!=118  && unicode!=99){ if (unicode<48||unicode>57) return false }}
}

function WebsiteValue(e){
	var unicode=e.charCode? e.charCode : e.keyCode
	if(unicode<37||unicode>40){
		if(unicode==91 || unicode==92 || unicode==93 || unicode==94 || unicode==96){
		return false ;
		}else{
			if ((unicode<65||unicode>122) && (unicode<46||unicode>57) && (unicode!=8 && unicode!=58 && unicode!=45 && unicode!=46 && unicode!=118  && unicode!=99)){ 
				return false ;
			}
		}
	}
}

function pressKey(e){
	var unicode=e.charCode? e.charCode : e.keyCode
		
	if (unicode == 116 || unicode == 84 || unicode == 45 || unicode == 43 || unicode == 8)
		return true;	
	else
		return false;
}
	
function formatTime(inpObj){
	var tm=inpObj.value;		
	var fnd=tm.split(":");
	var y=0;
	var str="";
	
	if(fnd.length != 2){
		y=1;
	}else{
		var regexp=/^[0-9]+$/;
		
		for(var i=0; i < 2; i++){
			if(regexp.test(fnd[i])){
				if(fnd[i].length==1){
					if(str!="") str+=":";
					str+="0" + fnd[i];	
				}else if((i == 0 && parseInt(fnd[i]) > 24) || (i == 1 && parseInt(fnd[i]) > 24)){
					y=1;
				}else{
					if(str!="") str+=":";
					str+=fnd[i];	
				}
			}else{
				y=1;
			}
		}
	}
	
	if(y==1){
		inpObj.focus();
		alert("Time format not valid.");
	}else{
		inpObj.value=str;	
	}
}