//start();
function main() {
	var audio = document.querySelector('#music');
	audio.play();
	$('#slideBtn').css('display','block')
	// 音乐点击事件的添加
	var musicClick = 0;
	$('#bgmusic img').on('tap',function(){
		
		musicClick ++;
		if(musicClick%2 == 0) {
			$(this).attr('src','img/music.png');
			audio.play();
		} else {
			$(this).attr('src','img/musicoff.png');
			audio.pause();
		}
	});
	
	
	
	// 上下左右滚动事件的调用
	
//  $('.one-logo .top-one').animate({left:'189px',top60px},1000)
    
}

function start () {
	 main();// 加载音乐和触发按钮
	var swiperV = new Swiper('.swiper-container-v', {
		
       direction: 'vertical',
       initialSlide :0,
       lazyLoading : true,
       lazyLoadingOnTransitionStart : true,
       preventLinksPropagation : true,
       onInit: function(swiper){
	      //Swiper初始化了
	      oneBlockAll();
	      
	    },
       onSlideChangeEnd:function(swiper){
       	if(swiper.activeIndex !== 8) {
       		$('#slideBtn img').css('display','block');
       	} else {
       		$('#slideBtn img').css('display','none'); 
       	}
       	switch (swiper.activeIndex) {
       		
       		case 1 :
       		lazyLoad ($('.two img'));
       		twoAnimate ();
       		break;
       		case 2 :
       		
       		threeAnimate ();
       		break;
       		case 3 :
       		fourAnimate();
       		break;
       		case 4 :
       		fiveAnimate();
       		
       		break;
       		case 5 :
       		sixAnimate();
       		break;
       		case 6 :
       		sevenAnimate();
       		break;
       		case 7 :
       		eightAnimate();
       		break;
       		case 8 :
       		nineAnimate();
       		break;
       	}
       }
    });

   
}

function lazyLoad (obj) {
	var arr = obj;
	var length = arr.length;
	for(var i = 0; i < length; i ++) {
		var dataSrc = $(obj).eq(i).attr('data-src');
		$(obj).eq(i).attr('src',dataSrc);
	}
}

function twoAnimate () {
	$('.two img').eq(1).animate({left:'15%'},1000);
	$('.two img').eq(2).animate({left:'15%'},1000);
}


function threeAnimate () {

//	$('.three img').eq(0).animate({left: '23%',top: '7%'},1000)
}

function fourAnimate() {

	// 给文字添加动态效果
	$('.four .four-word span').eq(0).animate({left:0,right:0,margin:'auto',opacity: 1},1000);
	$('.four .four-word span').eq(1).animate({opacity: 1,transform: 'scale(1)'},1200);
	setTimeout(function (){
		fourAnimatePeople();
	},800)


}


