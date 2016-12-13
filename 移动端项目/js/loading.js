

var arr = ['img/music.png','img/music.png','img/music.png','img/music.png','img/music.png','img/music.png','img/music.png','img/music.png','img/music.png','img/music.png','img/music.png','img/music.png','img/music.png','img/music.png','img/music.png'];

function loading(arr, func) {
				var num = 0;//累计加载的数量
				for(var i = 0; i < arr.length; i++) {
					var img = new Image();
					img.src = arr[i];
					//当图片加载完毕时
					img.onload = function() {
						num++;
						//将加载进度的比例值传递
						func.call(null, num/arr.length);
					}
				}
			}
			



loading(arr, function(percent){
//	  var a = null;
//	  clearInterval(a);
//	  setInterval(increment,10);
//	  function increment(){
	  	var num = $('.load-bar').width() * percent;
//	  	if(percent >= 1) {
//	  		console.log(percent)
//	  		clearInterval(a);
//	  		$('.wrapper').css('display','none');
//	  		$('.load-bar-inner').width($('.load-bar').width());
//	  		$('#counter').html('100%');
//	  		
//	  	}
	  	
	    $('.load-bar-inner').animate({'width':num},10);
//	    console.log(percent)
	    $('#counter').html(Math.ceil(percent * 100) + '%'); 
	    if(percent >= 1) {
	    	   $('.wrapper').css('display','none');
	    	   start();
	    }
	    
//	  }

});



