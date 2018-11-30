// JavaScript Document

var arr=[	
	//SEAMASTER
			{	ma:"seamaster",
				ten:"<a href='s-1.html' target='_self'>OMEGA CO-AXIAL MASTER CHRONOMETER GMT 45.5 MM</a>",
				hinh:"im-s/planet/1.png",
				gia:"200",
			},
			{
				ma:"seamaster",
				ten:"<a href='s-2.html' target='_self'>OMEGA CO-AXIAL MASTER CHRONOGRAPH 45.5 MM</a>",
				hinh:"im-s/planet/2.png",
				gia:"250",

			},
			{
				ma:"seamaster",
				ten:"<a href='s-3.html' target='_self'>OMEGA CO-AXIAL MASTER CHRONOMETER 43.5 MM</a>",
				hinh:"im-s/planet/3.png",
				gia:"690",
			},
			{
				ma:"seamaster",
				ten:"<a href='s-4.html' target='_self'>OMEGA CO-AXIAL MASTER CHRONOMETER GMT 43.5 MM</a>",
				hinh:"im-s/planet/4.png",
				gia:"211",
			},
			{
				ma:"seamaster",
				ten:"<a href='s-5.html' target='_self'>OMEGA MASTER CO-AXIAL GMT<br> 43 MM</a>",
				hinh:"im-s/seamaster300/1.png",
				gia:"97",
			},
			{
				ma:"seamaster",
				ten:"<a href='s-6.html' target='_self'>OMEGA MASTER CO-AXIAL <br>41.5 MM</a>",
				hinh:"im-s/seamaster300/2.png",
				gia:"190",

			},
			{
				ma:"seamaster",
				ten:"<a href='s-7.html' target='_self'>OMEGA CO-AXIAL ANNUAL <br>CALENDAR 43 MM</a>",
				hinh:"im-s/seamaster300/3.png",
				gia:"130",
			},
			{
				ma:"seamaster",
				ten:"<a href='s-8.html' target='_self'>OMEGA CO-AXIAL 41.5 MM",
				hinh:"im-s/seamaster300/4.png",
				gia:"370",
			},
			
			
	
		];
function loadData()
{
	var div_main=document.getElementById("main");
	for (var i=0;i<arr.length;i++)
	{	
		if(arr[i].ma=="seamaster")
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