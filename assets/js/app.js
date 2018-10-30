$(document).ready(function() {
    
    // global variables
    // ------------------------------------------------------------------------------- 

    var prefix = ['Zombie', 'Spooky', 'Bloody', 'Scary', 'drunk'];
    var sufix = ['Batman', 'Mummy', 'Princess', "Guy Fieri", "Ghost", "Chef"];
    var first;
    var last;


    // functions
    // ------------------------------------------------------------------------------- 

    function createCostume() {
        var element = $(".costume");
        first = prefix[Math.floor(Math.random() * prefix.length)];
        last = sufix[Math.floor(Math.random() * sufix.length)];
        element.addClass('animated lightSpeedIn');
        element.text(first + " " + last);  
        
        addGif();
        addText();
    }

    function addGif() {
        var element = $("#gifBox");
        element.html("");
        element.addClass("gif animated fadeIn");
    }

    function addText() {
        var element = $("#questions");
        element.html("");
        element.addClass("questions animated fadeIn");
        element.text("Any Questions?");
    }



    // main process
    // ------------------------------------------------------------------------------- 
    
    console.log('script working');

    $("#pumpkinBtn").on("click", function() {
        $(".costume").removeClass('animated lightSpeedIn');
        $(".costume").html("...");
        $("#gifBox").html("...");
        $("#questions").html("...");
        setTimeout(createCostume, 1000);
    });


});