function fourAnimatePeople() {
	$('.four .four-ball').animate({
		transform: 'scale(1)'
	},1000)
	setTimeout(function (){
		$('.four-people .circle1').animate({transform: 'scale(1)',left:'33.5%',top:'18%'},1000);
	},500);
	setTimeout(function (){
		$('.four-people .circle2').animate({left:'69%',top:'30%',transform: 'scale(1)'},1000);
	},800);
	setTimeout(function (){
		$('.four-people .circle3').animate({left:'10%',top:'40%',transform: 'scale(1)'},1000);
	},50);
	setTimeout(function (){
		$('.four-people .circle4').animate({left:'7%',top:'25%',transform: 'scale(1)'},1000);
	},100);
	setTimeout(function (){
		$('.four-people .circle5').animate({left:'65%',top:'62%',transform: 'scale(1)'},1000);
	},1000);
	setTimeout(function (){
		$('.four-people .circle6').animate({left:'70%',top:'47%',transform: 'scale(1)'},1000);
	},700);
	setTimeout(function (){
		$('.four-people .circle7').animate({left:'15%',top:'59%',transform: 'scale(1)'},1000);
	},600);
	setTimeout(function (){
		$('.four-people .circle8').animate({left:'38%',top:'68%',transform: 'scale(1)'},1000);
	},100);
	setTimeout(function () {
		$('.four-people .circle9').animate({left:'80%',top:'8%',transform: 'scale(1)'},1000);
	},200);
	setTimeout(function () {
		$('.four-people .circle10').animate({left:'62%',top:'61%',transform: 'scale(1)'},1000);
	},400);
	setTimeout(function () {
		$('.four-people .circle11').animate({left:'0.6%',top:'3.6%',transform: 'scale(1)'},1000);
	},80);
	setTimeout(function () {
		$('.four-people .circle12').animate({left:'36.5%',top:'15%',transform: 'scale(1)'},1000);
	},350);
	setTimeout(function () {
		$('.four-people .circle13').animate({left:'59%',top:'89%',transform: 'scale(1)'},1000);
	},400);
	setTimeout(function () {
		$('.four-people .circle14').animate({left:'85%',top:'85%',transform: 'scale(1)'},1000);
	},520);
	setTimeout(function () {
		$('.four-people .circle15').animate({left:'10%',top:'89%',transform: 'scale(1)'},1000);
	},200);
	
	// 随机一个颜色
	function randomNum (x,y) {
   	return Math.floor(Math.random() * (y - x + 1) + x);
   }
	function randomColor () {
		var a = randomNum (0,255);
		var b = randomNum (0,255);
		var c = randomNum (0,255);
		return 'rgba('+ a + ',' + b + ',' + c + ',' + '0.7' +')';
	}
	
	//初始化水平插件
	var swiperH = new Swiper('.swiper-container-h', {
			    	    nextButton: '.swiper-button-next',
			        prevButton: '.swiper-button-prev',
	 });
	
	// 对点击的每一个人头像设置点击事件
	
	$('.four-people>div').forEach(function (item,index,arr) {
		
		//因为有很多的图片所以对 前八张进行设置
		if(index < 8) {
			$(item).on('click',function(){	
				//让水平轮播出现
				setTimeout(function () {
					$('.show').css({visibility: 'visible',zIndex:'9999'})
				},500)
				//切换到对应点击的那一页
				swiperH.slideTo($(this).index(),10,false);
				
				// 让对应的索引的轮播页缓慢出现
			    setTimeout(function () {
			    		$('.swiper-container-h .swiper-wrapper .swiper-slide').eq(swiperH.activeIndex).animate({transform: 'scale(1)'},1000);
			    },500)
				
				//并且让其他的页面大小还原,且不能比还没出现的提前出现
				setTimeout(function () {
				      	$('.swiper-container-h .swiper-wrapper .swiper-slide').css({transform: 'scale(1)'})
				      },1000);
				      
				// 小的人头像先消失
				$('.four-word').css('display','none');
				
				// 小的人头像编程小圆点
				$('.four-people div').forEach(function (a,b) {
					if(b<8) {
						var $clone = $(a).clone().appendTo($('.four-people')).addClass('clone');
						$(a).animate({transform: 'scale(0)'})
						var bgColor = randomColor();
						$clone.animate({'background':bgColor,'border-radius': '60%',transform: 'scale(0.7)'},1000)
					}
				})
				
				
               // 关闭按钮的设置,出现对应的事件
               
				$('.closeBtn').on('tap',function () {
					//文字出现
					$('.four-word').css('display','block');
	
                    // 轮播区域消失不见,再让人头像出现
					setTimeout(function (){
						$('.show').css('visibility','hidden')
					},1000);
					$(swiperH.slides[swiperH.activeIndex]).animate({transform: 'scale(0)'},1000);
//			      $('.swiper-container-h .swiper-wrapper .swiper-slide').eq(swiperH.activeIndex).animate({transform: 'scale(0)'},1000);
			      setTimeout(function (){
			      	$('.swiper-container-h .swiper-wrapper .swiper-slide').css({transform: 'scale(0)'});
			      },1000);
			      
			      //头像
			      $('.four-people div').forEach(function (m,n) {
					if(n<8) {
						 $('.four-people .clone').remove();
						 $(m	).animate({transform: 'scale(1)'})
					}
				 })
			      
				});
				
				
			})
		}
	})
	
	
}


