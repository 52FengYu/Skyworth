define(["jquery","jquery-cookie"],function($){
	function imp(){
		$.ajax({
			url:"data/home.json",
			success:function(arr){
				var i = 8;
				var child = arr[i].child;
				for(var j = 0; j < child.length - 30; j++){
					$(`
						<div class="inside_list">
                            <a href="detail.html" target="_blank">
							<div class="inside_product">
								<img src="${child[j].img}">
							</div>
							<div class="product_font">
								<div class="product_top">
									
									<div class="top_left">¥${child[j].price}</div>
								</div>
								<div class="product_mid">
								   <h3><a href="#" target="_blank">${child[j].title}</a></h3>
											<p>${child[j].p}</p>
								</div>
								<div class="product_bottom">
									<div>
										<span class="store_name">${child[j].work}</span>
										<span class="store_service a_active"><a href="#"><i class="iconfont icon-kefu"></i></a></span>
									</div>
									<div class="bottom_right">销量：${child[j].em}</div>
									<div class="bottom_left"><a href="javascript:void(0)" id="${child[j].id}"><i class="iconfont icon-icon1"></i>购物车</a></div>
								</div>
							</div>
                            </a>
							<div class="hot">
								<img src="${child[j].add}">
							</div>
						</div>

						`).appendTo("#content .flex_cont1")
				}
				for(var k = 16; k < child.length - 14; k++){
					$(`
						<div class="inside_list">
                            <a href="#" target="_blank">
							<div class="inside_product">
								<img src="${child[j].img}">
							</div>
							<div class="product_font">
								<div class="product_top">
									
									<div class="top_left">¥${child[j].price}</div>
								</div>
								<div class="product_mid">
								   <h3><a href="#" target="_blank">${child[j].title}</a></h3>
											<p>${child[j].p}</p>
								</div>
								<div class="product_bottom">
									<div>
										<span class="store_name">${child[j].work}</span>
										<span class="store_service a_active"><a href="#"><i class="iconfont icon-kefu"></i></a></span>
									</div>
									<div class="bottom_right">销量：${child[j].em}</div>
									<div class="bottom_left"><a href="javascript:void(0)" id="${child[j].id}"><i class="iconfont icon-icon1"></i>购物车</a></div>
								</div>
							</div>
                            </a>
							<div class="hot">
								<img src="${child[j].add}">
							</div>
						</div>

						`).appendTo("#content .flex_cont2")
				}
				for(var p = 32; p < child.length; p++){
					$(`
						<div class="inside_list">
                          
							<div class="inside_product">
								<img src="${child[j].img}">
							</div>
							<div class="product_font">
								<div class="product_top">
									
									<div class="top_left">¥${child[j].price}</div>
								</div>
								<div class="product_mid">
								   <h3><a href="#" target="_blank">${child[j].title}</a></h3>
											<p>${child[j].p}</p>
								</div>
								<div class="product_bottom">
									<div>
										<span class="store_name">${child[j].work}</span>
										<span class="store_service a_active"><a href="#"><i class="iconfont icon-kefu"></i></a></span>
									</div>
									<div class="bottom_right">销量：${child[j].em}</div>
									<div class="bottom_left"><a href="void(0)" id="${child[j].id}"><i class="iconfont icon-icon1"></i>购物车</a></div>

							</div>
                           
							<div class="hot">
								<img src="${child[j].add}">
							</div>
						</div>

						`).appendTo("#content .flex_cont3")
				}
			},
			error:function(msg){
				alert("请求错误" + msg)
			}
		})
//商品列表页点击事件
		sc_num();
		sc_msg();
		$(".flex_double").on("click" , ".bottom_left a" , function(){

			var id = this.id;
			var first = $.cookie("goods") == null ? true : false;
			if(first){
				$.cookie("goods",`[{"id":${id},"num":1}]`,{expires:7})
			}else{
				var cookieStr = $.cookie("goods");
				var cookieArr = JSON.parse(cookieStr);
				var same = false;;
				for(var i = 0; i < cookieArr.length; i++){
					if(id == cookieArr[i].id){
						cookieArr[i].num ++;
						same = true;
						break;
					}
				}
				if(!same){
					var obj = {id : id, num : 1};
					cookieArr.push(obj);
				}
				$.cookie("goods", JSON.stringify(cookieArr),{
					expires: 7,
				})
			}
			sc_msg();
			sc_num();
		})
		//购物车栏目函数
		function sc_msg(){
			$(".shopcart_details aside").html("");
			$.ajax({
				url:"data/home.json",
				success:function(arr){
					var newArr = [];
					if($.cookie("goods")){
						var cookieArr = JSON.parse($.cookie("goods"));
							var i = 8;
							var child = arr[i].child;
							for(var j = 0; j < child.length; j++){
								for(var k = 0 ;k < cookieArr.length; k++ ){
									if(child[j].id == cookieArr[k].id){
										child[j].num = cookieArr[k].num;
										newArr.push(child[j]);
									}
								}
							}
						}
					for(var i = 0; i< newArr.length; i++){
						$(`
							<dl id="${newArr[i].id} shopcar">
                                <dt>
                                    <a target="_blank" href="detail.html">
                                            <img src="${newArr[i].img}"></img></a>
                                </dt>
                              	<dd class="shopcart_title"> 
                              		<a target="_blank" href="#">${newArr[i].title}</a>
                              	</dd>	
                              	<span class="pro_rabi" id="${newArr[i].id}"><i class="iconfont icon-lajixiang"></i></span>
                                <dd class="shopcart_title">${newArr[i].p}</dd>
                                <dd class="shopcart_price">¥${newArr[i].price}<span class="font-count">×${newArr[i].num}</span></dd>
                            </dl>
							`).appendTo(".shopcart_details aside");
					}
				},
				error:function(msg){
					alert(msg);
				}
			})
		}
		$("aside").on("click","dl .pro_rabi",function(){
			var id = this.id;
			$(this).closest("dl").remove();
			//删除cookie中的数据
			var cookieArr = JSON.parse($.cookie("goods"));
			for(var i = 0; i < cookieArr.length; i++){
				if(cookieArr[i].id == id){
					cookieArr.splice(i, 1);
					break;
				}
			}
			if(!cookieArr.length){
				$.cookie("goods", null);
			}else{
				$.cookie("goods", JSON.stringify(cookieArr), {
					expires: 7
				})
			}
			sc_num();
		})
		function sc_num(){
			var cookieStr = $.cookie("goods");
			if(cookieStr){
				var cookieArr = JSON.parse(cookieStr);
				var sum = 0;
				for(var i = 0; i < cookieArr.length; i++){
					sum += cookieArr[i].num;
				}
				$(".font_number").html(sum);
				$(".shopcart_details .shopcart_bottom span:first-child b").html(sum);
			}else{
				$(".font_number").html(0);
				$(".shopcart_details .shopcart_bottom span:first-child b").html(0);
			}
		}
	}
	return{
		imp: imp
	}
})	