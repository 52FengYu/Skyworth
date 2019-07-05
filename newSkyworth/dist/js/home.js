define(["jquery", "jquery-cookie","ajax"],function($){
	function ajax(){
		$.ajax({
		url: "data/home.json",
		success: function(arr){
			//通过循环，将数据添加到我们的页面上
			for(var i = 0; i < 8; i ++){
				var ul = $("<ul></ul>");
				var li =$("<li></li>");
				$(`		
					
						<a href="#"><i class="icon_float iconfont icon-gengduojiantou"></i>${arr[i].span}</a>
	    			
					`)
				.appendTo(li);
				var child = arr[i].child;
				for(var j = 0; j < child.length ; j ++){
					$(`
						<li><a href="#" target="_blank" >${child[j].title}</a></li>
						`).appendTo(ul);

				}
					ul.appendTo(li);
					li.appendTo(".nav_cont");
			}
			//插入电视的数据
			var i = 8;
			var child = arr[i].child;
			for(var j = 0; j < child.length-3; j++){
				$(`
					<div class="list_cont list_cont_two">
                            <div class="list_pro">
                                <a href="#">
                                	<img src="${child[j].img}">
                                </a>
                            </div>
                            <div class="list_bottom">
                               	    <h5><a href="#">${child[j].h5}</a></h5>
									<p>${child[j].title}</p>
                                	<div class="price">${child[j].price}</div>
                            </div>
                            <div class="hot"><i></i></div>
                            <div class="list_hover">
                                <span class="hover_price">${child[j].price}</span>
                                <span class="shop_cart ripple" id="${child[j].id}"><a href="#">${child[j].p}</a></span>
                            </div>

					`).appendTo("#fff");
			}
			for(var j = 1; j < child.length; j++){
				$(`
					<div class="list_cont list_cont_three">
                            <div class="list_pro">
                                <a href="#">
                                	<img src="${child[j].img}">
                                </a>
                            </div>
                            <div class="list_bottom">
                               	    <h5><a href="#">${child[j].h5}</a></h5>
									<p>${child[j].title}</p>
                                	<div class="price">${child[j].price}</div>
                            </div>
                            <div class="hot"><i></i></div>
                            <div class="list_hover">
                                <span class="hover_price">${child[j].price}</span>
                                <span class="shop_cart ripple" id="${child[j].id}"><a href="#">${child[j].p}</a></span>
                            </div>

					`).appendTo("#fff");
			}
			//导入投影仪的数据
			var i = 9;
			var child = arr[i].child;
			for(var j = 0; j < child.length-3; j++){
				$(`
					<div class="list_cont list_cont_two">
                            <div class="list_pro">
                                <a href="#">
                                	<img src="${child[j].img}">
                                </a>
                            </div>
                            <div class="list_bottom">
                               	    <h5><a href="#">${child[j].h5}</a></h5>
									<p>${child[j].title}</p>
                                	<div class="price">${child[j].price}</div>
                            </div>
                            <div class="hot"><i></i></div>
                            <div class="list_hover">
                                <span class="hover_price">${child[j].price}</span>
                                <span class="shop_cart ripple" id="${child[j].id}"><a href="#">${child[j].p}</a></span>
                            </div>

					`).appendTo("#sss");
			}
			for(var j = 1; j < child.length; j++){
				$(`
					<div class="list_cont list_cont_three">
                            <div class="list_pro">
                                <a href="#">
                                	<img src="${child[j].img}">
                                </a>
                            </div>
                            <div class="list_bottom">
                               	    <h5><a href="#">${child[j].h5}</a></h5>
									<p>${child[j].title}</p>
                                	<div class="price">${child[j].price}</div>
                            </div>
                            <div class="hot"><i></i></div>
                            <div class="list_hover">
                                <span class="hover_price">${child[j].price}</span>
                                <span class="shop_cart ripple" id="${child[j].id}"><a href="#">${child[j].p}</a></span>
                            </div>

					`).appendTo("#sss");
			}
			//导入冰箱的数据
			var i = 10;
			var child = arr[i].child;
			for(var j = 0; j < child.length-1; j++){
				$(`
					<div class="list_cont list_cont_two">
                            <div class="list_pro">
                                <a href="#">
                                	<img src="${child[j].img}">
                                </a>
                            </div>
                            <div class="list_bottom">
                               	    <h5><a href="#">${child[j].h5}</a></h5>
									<p>${child[j].title}</p>
                                	<div class="price">${child[j].price}</div>
                            </div>
                            <div class="hot"><i></i></div>
                            <div class="list_hover">
                                <span class="hover_price">${child[j].price}</span>
                                <span class="shop_cart ripple" id="${child[j].id}"><a href="#">${child[j].p}</a></span>
                            </div>

					`).appendTo("#aaa");
			}
			for(var j = 1; j < child.length; j++){
				$(`
					<div class="list_cont list_cont_three">
                            <div class="list_pro">
                                <a href="#">
                                	<img src="${child[j].img}">
                                </a>
                            </div>
                            <div class="list_bottom">
                               	    <h5><a href="#">${child[j].h5}</a></h5>
									<p>${child[j].title}</p>
                                	<div class="price">${child[j].price}</div>
                            </div>
                            <div class="hot"><i></i></div>
                            <div class="list_hover">
                                <span class="hover_price">${child[j].price}</span>
                                <span class="shop_cart ripple" id="${child[j].id}"><a href="#">${child[j].p}</a></span>
                            </div>

					`).appendTo("#aaa");
			}
			//导入洗衣机的数据
			var i = 11;
			var child = arr[i].child;
			for(var j = 0; j < child.length-3; j++){
				$(`
					<div class="list_cont list_cont_two">
                            <div class="list_pro">
                                <a href="#">
                                	<img src="${child[j].img}">
                                </a>
                            </div>
                            <div class="list_bottom">
                               	    <h5><a href="#">${child[j].h5}</a></h5>
									<p>${child[j].title}</p>
                                	<div class="price">${child[j].price}</div>
                            </div>
                            <div class="hot"><i></i></div>
                            <div class="list_hover">
                                <span class="hover_price">${child[j].price}</span>
                                <span class="shop_cart ripple" id="${child[j].id}"><a href="#">${child[j].p}</a></span>
                            </div>

					`).appendTo("#bbb");
			}
			for(var j = 1; j < child.length; j++){
				$(`
					<div class="list_cont list_cont_three">
                            <div class="list_pro">
                                <a href="#">
                                	<img src="${child[j].img}">
                                </a>
                            </div>
                            <div class="list_bottom">
                               	    <h5><a href="#">${child[j].h5}</a></h5>
									<p>${child[j].title}</p>
                                	<div class="price">${child[j].price}</div>
                            </div>
                            <div class="hot"><i></i></div>
                            <div class="list_hover">
                                <span class="hover_price">${child[j].price}</span>
                                <span class="shop_cart ripple" id="${child[j].id}"><a href="#">${child[j].p}</a></span>
                            </div>

					`).appendTo("#bbb");
			}
			//导入音响的数据
			var i = 12;
			var child = arr[i].child;
			for(var j = 0; j < child.length-3; j++){
				$(`
					<div class="list_cont list_cont_two">
                            <div class="list_pro">
                                <a href="#">
                                	<img src="${child[j].img}">
                                </a>
                            </div>
                            <div class="list_bottom">
                               	    <h5><a href="#">${child[j].h5}</a></h5>
									<p>${child[j].title}</p>
                                	<div class="price">${child[j].price}</div>
                            </div>
                            <div class="hot"><i></i></div>
                            <div class="list_hover">
                                <span class="hover_price">${child[j].price}</span>
                                <span class="shop_cart ripple" id="${child[j].id}"><a href="#">${child[j].p}</a></span>
                            </div>

					`).appendTo("#ddd");
			}
			for(var j = 1; j < child.length; j++){
				$(`
					<div class="list_cont list_cont_three">
                            <div class="list_pro">
                                <a href="#">
                                	<img src="${child[j].img}">
                                </a>
                            </div>
                            <div class="list_bottom">
                               	    <h5><a href="#">${child[j].h5}</a></h5>
									<p>${child[j].title}</p>
                                	<div class="price">${child[j].price}</div>
                            </div>
                            <div class="hot"><i></i></div>
                            <div class="list_hover">
                                <span class="hover_price">${child[j].price}</span>
                                <span class="shop_cart ripple" id="${child[j].id}"><a href="#">${child[j].p}</a></span>
                            </div>

					`).appendTo("#ddd");
			}
		},
		error: function(msg){
			alert("请求错误：" + msg);
				}
			})
		}
	
																										
			
	
		return{
			ajax:ajax,
			

		}
})