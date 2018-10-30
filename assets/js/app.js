$(document).ready(function() {
    
    // global variables
    // ------------------------------------------------------------------------------- 

    var prefix = ['zombie', 'spooky', 'bloody'];
    var sufix = ['Carleton', 'batman', 'dorethy'];
    var first;
    var last;


    // functions
    // ------------------------------------------------------------------------------- 

    function createCostume() {

        var element = $(".costume");
        

        first = prefix[Math.floor(Math.random() * prefix.length)];
        last = sufix[Math.floor(Math.random() * sufix.length)];
        element.addClass('animated lightSpeedIn');
        element.text(first + " " + last)
        
    }



    // main process
    // ------------------------------------------------------------------------------- 
    
    console.log('script working');

    $("#pumpkinBtn").on("click", function() {
        $(".costume").removeClass('animated lightSpeedIn');
        $(".costume").html("...");
        setTimeout(createCostume, 1500);
    });





});