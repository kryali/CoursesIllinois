var toolbarPosition = 0;
var scroll_settings = {'axis':'y','duration':'1000'};

$(document).ready(function() {
	if(jQuery){
		//$.scrollTo($('#why')[0].offsetTop); 
		setupToolBar();
		setupToolTips();
	}
});

var setupToolTips = function(){
	$('.tip').each(function(index) {
		$(this).tipsy({'fade': true, 'html':true, 'opacity':1.0});
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

	// Set up smooth scrolling instead of jump
	$('#what_link').click(function(){
		$.scrollTo($('#what')[0].offsetTop, scroll_settings);
	});
	
	$('#why_link').click(function(){
		$.scrollTo($('#why')[0].offsetTop, scroll_settings);
	});
	
	$('#who_link').click(function(){
		$.scrollTo($('#who')[0].offsetTop, scroll_settings);
	});
};
