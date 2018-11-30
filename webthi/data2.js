// JavaScript Document
var arr=[
          {
		    
			ten:"quan dui",
			hinh:"im-c/constellation/1.png",
			gia:100,
			
		  },
		  {
		    
			ten:"dep",
			hinh:"im-c/constellation/2.png",
			gia:80,
			
		  },
		  {
		   
			ten:"guoc",
			hinh:"im-c/constellation/3.png",
			gia:120,
			
		  },
		  {
		   
			ten:"do lot",
			hinh:"im-c/constellation/4.png",
			gia:120,
			
		  }
        ];
		
function loadData()
{
	var div_main=document.getElementById("main");
	for(var i=0;i<arr.length;i++)
	{
		var div_n=document.createElement("div");
		var div_t=document.createElement("div");
	    div_n.className="ngoai";
		div_t.className="trong";
		window.set
	
		
		var anh=document.createElement("img");
		anh.src=arr[i].hinh;
		var tag_p=document.createElement("p");
		tag_p.innerHTML=arr[i].ten+"<br>Gia: "+ arr[i].gia +"<br><input type='button' value='mua' onclick='them("+i+")'   >";
		
		
		div_t.appendChild(anh);
		div_t.appendChild(tag_p);
		div_n.appendChild(div_t);
		div_main.appendChild(div_n);
	}
}
//////////////////////////////////////////////////////////
// hàm nay de khoi tao bien count=0 trong localStorage
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
			s= s+ "<td><input type='number' value='" + tam[3]+"'   min='1'  max='10' onchange='sua("+i+",this)'></td>"; // so luong
			    s= s +"<td><input type='button' value='delete' onclick='xoa("+i+")'></td>";
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
function sua(i,control)
{
	var v=window.localStorage.getItem(i);
	if(v!=null)
	{
		var tam=v.split(",");
		tam[3]=control.value;
		window.localStorage.setItem(i,tam[0]+","+tam[1]+","+tam[2]+","+tam[3]);	
		show();
	}
	
}
function xoa(i)
{
	var traloi=window.confirm("ban co chac muon bo sp nay");
	if(traloi==true)
	{
		window.localStorage.removeItem(i);
		show();	
	}
}
function check()
{
	var t1=document.getElementById("t1");
	var t2=document.getElementById("t2");
	if(t1.value.length==0 || t2.value.length==0)
	{
		alert("loi");
		return false;	
	}
	return true;
}
function xong()
{
	alert("cam on.");
	window.localStorage.clear();
	window.open("index.html","_self");
	
}






