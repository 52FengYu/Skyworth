$(function(){
			var little = $(".inside_container").find(".product_wrap").find(".product_left")
			    .find(".bg_left").find("div").eq(1).find("b");
			var mark = $(".inside_container").find(".product_wrap").find(".product_left")
			    .find(".bg_left").find("div").eq(1).find("span");
			var big = $(".inside_container").find(".product_wrap").find(".product_left")
			.find(".bg_left").find("#showbox").find("p").find("img");

			$(little).mouseenter(function(){
				$(mark).show();
				$(big).show();
			}).mouseleave(function(){
				$(mark).hide();
				$(big).hide()
			}).mousemove(function(ev){
				var l = ev.pageX - $(little).offset().left - 125;
				var t = ev.pageY - $(little).offset().top - 100;
				//限制出界
				if(l <= 0){
					l = 0;
				}
				if(l >= 250){
					l = 250;
				}
				if(t <= 0){
					t = 0;
				}
				if(t >= 250){
					t = 250
				}
				//改变遮罩层的位置
				$(mark).css({
					left: l,
					top: t
				})
				$(big).css({
					left: -l * 2,
					top: -t * 2,
				})
			})
		})
$(function(){
	$("#top_cart").on("mouseenter",function(){
		$(".shopcart_details").show();
	})
	$("#top_cart").on("mouseleave",function(){
		$(".shopcart_details").hide();
	})
})
//加减
$(function(){
	$(".reduce").on("click",function(){
		$("#InpQuantity").attr("value","1")
	})
	$(".add").on("click",function(){
		$("#InpQuantity").attr("value","2")
	})
})







/*购物车*/
//计算购物数量的	
$(function(){

	function shopcart_bottom(){
		var cookieStr = $.cookie("goods");
		if(cookieStr){
			var cookieArr = JSON.parse(cookieStr);
			var sum = 0;

			for(var i = 0; i < cookieArr.length; i++){
				sum += cookieArr[i].num;
			}
			$(".shopcart_bottom span").html(sum);
		}else{
			//如果没有cookie，将当前的商品数量设置成0
			$(".shopcart_bottom span").html(0);
		}
	}
	function ballMove(oBtn){
		//1、显示小球在点击按钮的位置
		$("#ball").css({
			display: "block",
			left: $(oBtn).offset().left,
			top: $(oBtn).offset().top
		})

		//计算一下偏移位置
		var X = $(".shopcart_details .shopcart_bottom").offset().left - $("#ball").offset().left;
		var Y = $(".shopcart_details .shopcart_bottom").offset().top - $("#ball").offset().top;

		//2、创建抛物线对象
		var bool = new Parabola({
			el: "#ball",
			offset: [X, Y],
			duration: 500,
			curvature: 0.0005,
			callback: function(){
				$("#ball").hide();
			}
		})

		//3、动起来
		bool.start();
	}
	$(".product_right").on("click", ".main_service", function(){
			//当前点击按钮所在商品的id
			var id = this.id;
			//加入购物车 cookie实现
			//1、判断是否是第一次添加
			
			var first = $.cookie("goods") == null ? true : false;
			if(first){
				$.cookie("goods", `[{"id":${id},"num":1}]`, {
					expires: 7
				})
			}else{
				var cookieStr = $.cookie("goods");
				var cookieArr = JSON.parse(cookieStr);
				var same = false; //假设没有相同的商品
				for(var i = 0; i < cookieArr.length; i++){
					if(id == cookieArr[i].id){
						//数量+1
						cookieArr[i].num++;
						same = true;
						break;
					}
				}


				//如果没有相同的
				if(!same){
					var obj = {id: id, num: 1};
					cookieArr.push(obj);
				}

				//存储到cookie中
				$.cookie("goods", JSON.stringify(cookieArr), {
					expires: 7
				});
			}
			//点击添加商品以后，更新右侧购物车的数据
			sc_msg();
			sc_num();

			//点击加入购物车按钮，进行抛物线运动，我们必须知道点击的按钮是谁
			ballMove(this);
			
		})

		$(".shopcart_details").mouseenter(function(ev){
			$(this).stop().animate({
				right: 0
			}, 500)
		});
		$(".shopcart_details").mouseleave(function(ev){
			$(this).stop().animate({
				right: -270
			}, 500)
		});

		/*
			只存储了当前商品的id和数量
			{id:id, num:1}
			1、通过ajax下载所有商品的数据
			2、cookie，判断哪些商品加载在cookie中
			3、最后将加载在cookie中的商品数据，添加在右侧购物车。
		 */
		function sc_msg(){

			//清除上一次购物车的数据
			$(".shopcart_details ul").html("");

			$.ajax({
				url: "data/detail.json",
				success: function(arr){
					var newArr = []; //存放加载在购物车的商品数据的
					if($.cookie("goods")){
						var cookieArr = JSON.parse($.cookie("goods"));
						for(var i = 0; i < arr.length; i++){
							for(var j = 0; j < cookieArr.length; j++){
								if(arr[i].id == cookieArr[j].id){

									arr[i].num = cookieArr[j].num;
									newArr.push(arr[i]);
								}
							}
						}
					}

					//newArr 存储着当前商品的数量和加入购物车商品的信息
					for(var i = 0; i < newArr.length; i++){
						$(`
							<dl id="${child[j].id}">
                                <dt>
                                    <a target="_blank" href="#">
                                            <img src=${child[j].img}></a></dt>
                              	   <dd class="shopcart_title"> 
                              	   		<a target="_blank" href="">${child[j].title}</a>
                              	   		<span class="pro_rabi" data-id="14675129" id="top_gwc_14675129"><i class="iconfont icon-lajixiang"></i></span>
                              	   </dd>
                                   <dd class="shopcart_title">${child[j].p}</dd>
                                <dd class="shopcart_price">¥${child[j].price}<span class="font-count">×1</span></dd>
                            </dl>
							`).appendTo($(""));
					}
				},
				error: function(msg){
					alert(msg);
				}
			})
		}




})		
