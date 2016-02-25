MathJax.Hub.Config({
    tex2jax: {
        preview: "none",
        inlineMath: [['$', '$'], ["\\(", "\\)"]],
        processEscapes: true
    },
    messageStyle: "none"

});


function setStickyMenu () {
     
    var options = {
        bottoming: false,
        inner_scrolling: false
    };
    
    var sticky = "#TOC";
    var width = $(window).width();
    
    if (width >= 768) {
        console.log('fold in');
        //$(sticky).hide();
        //$(sticky).show();
        $(sticky).stick_in_parent(options);
        // $(".well ul").addClass('menu');
        
        $(".well ul").addClass('menu');

    } else {
        $(".well ul").removeClass('menu');
        $(sticky).trigger("sticky_kit:detach");
        console.log('fold out');
        
    }
};



function doAccordion () {

    $(".menu").dcAccordion({
        eventType: 'click',
        autoClose: false,
        saveState: false,
        disableLink: false,
        speed: 'slow',
        showCount: true,
        autoExpand: true,
        cookie: 'dcjq-accordion-1',
        classExpand: 'dcjq-current-parent'
    });
}

$(document).ready(function () {
    setStickyMenu();
    doAccordion();
});

$(document).ready(function () {
    $( 'table' ).addClass( "table" );
});

$(window).resize(function() {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 200);
});

$(window).bind('resizeEnd', function() {
    //do something, window hasn't changed size in 500ms
    window.location = location.pathname + location.hash;
    location.reload();
});