function oneBlockAll () {
	setTimeout(function () {
		$('#wrapper-one img').eq(0).animate({left:0,top:0},600);
		$('#wrapper-one img').eq(1).animate({left:0,top:0},600);
		$('#wrapper-one img').eq(2).animate({left:0,top:'42%'},600);
		$('#wrapper-one img').eq(3).animate({left:'28%',top:'62.5%'},600);
		$('#wrapper-one img').eq(4).animate({left:'23.3%',top:'23%'},600);
		$('#wrapper-one img').eq(5).animate({left:'38.8%',top:0},600);
		$('#wrapper-one img').eq(6).animate({left:'53.3%',top:0},600);
		$('#wrapper-one img').eq(7).animate({left:0,top:'37%'},600);
		$('#wrapper-one img').eq(8).animate({left:'26.5%',top:'42.8%'},600);
	},1500)
	
	setTimeout(function () {
		$('#wrapper-one img').eq(9)
		.animate({left:'4.5%',top:'41.5%',transform: 'scale(1)',opacity: 1},300,'',function() {
			$('#wrapper-one img').eq(10).animate({left:'23.7%',top:'39.5%',transform: 'scale(1)',opacity: 1},300,'',function () {
				$('#wrapper-one img').eq(11).animate({left:'39.1%',top:'38%',transform: 'scale(1)',opacity: 1},300,'',function (){
					$('#wrapper-one img').eq(12).animate({left:'53.5%',top:'37%',transform: 'scale(1)',opacity: 1},300,'',function () {
						$('#wrapper-one img').eq(13).animate({left:'28.5%',top:'89.7%',transform: 'scale(1)',opacity: 1},300,'',function () {
							$('.one-word img').animate({transform: 'scale(1)',opacity: 1},300,'',function () {
								$('.one-star-big img').eq(0).animate({left:'8%',top:'68%',transform: 'scale(1)',opacity: 1},300);
								$('.one-star-big img').eq(1).animate({left: '42%',top: '82%',transform: 'scale(1)',opacity: 1},300);
							})
						});
					});
				});
			});
		});
	
	
	
	
	},2000)
	
	
	  
}

function fiveAnimate() {
	$('.five-word').animate({'opacity':1},2000);
	// 第九个图片执行
	$('.five .group9 .glass').animate({
			top:'100%'
		},300);
	setTimeout(function () {
		$('.five .group9 .people').animate({
			width:'68%',
			height:'72%',
			left:'10px',
			top:'5px'
		},200,'',function () {
			$('.five .group9 .box-shadow').css('display','block')
		})
	},300);
	
	// 第十个图片执行
	setTimeout(function () {
		$('.five .group10 .glass').animate({
			top:'100%'
		},300);
		setTimeout(function () {
			$('.five .group10 .people').animate({
				width:'68%',
				height:'72%',
				left:'10px',
				top:'5px'
			},200,'',function () {
				$('.five .group10 .box-shadow').css('display','block')
			})
		},300);
	},300);
	
	// 第六个图片执行
	setTimeout(function () {
		$('.five .group6 .glass').animate({
			top:'100%'
		},300);
		setTimeout(function () {
			$('.five .group6 .people').animate({
				width:'68%',
				height:'72%',
				left:'10px',
				top:'5px'
			},200,'',function () {
				$('.five .group6 .box-shadow').css('display','block')
			})
		},300);
	},600);
	
	// 第八个图片执行
	setTimeout(function () {
		$('.five .group8 .glass').animate({
			top:'100%'
		},300);
		setTimeout(function () {
			$('.five .group8 .people').animate({
				width:'68%',
				height:'72%',
				left:'10px',
				top:'5px'
			},200,'',function () {
				$('.five .group8 .box-shadow').css('display','block')
			})
		},300);
	},900);
	
	// 第七个图片执行
	setTimeout(function () {
		$('.five .group7 .glass').animate({
			top:'100%'
		},300);
		setTimeout(function () {
			$('.five .group7 .people').animate({
				width:'68%',
				height:'72%',
				left:'10px',
				top:'5px'
			},200,'',function () {
				$('.five .group7 .box-shadow').css('display','block')
			})
		},300);
	},1200);
	
	// 第三个图片执行
	setTimeout(function () {
		$('.five .group3 .glass').animate({
			top:'100%'
		},300);
		setTimeout(function () {
			$('.five .group3 .people').animate({
				width:'68%',
				height:'72%',
				left:'10px',
				top:'5px'
			},200,'',function () {
				$('.five .group3 .box-shadow').css('display','block')
			})
		},300);
	},1500);
	
	// 第四个图片执行
	setTimeout(function () {
		$('.five .group4 .glass').animate({
			top:'100%'
		},300);
		setTimeout(function () {
			$('.five .group4 .people').animate({
				width:'68%',
				height:'72%',
				left:'10px',
				top:'5px'
			},200,'',function () {
				$('.five .group4 .box-shadow').css('display','block')
			})
		},300);
	},1800);
	
	// 第五个图片执行
	setTimeout(function () {
		$('.five .group5 .glass').animate({
			top:'100%'
		},300);
		setTimeout(function () {
			$('.five .group5 .people').animate({
				width:'68%',
				height:'72%',
				left:'10px',
				top:'5px'
			},200,'',function () {
				$('.five .group5 .box-shadow').css('display','block')
			})
		},300);
	},2100);
	
	// 第二个图片执行
	setTimeout(function () {
		$('.five .group2 .glass').animate({
			top:'100%'
		},300);
		setTimeout(function () {
			$('.five .group2 .people').animate({
				width:'68%',
				height:'72%',
				left:'10px',
				top:'5px'
			},200,'',function () {
				$('.five .group2 .box-shadow').css('display','block')
			})
		},300);
	},2400);
	
	// 第一个图片执行
	setTimeout(function () {
		$('.five .group1 .glass').animate({
			top:'100%'
		},300);
		setTimeout(function () {
			$('.five .group1 .people').animate({
				width:'68%',
				height:'72%',
				left:'10px',
				top:'5px'
			},200,'',function () {
				$('.five .group1 .box-shadow').css('display','block')
			})
		},300);
	},2700);
	setTimeout(function () {
		$('.five .five-tipClick').css('display','block')
	},2700)
	
	// 每一个图片的点击事件的绑定
	$('.five-image .group').forEach(function (item,index,arr) {
		
		
		$(item).on('click',function () {
			if($('.five .five-tipClick')) {
				$('.five .five-tipClick').remove()
			}
			var left = $(this).offset().left,
			    top = $(this).offset().top,
			    width = $(this).width(),
			    height = $(this).height();
			var obj = {
				left: left,
				top: top,
				width: width,
				height: height,
			};
			$('.list .every-one').eq($(this).index()).animate({
				transform: 'scale(1) rotateZ(0deg)',left: '7.5%',top: '12.5%',width: '85%',height: '75%'
			},1500,'',function () {
				var $that = $(this);
				$(this).find('.cancelBtn').on('tap',function () {
					$that.animate({
						transform: 'scale(0) rotateZ(15deg)',left: obj.left + 'px',top: obj.top + 'px',width: obj.width + 'px',height: obj.height + 'px'
					})
				})
			})
		})
	});
	
	$('.five .five-tipClick').one('tap',function () {
		$(this).remove()
	});

}


