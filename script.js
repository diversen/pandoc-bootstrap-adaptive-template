MathJax.Hub.Config({
                tex2jax: {
                    preview: "none",
                    inlineMath: [ ['$','$'], ["\\(","\\)"] ],
                    processEscapes: true
                },
                messageStyle: "none"
                
            });

function setStickyMenu() {
    var width = $(window).width();
    //console.log(width);
    var sticky = "#TOC";
    if (width >= 768) {
        $(sticky).hide();
        $(sticky).show();
        $(sticky).stick_in_parent();
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
/*
function setStickyMenu() {
    var width = $(window).width();
    //console.log(width);
    if (width >= 768) {
        $("#TOC").hide();
        $("#TOC").show();
        $("#TOC").stick_in_parent();
        $(".well ul").addClass('menu');
        $(".menu").attr('id', 'accordion-1');
    } else {
        $("#TOC").hide();
        $("#TOC").show();
        $("#TOC").trigger("sticky_kit:detach");
        $(".menu").removeAttr('id');
        $(".well ul").removeClass();
    }
}*/


$(document).ready(function ($) {
    setStickyMenu();
});

$(document).ready(function () {
    $( 'table' ).addClass( "table" )
});

/*
$(document).ready(function () {
    $( ".active" ).on( "click", function() {
        //alert('ok');
        $( '.active' ).removeClass( "active");
    });
}); */

/*
var addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
}; */
/*
var testFunc = function () {
    alert('loaded');
};*/

// addEvent(window, "load", setStickyMenu);




function timeout() {
    setTimeout(function () {
        setStickyMenu({
            bottoming: true,
            inner_scrolling: false
        });
        timeout();
    }, 1000);
}

$(document).ready(function(){
    timeout();
});

/*
$(document).ready(function ($) {
    $("#TOC").stick_in_parent();
    $(".well ul").addClass('menu');
    $(".menu").attr('id', 'accordion-1');
}); */

// $(document).ready(function($){
//});



$(document).ready(function($){
					$('#accordion-1').dcAccordion({
						eventType: 'click',
						autoClose: false,
						saveState: true,
						disableLink: false,
						speed: 'slow',
						showCount: true,
						autoExpand: true,
						cookie	: 'dcjq-accordion-1',
						classExpand	 : 'dcjq-current-parent'
					});
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
});