$(document).ready(function() {
	
    $(".iconSet").on("click", function() {
    	
    	console.log("Working.......");

        $(".primary-navigation,.searchicon,search-container").toggleClass("active");
        $(".test1,.test2,.test3").toggleClass("open");
    });

});