function sixAnimate() {
	
	//从左边出来的图片
	$('.six .six-flag img').eq(1).animate({
		left:'8%',top:'5%',width:'36%',opacity:1,transform: 'scale(1)'
	},1000);
	$('.six .six-flag img').eq(3).animate({
		left:'56%',top:'5%',width:'39.2%',opacity:1,transform: 'scale(1)'
	},1000);
	$('.six .six-flag img').eq(4).animate({
		left:'96.8%',top:'6%',width:'9%',opacity:1,transform: 'scale(1)'
	},1100);
	$('.six .six-flag img').eq(6).animate({
		left:'5%',top:'36%',width:'8.2%',opacity:1,transform: 'scale(1)'
	},1500,'',function() {
		var $that = $(this);
		var m = -1;
		var n = -1.3;
		var l = $that.offset().left;
		var maxleft = l + 55;
		var minleft = l - 15;
		var t = $that.offset().top;
		var maxtop = t + 35;
		var mintop = t - 35;
		setInterval(function () {
			l += m;
			t += n;
			if(l >= maxleft) {
				m = -1;
			};
			if(l <= minleft) {
				m = 1;
			}
			if(t >= maxtop) {
				n = -1.3;
			}
			if(t <= mintop) {
				n = 1.3
			}
			$that.css({'left':l,'top':t });
		},100)
	});
	
	$('.six .six-flag img').eq(9).animate({
		left:'93%',top:'73%',width:'4%',opacity:1,transform: 'scale(1)'
	},1500,'',function () {
		var $that = $(this);
		var m = -1;
		var n = -1.3;
		var l = $that.offset().left;
		var maxleft = l + 35;
		var minleft = l - 35;
		var t = $that.offset().top;
		var maxtop = t + 35;
		var mintop = t - 35;
		setInterval(function () {
			l += m;
			t += n;
			if(l >= maxleft) {
				m = -1;
			};
			if(l <= minleft) {
				m = 1;
			}
			if(t >= maxtop) {
				n = -1.3;
			}
			if(t <= mintop) {
				n = 1.3
			}
			$that.css({'left':l,'top':t });
		},100)
	});
	
	//字体慢慢出现
	$('.six .six-flag img').eq(7).animate({
		opacity:1
	},3000);
	$('.six .six-flag img').eq(8).animate({
		opacity:1
	},1500);

	
	//从右边出来的图片
	$('.six .six-flag img').eq(0).animate({
		left:'-4%',top:'9%',width:'9.6%',opacity:1,transform: 'scale(1)'
	},1000);
	
	$('.six .six-flag img').eq(2).animate({
		left:'31%',top:'5%',width:'36%',opacity:1,transform: 'scale(1)'
	},1000);
	$('.six .six-flag img').eq(5).animate({
		left:'91.2%',top:'27%',width:'8%',opacity:1,transform: 'scale(1)'
	},1500,'',function () {
		var $that = $(this);
		var m = 1;
		var n = 1.3;
		var l = $that.offset().left;
		var t = $that.offset().top;
		setInterval(function () {
			l += m;
			t += n;
			if(l >= 375) {
				m = -1;
			};
			if(l <= 280) {
				m = 1;
			}
			if(t >= 203) {
				n = -1.3;
			}
			if(t <= 153) {
				n = 1.3
			}
			$that.css({'left':l,'top':t });
		},100)
	});
	
	// 让人头像一个一个显示出来
	setTimeout(function () {
		$('.six .six-people img').eq(3).animate({opacity:1},400)	
	},100);
	setTimeout(function () {
		$('.six .six-people img').eq(2).animate({opacity:1},400)	
	},500);
	setTimeout(function () {
		$('.six .six-people img').eq(5).animate({opacity:1},400)	
	},1000);
	setTimeout(function () {
		$('.six .six-people img').eq(1).animate({opacity:1},400)	
	},1500);
	setTimeout(function () {
		$('.six .six-people img').eq(0).animate({opacity:1},400)	
	},2000);
	setTimeout(function () {
		$('.six .six-people img').eq(4).animate({opacity:1},400)	
	},2500);
}

