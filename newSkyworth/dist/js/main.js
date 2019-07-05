alert("加载成功");
require.config({
	paths:{
		"ajax":"js/home",
		"jquery":"js/jquery-1.10.1.min.js",
		"jquery-cookie":"js/jquery.cookie.js",

	},
	shim:{
		"jquery-cookie" : ["jquery"],
	}
})
require(["ajax"],function(ajax){
	ajax.ajax();
})