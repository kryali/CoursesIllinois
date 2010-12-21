var toolbarPosition = 0;
var scroll_settings = {'axis':'y','duration':'1000', 'easing':'swing'};

$(document).ready(function() {
	if(jQuery){
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
		offset = $('#what')[0].offsetTop - $('#what h2')[0].clientHeight;
		$.scrollTo(offset, scroll_settings);
	});
	
	$('#why_link').click(function(){
		offset = $('#why')[0].offsetTop - $('#why h2')[0].clientHeight;
		$.scrollTo(offset, scroll_settings);
	});
	
	$('#who_link').click(function(){
		offset = $('#who')[0].offsetTop - $('#who h2')[0].clientHeight;
		$.scrollTo(offset, scroll_settings);
	});
};
