// JavaScript Document
var arr=[
			{
				ten:"<a href='d-1.html' target='_self'>HOUR VISION OMEGA CO-AXIAL MASTER ANNUAL CALENDAR 41 MM</a>",
				hinh:"im-d/hv/1.png",
				gia:"550",
			},
			{
				ten:"<a href='d-2.html' target='_self'>HOUR VISION OMEGA CO-AXIAL MASTER CHRONOMETER 41 MM</a>",
				hinh:"im-d/hv/2.png",
				gia:"890",

			},
			{
				ten:"<a href='d-3.html' target='_self'>HOUR VISION OMEGA CO-AXIAL ANNUAL CALENDAR 41 MM</a>",
				hinh:"im-d/hv/3.png",
				gia:"690",
			},
			{
				ten:"<a href='d-4.html' target='_self'>HOUR VISION OMEGA CO-AXIAL 41 MM</a>",
				hinh:"im-d/hv/4.png",
				gia:"411",
			},
			{
				ten:"<a href='d-5.html' target='_self'>QUARTZ 32.7 MM</a>",
				hinh:"im-d/hv/5.jpg",
				gia:"510",
			},
			{
				ten:"<a href='d-6.html' target='_self'>QUARTZ 27.4 MM</a>",
				hinh:"im-d/hv/6.jpg",
				gia:"600",

			},
			{
				ten:"<a href='d-7.html' target='_self'>QUARTZ 24.4 MM</a>",
				hinh:"im-d/hv/7.jpg",
				gia:"730",
			},
			{
				ten:"<a href='d-8.html' target='_self'>QUARTZ 34 MM</a>",
				hinh:"im-d/hv/8.jpg",
				gia:"670",
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
		var tag_p=document.createElement("p");
		tag_p.innerHTML=arr[i].ten
		var tag_p2=document.createElement("p2");
		tag_p2.innerHTML=arr[i].gia+"$";
		var tag_p1=document.createElement("p1");
		tag_p1.innerHTML="<input type='button' id='button' value='Add to cart' onclick='them("+i+")'>";
		
		
		//dat anh va p vao trong div_t lam con
		div_t.appendChild(anh);
		div_t.appendChild(tag_p);
		div_t.appendChild(tag_p2);
		div_t.appendChild(tag_p1);
	
		div_n.appendChild(div_t);
		div_main.appendChild(div_n);
	}
	
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