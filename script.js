MathJax.Hub.Config({
                tex2jax: {
                    preview: "none",
                    inlineMath: [ ['$','$'], ["\\(","\\)"] ],
                    processEscapes: true
                },
                messageStyle: "none"
                
            });



var setStickyMenu = function() {
    var width = $(window).width();
    
    var options = {
        bottoming: false,
        inner_scrolling: false
    };
    
    var sticky = "#TOC";
    if (width >= 768) {
        $(sticky).hide();
        $(sticky).show();
        $(sticky).stick_in_parent(options);
        $(".well ul").addClass('menu');
        $(".menu").attr('id', 'accordion-1');
    } else {
        $(sticky).hide();
        $(sticky).show();
        $(sticky).trigger("sticky_kit:detach");
        $(".menu").removeAttr('id');
        $(".well ul").removeClass();
    }
}


$(document).ready(function () {
    setStickyMenu();
    doAccordion();
});

function timeout() {
    setTimeout(function () {
        setStickyMenu();
        timeout();
    }, 100);
}

$(document).ready(function () {
    $( 'table' ).addClass( "table" )
});


var doAccordion = function () {
    $('#accordion-1').dcAccordion({
        eventType: 'click',
        autoClose: false,
        saveState: true,
        disableLink: false,
        speed: 'slow',
        showCount: true,
        autoExpand: true,
        cookie: 'dcjq-accordion-1',
        classExpand: 'dcjq-current-parent'
    });
}

$(window).resize(function(){

});

/*
 
					$('#accordion-2').dcAccordion({
						eventType: 'click',
						autoClose: false,
						saveState: true,
						disableLink: true,
						speed: 'fast',
						classActive: 'test',
						showCount: true
					});
					$('#accordion-3').dcAccordion({
						eventType: 'click',
						autoClose: false,
						saveState: false,
						disableLink: false,
						showCount: false,
						speed: 'slow'
					});
					$('#accordion-4').dcAccordion({
						eventType: 'hover',
						autoClose: true,
						saveState: true,
						disableLink: true,
						menuClose: false,
						speed: 'slow',
						showCount: true
					});
					$('#accordion-5').dcAccordion({
						eventType: 'hover',
						autoClose: false,
						saveState: true,
						disableLink: true,
						menuClose: true,
						speed: 'fast',
						showCount: true
					});
					$('#accordian-6').dcAccordion({
						eventType: 'hover',
						autoClose: false,
						saveState: false,
						disableLink: false,
						showCount: false,
						menuClose: true,
						speed: 'slow'
					});
 */