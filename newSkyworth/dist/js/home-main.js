require.config({
	paths:{
		"ajax":"home",
		"jquery":"jquery-1.10.1.min",
		"jquery-cookie":"jquery.cookie",
		"slide":"slide",
	},
	shim:{
		"jquery-cookie" : ["jquery"],
	}
})
require(["ajax","slide"],function(ajax,slide){
	ajax.ajax();
	slide.slide()

})
