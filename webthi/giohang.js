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
var arr=[
			{
				ten:"OMEGA CO-AXIAL MASTER CHRONOMETER SMALL SECONDS 27 MM",
				hinh:"im-c/constellation/1.png",
				gia:"1",
			},
			{
				ten:"OMEGA CO-AXIAL DAY-DATE 38 MM",
				hinh:"im-c/constellation/2.png",
				gia:"1",

			},
			{
				ten:"OMEGA CO-AXIAL 38 MM",
				hinh:"im-c/constellation/3.png",
				gia:"1",
			},
			{
				ten:"OMEGA CO-AXIAL 31 MM",
				hinh:"im-c/constellation/4.png",
				gia:"1",
			},
			{
				ten:"OMEGA CO-AXIAL 27 MM",
				hinh:"im-c/constellation/5.png",
				gia:"1",
			},
			{
				ten:"CO-AXIAL 35 MM",
				hinh:"im-c/constellation/6.png",
				gia:"1",

			},
			{
				ten:"QUARTZ 35 MM",
				hinh:"im-c/constellation/7.png",
			},
			{
				ten:"QUARTZ 27 MM",
				hinh:"im-c/constellation/8.png",
				gia:"1",
			}
		];
function loadData()
{
	var div_main=document.getElementById("main");
	for (var i=0;i<arr.length;i++)
	{
		var div_n=document.createElement("div");
		var div_t=document.createElement("div");
		
		div_n.className="ngoai";
		div_t.className="trong";
		
		
		var anh=document.createElement("img");	
		anh.src=arr[i].hinh;
		var tag_p1=document.createElement("p1");
		tag_p1.innerHTML=arr[i].ten;
		var tag_p2=document.createElement("p2");
		tag_p2.innerHTML="<input type='button' value='Add to cart' onclick='them("+i+")'>";
		
		//dat anh va p vao trong div_t lam con
		div_t.appendChild(anh);
		div_t.appendChild(tag_p1);
		div_t.appendChild(tag_p2);
		div_n.appendChild(div_t);
		div_main.appendChild(div_n);
	}
	

}
function khoitao()
{
	//kiem tra kho
	var c=window.localStorage.getItem("count");
	if(c==null)
	{
		window.localStorage.setItem("count",0);
	}
}
//ham tim dua vao ma
function tim(tencantim)
{
	var c=window.localStorage.getItem("count");
	if(c!=null)
	{
		for(var i=1;i<=c;i++)
		{
			var v=window.localStorage.getItem(i);
			if(v!=null)
			{
				var tam=v.split(",");
				if(tam[0]==tencantim)
					return i;
			}
		}
	}
	return -1;
}
//ham nay de khoi tao bien count=0 trong localStorage
function khoitao()
{
	//kiem tra kho
	var c=window.localStorage.getItem("count");
	if(c==null)
	{
		window.localStorage.setItem("count",0);
	}
}
//ham tim dua vao ma
function tim(tencantim)
{
	var c=window.localStorage.getItem("count");
	if(c!=null)
	{
		for(var i=1;i<=c;i++)
		{
			var v=window.localStorage.getItem(i);
			if(v!=null)
			{
				var tam=v.split(",");
				if(tam[0]==tencantim)
					return i;
			}
		}
	}
	return -1;
}
//ham nay de them sp vao kho
function them(i)
{	
	var kq=tim(arr[i].ten);
	if(kq==-1)//k thay sp nay

	{
		var c=window.localStorage.getItem("count");
		c++;
		window.localStorage.setItem(c,arr[i].ten+","+arr[i].hinh+","+arr[i].gia+","+1);
		window.localStorage.setItem("count",c);

	}
	else //timthay
	{
		var v=window.localStorage.getItem(kq);
		if(v!=null)
		{
			var tam=v.split(",");	
			tam[3]=parseInt(tam[3])+1;
			//cap nhat tam vao kho
			window.localStorage.setItem(kq,tam[0]+","+tam[1]+","+tam[2]+","+tam[3]);
		}
	}
}