function sevenAnimate() {
	$('.seven .seven-word img').eq(0).animate({opacity:1},1000);
	setTimeout(function () {
		$('.seven .seven-word img').eq(1).animate({opacity:1},1000)
	},1000);
	setTimeout(function () {
		var height = $(window).height() * 0.7 + 'px';
//		console.log('111111111' + $(window).height())
//		$('.seven .snake1').animate({height:height,top:$(window).height() * 0.2 + 'px'},1500);

		$('.seven .snake1 .seven-shadow').animate({top:'150%'},2000,'',function () {
			$('.seven .snake1 .seven-shadow').css('display','none')
		});
	},1500);
	setTimeout(function() {
		$('.seven .snake2').animate({left: '30%'},800)
	},1700);
	setTimeout(function() {
		$('.seven .snake3').animate({left: '3%'},800)
	},2200);
	setTimeout(function() {
		$('.seven .snake4').animate({left: '32%'},800)
	},2500);
	
}

function eightAnimate() {
	
	// 对 个个色块进行动画的设置一定的延时效果
	setTimeout(function () {
		$('.eight .eight-flag img').eq(0).animate({top: '6%',left: '-1.5%'},500);
	},500)
	$('.eight .eight-flag img').eq(3).animate({top: '4%',left: '50%'},1000);
	$('.eight .eight-flag img').eq(1).animate({top: '5%',left: '6%'},1000);
	$('.eight .eight-flag img').eq(2).animate({top: '5%',left: '23%'},1000);
	setTimeout(function () {
		$('.eight .eight-flag img').eq(4).animate({top: '-3%',left: '88%'},500);
	},500);
	setTimeout(function () {
		$('.eight .eight-flag img').eq(5).animate({top: '14%',left: '77%'},500);
	},500);
	setTimeout(function () {
		$('.eight .eight-word img').eq(1).animate({opacity: 1},800)
	},1000);
	setTimeout(function () {
		$('.eight .eight-word img').eq(0).animate({left: '0',opacity: 1},1000)
	},1300);
	setTimeout(function () {
		$('.eight .eight-word img').eq(2).animate({opacity: 1},1000);
	},1800);
	
	// 对公司介绍进行动画设置
	setTimeout(function () {
		$('.eight .eight-company img').eq(0).animate({left: '5%',top: '2%'},100);
	},2300);
	setTimeout(function () {
		$('.eight .eight-company img').eq(1).animate({left: '37.5%',top: '2%'},100);
	},2800);
	setTimeout(function () {
		$('.eight .eight-company img').eq(2).animate({left: '70%',top: '2%'},100);
	},3300);
}

function nineAnimate() {
//	$('#slideBtn img').css('display','none')
}
