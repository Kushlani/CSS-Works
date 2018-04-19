$(document).ready(function() {
	
    $(".container").on("click", function() {
    	
    	console.log("Working.......");

        $(".primary-navigation").toggleClass("active");
        $(".bar1,.bar2,.bar3").toggleClass("open");
    });

});

