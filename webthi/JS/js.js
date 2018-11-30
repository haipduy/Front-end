// JavaScript Document
function change(x,domo)
{
	x.style.opacity=domo;		
}

function demo()
{	
	window.outerWidth=window.screen.width;
	window.outerHeight=window.screen.height;
}

var tam=0;
function chay()
{
	var div_con=document.getElementById("menu1_con");
	div_con.style.transform="translateX(-"+tam+"px)";
	tam=tam+1349;
	if(tam==4047) tam=0;
	setTimeout("chay()",3000);
}