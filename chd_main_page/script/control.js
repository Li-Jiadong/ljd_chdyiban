window.onresize = function(){
	var sty=document.getElementById('simage').style;
	 var w=document.body.clientWidth;
	 sty.width=w+'px';
	 sty.height=w/3.3103 +'px';
}
var timer;
window.onload = function(){
	var imanum=7;
	timer = setInterval(changeimg,3000);
	var slide = document.getElementById('simage');
	var pagecount=0;
	var sbl = document.getElementById('sbl');
	var sbr = document.getElementById('sbr');
	var hov_a=[this.document.getElementById('hov_1'),
	this.document.getElementById('hov_2'),
	this.document.getElementById('hov_3'),
	this.document.getElementById('hov_4'),
	this.document.getElementById('hov_5'),
	this.document.getElementById('hov_6'),
	this.document.getElementById('hov_7')];
	
	for(var i=0;i<imanum;++i){
		hov_a[i].onmouseenter=hbutton;
	}
	sbl.onclick=sbutton;
	sbr.onclick=sbutton;
	var simg=[document.getElementById('simg1'),
				document.getElementById('simg2'),
				document.getElementById('simg3'),
				document.getElementById('simg4'),
				document.getElementById('simg5'),
				document.getElementById('simg6'),
				document.getElementById('simg7')];
	var i=0,next=pagecount,tc;
	hov_a[next].style.backgroundImage='url(./image/dian_hover.png)';
	function changeimg(){
		next=(pagecount+1)%imanum;
		simg[next].style.left='100%';
		simg[next].style.zIndex=10;
		i=0;
		clearInterval(tc);
		changestyle();
		tc=setInterval(move,20);
	}
	function move(){
		simg[pagecount].style.left='-'+i+'%';
		simg[next].style.left=100-i+'%';
		if(i==100){
			clearInterval(tc);
			simg[pagecount].style.zIndex=1;
			pagecount=next;
			i=0;
			return;
		}
		i+=5;
	}
	function rmove(){
		simg[pagecount].style.left=i+'%';
		simg[next].style.left=-100+i+'%';
		
		if(i==100){
			clearInterval(tc);
			simg[pagecount].style.zIndex=1;
			pagecount=next;
			i=0;
			return;
		}
		i+=5;
	}
	function sleep(n){
		var start=(new Date()).getTime();
		while(true){
			var end = (new Date()).getTime();
			if(end - start > n) {
				break;
			}
		}
		//alert('hhh');
	}
	slide.onmouseenter = function(){
		clearInterval(timer);
	}
	slide.onmouseleave = function(){
		timer=setInterval(changeimg,3000);
	}
	function sbutton(){
		//alert(event.srcElement.id);
		i=0;
		//sbl.textContent='+';
		clearInterval(timer);
		clearstimer();
		if(event.srcElement.id=='sbl'){
			next=(pagecount+imanum-1)%imanum;
			simg[next].style.left='-100%';
			simg[next].style.zIndex=10;
			tc=setInterval(rmove,15);
		}else{
			next=(pagecount+1)%imanum;
			simg[next].style.left='100%';
			simg[next].style.zIndex=10;
			tc=setInterval(move,15);
		}
		changestyle();
	}
	function hbutton(){
		i=0;
		clearstimer();
		var num;
		num = Number((event.srcElement.id+'').slice(4,5))-1;
		//alert(num);
		clearInterval(timer);
		if(num!=pagecount){
			var sr=false;
			
			if((num+imanum-pagecount)%imanum>3){
				sr=true;
			}else{
				sr=false;
			}
			next=num;
			if(sr){
				simg[next].style.left='-100%';
				simg[next].style.zIndex=10;
				i=0;
				tc=setInterval(rmove,20);
			}else{
				simg[next].style.left='100%';
				simg[next].style.zIndex=10;
				i=0;
				tc=setInterval(move,20);
			}
			changestyle();
		}
	}
	function changestyle(){
		this.document.getElementById('num_change').textContent='0'+(next+1);
		hov_a[next].style.backgroundImage='url(./image/dian_hover.png)';
		hov_a[pagecount].style.backgroundImage='url(./image/dian.png)';
	}
	function clearstimer(){
		clearInterval(tc);
		simg[pagecount].style.left='100%';
		simg[next].style.left='0';
		simg[pagecount].style.zIndex=1;
		pagecount=next;
		i=0;

	}
}