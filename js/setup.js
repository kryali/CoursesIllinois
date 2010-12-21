var toolbarPosition = 0;

$(document).ready(function() {
	if(jQuery){
		//$.scrollTo($('#why')[0].offsetTop); 
		setupToolBar();
		setupToolTips();
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
	//console.log($('#why'));
	$('#what_link').click(function(){
		$.scrollTo($('#what')[0].offsetTop);
	});
	
	$('#why_link').click(function(){
		$.scrollTo($('#why')[0].offsetTop);
	});
	
	$('#who_link').click(function(){
		$.scrollTo($('#who')[0].offsetTop);
	});
};