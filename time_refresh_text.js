window.setTimeout("delaytime()",3000);
window.setTimeout("delaystatus()",6000);

function delaytime(){
	getRowsText();
	setTimeout("delaytime()",3000);
}

function delaystatus(){
	getStatusText();	
	setTimeout("delaystatus()",10000);
}

function delayrefsystem(){
	refSystem();	
	setTimeout("delayrefsystem()", 150000);
}

function getRowsText(){
	var pageevent=document.getElementById("eventrefreshtimerows");
	var thispath="function_file/function_getrows.php";
	var XMLHttpRequestObject = false;
	
	if(pageevent!=null){
		if (window.XMLHttpRequest) {
			XMLHttpRequestObject = new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
		}
		
		if(XMLHttpRequestObject){
			XMLHttpRequestObject.open("GET", thispath);
			XMLHttpRequestObject.onreadystatechange = function(){
				if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200){
					pageevent.innerHTML=XMLHttpRequestObject.responseText;
				}
			}
		}
		
		XMLHttpRequestObject.send(null);
	}
}

function getStatusText(){
	var pageevent=document.getElementById("statusmachine");	
	var thispath="function_file/function_statusmachine.php";
	var XMLHttpRequestObject = false;
	
	if(pageevent!=null){
		if (window.XMLHttpRequest) {
			XMLHttpRequestObject = new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
		}
		
		if(XMLHttpRequestObject){
			XMLHttpRequestObject.open("GET", thispath);
			XMLHttpRequestObject.onreadystatechange = function(){
				if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200){
					pageevent.innerHTML=XMLHttpRequestObject.responseText;
				}
			}
		}
			
		XMLHttpRequestObject.send(null);
	}
}

function refSystem(){		
	  var XMLHttpRequestObject = false;
	  
	  if (window.XMLHttpRequest) {
		  XMLHttpRequestObject = new XMLHttpRequest();
	  } else if (window.ActiveXObject) {
		  XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	  }
	  
	  if(XMLHttpRequestObject){
		  XMLHttpRequestObject.open("GET", "refsystem.php");
		  XMLHttpRequestObject.onreadystatechange = function(){
			  if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200){
				  document.getElementById('refsystem').innerHTML=XMLHttpRequestObject.responseText;
			  }
		  }
	  }
	  
	  XMLHttpRequestObject.send(null);
 }
 
 function process_payroll(divisionid,deptid,companyid,empid,category,process,from_month,from_years,periode,allowupdate){
	  var XMLHttpRequestObject = false;
	  
	  if (window.XMLHttpRequest) {
		  XMLHttpRequestObject = new XMLHttpRequest();
	  } else if (window.ActiveXObject) {
		  XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	  }
	  
	  if(XMLHttpRequestObject){
		  XMLHttpRequestObject.open("GET", "payroll.php?menu=process_payroll.php&divisionid="+divisionid+"&deptid="+deptid+"&companyid="+companyid+"&empid="+empid+"&category="+category+"&process="+process+"&from_month="+from_month+"&from_years="+from_years+"&periode="+periode+"&allowupdate="+allowupdate);
		  XMLHttpRequestObject.onreadystatechange = function(){
			  if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200){
				  document.getElementById('process_payroll').innerHTML=XMLHttpRequestObject.responseText;
			  }
		  }
	  }
	  
	  XMLHttpRequestObject.send(null);
 }
 
