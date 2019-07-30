require.config({
	paths:{
		"imp":"list",
		"jquery":"jquery-1.10.1.min",
		"jquery-cookie":"jquery.cookie"
	},
	shim:{
		"jquery-cookie" : ["jquery"],
	}
})
require(["imp"],function(imp){
	imp.imp();
})

