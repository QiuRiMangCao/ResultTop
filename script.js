window.onload=function(){
	var obtn=document.getElementById('btn');
	var timer=null;
	var isTop=true;
	/*获取页面可视区高度*/
	var clientHeight=document.documentElement.clientHeight;

	/*滚动条一滚动就会触发函数*/
	window.onscroll=function(){
		var osTop=document.documentElement.scrollTop||document.body.scrollTop;
		if (osTop>=clientHeight) {
			obtn.style.display='block';
		}else{
			obtn.style.display='none';
		}

		if (!isTop) {
			clearInterval(timer);
		}
		isTop=false;
	}


	obtn.onclick=function(){
		/*设置定时器*/
		timer=setInterval(function(){
			/* 获取滚动条距离顶部的高度   注意：兼容性*/
			var osTop=document.documentElement.scrollTop||document.body.scrollTop;
			/*有可能不是整数,添加一个由快到慢的一个动画过度*/
			/*Math.floor向下取整*/
			var ispeed=Math.floor(-osTop/3);

			/*alert(osTop);*/
			/*统一给不同浏览器的scrollTop赋值*/
			document.documentElement.scrollTop=document.body.scrollTop=osTop+ispeed;
			isTop=true;
			if (osTop==0) {
				//清除定时器
				clearInterval(timer);
			}
		},30);
	}
}

