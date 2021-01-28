$(function(){
			sc_num();
			sc_msg();
			sc_num2();
		//购物车栏目函数
		function sc_msg(){
			$(".cartBox .order_content").html("");
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
						var cookieStr = $.cookie("goods");
						if(!cookieStr){
                        $(".item-subtotal").html(0);
                    }else{
                        var price = 0 ;
                      
                        var newArr1 = [];

                        for(var i = 0; i < newArr.length; i++){
                          
                            newArr1.push(price);
                           
                        }
                       
	                      }
                    
					for(var i = 0; i< newArr.length; i++){
						var oPrice1 = newArr[i].price;
						var oNum1 = newArr[i].num;
						var oSum1 = oPrice1*oNum1;
						$(`
							<ul class="order_lists" ulid="${newArr[i].id}" style="height: 120px;">
                                <li class="list_chk">
                                    <div class="checkboxFive">
                                        <input type="checkbox" value="${newArr[i].id}" id="checkboxFive${newArr[i].id}" class="checkbox">
                                        <label for="checkboxFive${newArr[i].id}"></label>
                                    </div>
                                </li>
                                <li class="list_con">
                                    <div class="list_img">
                                        <a target="_blank" href="void(0)">
                                            <img src="${newArr[i].img}"></a>
                                    </div>
                                    <div class="list_text">
                                        <a target="_blank" href="#">${newArr[i].title}</a>
                                        <p class="p_padding">${newArr[i].p}</p>
                                        <p class="p_padding">配送公司：创维-RGB电子有限公司</p>
                                    </div>
                                </li>
                                <li class="list_price">
                                    <p class="price">${newArr[i].price}</p>
                                    <p class="text_de">${newArr[i].price}</p>
                                </li>
                                <li class="list_amount">
                                    <div class="amount_box" id="${newArr[i].id}">
                                        <a class="reduce" style="cursor: pointer;href="javascript:void(0)">-</a>
                                        <span id="${newArr[i].id}" class="sum" style="position:relative;top:5px">${newArr[i].num}</span>
                                        <a class="plus" style="cursor: pointer;" href="javascript:void(0)">+</a>
                                    </div>
                                </li>
                                <li class="list_sum">
                                    <p class="sum_price">${oSum1}</p>
                                </li>
                                <li class="list_op">
                                    <p class="del" id="${newArr[i].id}">
                                    	<a href="javascript:void(0)" class="delBtn" id="${newArr[i].id}" val="${newArr[i].id}">移除商品</a>
                                    </p>
                                </li>
                            </ul>
							`).appendTo(".cartBox .order_content");
					}
				},
				error:function(msg){
					alert(msg);
				}
			})
		}
		//删除商品
		$(".order_content").on("click","ul .list_op p a",function(){
			var id = this.id;
			$(this).closest("ul").remove();
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
			sc_num2();
			sc_msg();
		})
		//通过事件委托给，加和减添加点击事件
		$(".order_content").on("click", "ul .list_amount .amount_box a", function(){
			//商品id
			var id = $(this).closest('div').attr("id");
			var cookieArr = JSON.parse($.cookie("goods"));

			for(var i = 0; i < cookieArr.length; i++){
				if(cookieArr[i].id == id){
					//找到当前要修改的商品
					//判断是要+还是-
					if(this.innerHTML == "+"){ //数量+1
						cookieArr[i].num ++;
					}else{ //数量-1
						if(cookieArr[i].num == 1){
							alert("数量已经为1，没办法继续减");
						}else{
							cookieArr[i].num --;
						}
					}
					//在页面显示当前商品的数量
					$(this).siblings("span").html(`${cookieArr[i].num}`);
					break;
				}
			}
			//将数据存回cookie
			$.cookie("goods", JSON.stringify(cookieArr), {
				expires: 7
			})
			
			sc_num();
			sc_num2();
			//sc_msg();
			$(this).parent().parent().next().find("p").html(`${oSum1}`);
		})
	})
		function sc_num(){
			var cookieStr = $.cookie("goods");
			if(cookieStr){
				var cookieArr = JSON.parse(cookieStr);
				var sum = 0;
				//var ttt = 0;
				for(var i = 0; i < cookieArr.length; i++){
					sum += cookieArr[i].num;
					//ttt += cookieArr[i].num * 3
				}
				$(".piece_num").html(sum);
				$(".shopcart_bottom:first-child span b").html(sum);
				$(".font_number").html(sum);

			}else{
				$(".piece_num").html(0);
				$(".font_number").html(0);
				$(".shopcart_bottom:first-child span b").html(0);
			}
		}
	//计算总价
           function sc_num2(){
           
            var cookieStr = $.cookie("goods");
            var cookieArr = JSON.parse(cookieStr);
            
            $.ajax({
                url:"data/home.json",
                success:function(arr){
                    var newArr = [];
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
                    if(!cookieStr){
                        $(".total_text").html(0);
                    }else{
                        var oPrice = 0 ;
                       
                        
                        for(var i = 0; i < newArr.length; i++){

                            oPrice += cookieArr[i].num * newArr[i].price;
                        }
                        $(".total_text").html(`${oPrice}`);
                    }
                    
                },
                error:function(msg){
                    alert(msg);
                }
            })
            
        }
