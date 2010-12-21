var toolbarPosition = 0;

$(document).ready(function() {
	if(jQuery){
		setupToolBar();
		setupToolTips();
		console.log(toolbarPosition);
	}
});

var setupToolTips = function(){
	$('.tip').each(function(index) {
		$(this).tipsy({fade: true, html:true});
	});
}

var setupToolBar = function(){
	// script to make toolbar follow user
	var navigation = $('#toolbar')[0];
	toolbarPosition = navigation.offsetTop;
	$(window).scroll(function() {
	    var navigation = $('#toolbar')[0];
		if (window.pageYOffset >= toolbarPosition) {
			navigation.style.position = 'fixed';
			navigation.style.top = '0';
	    } else {
			navigation.style.position = 'static';
	    }
	});
};