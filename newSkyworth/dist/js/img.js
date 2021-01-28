$(function(){
	$.ajax({
		url:"data/datail.json",
		success:function(arr){
			var i = 0;
				var child = arr[i].child;
				for(var j = 0; j < child.length; j++){
					$(`
					<span class="sel" style="float: left; margin-left: 7px; width: 60px; height: 60px; overflow: hidden; position: relative;">
                			<img src="${child[j].img}" width="60" height="60" style="max-width: 100%; max-height: 100%; position: relative;">
                		</span>
					`).appendTo(".inside_container .product_wrap .product_left .bg_left #showsum p");
				}
			
		},
		error:function(msg){
			console.log(msg);
		}
	})
})