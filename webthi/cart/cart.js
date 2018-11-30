var arr=[
			{
				ten:"OMEGA CO-AXIAL MASTER CHRONOMETER MOONPHASE CHRONOGRAPH 44.25 MM",
				hinh:"im-spm/moonwatch/dh1.png",
				gia:"1",
			},
			{
				ten:"OMEGA CO-AXIAL CHRONOGRAPH 44.25 MM",
				hinh:"im-spm/moonwatch/dh2.png",
				gia:"1",

			},
			{
				ten:"PROFESSIONAL CHRONOGRAPH 42 MM",
				hinh:"im-spm/moonwatch/dh3.png",
				gia:"1",
			},
			{
				ten:"CHRONOGRAPH 39.7 MM",
				hinh:"im-spm/moonwatch/dh4.png",
				gia:"1",
			},
			{
				ten:"ANNIVERSARY LIMITED SERIES",
				hinh:"im-spm/speedmaster38/dh1.png",
				gia:"1",
			},
			{
				ten:"PROFESSIONAL MOONPHASE CHRONOGRAPH 44.25 MM",
				hinh:"im-spm/speedmaster38/dh2.png",
				gia:"1",

			},
			{
				ten:"CO-AXIAL CHRONOGRAPH 42.4 X 46.2 MM",
				hinh:"im-spm/speedmaster38/dh3.png",
				gia:"1",
			},
			{
				ten:"CO-AXIAL CHRONOGRAPH 40 MM",
				hinh:"im-spm/speedmaster38/dh4.png",
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
function show()
{
	var sum=0;
	var s="<table><caption>Giỏ hàng của bạn</caption>";
	s=s +"<tr>";
	s=s +"<th>TEN</th>";
	s=s +"<th>HINH</th>";
	s=s +"<th>GIA</th>";
	s=s +"<th>SL</th>";
	s=s +"<th>XOA</th>";
	s=s +"</tr>";
	
	var c=window.localStorage.getItem("count");
	if(c!=null)
	{
		for(var i=1;i<=c;i++)
		{
			var v=window.localStorage.getItem(i);
			if(v!=null)
			{
				var tam=v.split(",");
				s= s+ "<tr>";
				s= s+ "<td>" + tam[0]+"</td>"; // ten
				s= s+ "<td><img src='" + tam[1]+"'></td>"; // hinh
				s= s+ "<td>" + tam[2]+"</td>"; // gia
			s= s+ "<td><input type='number' value='" + tam[3]+"'   min='1'  max='10'></td>"; // so luong
			    s= s +"<td><input type='button' value='delete'></td>";
				s= s+"</tr>";
				sum=sum + tam[2]*tam[3]; 
			}
		}// het for
		s =s +"</table>";
		s = s+ "<p> Tong tien can thanh toan :" +sum +"$</p>";
		
		var div=document.getElementById("chitiet");
		div.innerHTML=s;
	}
	
}