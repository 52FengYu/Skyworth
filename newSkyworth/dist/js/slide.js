//遵从AMD规范去编写代码
define(["jquery"], function($){
	function slide(){
		var aBtns = $(".banner_wrap").find(".banner_bg").find(".banner_list").find("span");//控制图片的小点
		var oUl = $(".banner_wrap").find("ul");//图片外面的盒子
		var aLis = oUl.find("li");//盒子里面的图片
		var oLeft = $(".banner_wrap").find(".banner_left").find("img");
		var oRight = $(".banner_wrap").find(".banner_right").find("img");

		var iNow = 0; //代表当前显示的图片的下标
		var timer = null; //设置定时器

		aBtns.click(function(){
			iNow = $(this).index();
			tabL();
		})
		//启动一个定时器
		timer = setInterval(function(){
			iNow++;
			tabL();
		}, 4000);


		//添加鼠标移入移出
		$(".banner_wrap").mouseenter(function(){
			clearInterval(timer);
		})

		$(".banner_wrap").mouseleave(function(){
			timer = setInterval(function(){
				iNow++;
				tabL();
			}, 2000);
		})


		function tabL(){
			aBtns.attr("class", "").eq(iNow).attr("class", "spcss");
			//判断是否是下标为5的图片
			if(iNow == aBtns.size()){
				aBtns.eq(0).attr("class", "spcss");
			}

			oUl.animate({left: -1920 * iNow}, 2000, function(){
				//判断是否是最后一张图片
				if(iNow == aBtns.size()){
					iNow = 0;
					oUl.css("left", 0);
				}
			})
		}
				var banner_img_len = $('.banner_img li').length;
				var banner_img_img_len = $('.banner_img img').width();
				//var banner_img_img_count_len = parseInt(banner_img_len * banner_img_img_len);

				//点击进行下一张
				$(".banner_right").click(function(){
					if(!$(".banner_img li:first").is(":animated")){
						$(".banner_img li:first").animate({'marginLeft':'-=1920px'},2000,function(){
							$(".banner_img li:first").css('marginLeft',0);
							$('.banner_img').append($(".banner_img li:first"));
						});
				clearInterval(timer);tabL();iNow++;
					}
				});
				//点击进行上一张
				$(".banner_left").click(function(){
					if(!$(".banner_img li:first").is(":animated")){
						$('.banner_img').prepend($(".banner_img li:last"));
						$('.banner_img li:first').css({'marginLeft':'-1920px'});
						$(".banner_img li:first").animate({'marginLeft':'+=1920px'},2000,function(){
							$(".banner_img li:first").css('marginLeft','0px');
						});
						clearInterval(timer);tabL();iNow--;
					}
				});
			}
	return {
		slide: slide
	}
})