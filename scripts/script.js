/*
    Student Name: Blake Prescott
    File Name: script.js
    Date: Feb 17, 2025
*/

//jQuery for hero image to consume the header window space
$(document).ready(function(){
    $('.hero').height($(window).height());

    $("#mines-in-place-btn").click(function() {
        $("#mines-in-place")[0].play();
    })

    $("#youre-up-little-ones-btn").click(function() {
        $("#youre-up-little-ones")[0].play();
    })

    $("midtown-toggler").click(function() {
        var x = document.getElementById('midtown-nests');
        if(x.style.display === "none") {
            x.style.display === "block";
        }
        else
        {
            x.style.display === "none";
        }
    })

});

function toggleDisplay(myString) {
    var x = document.getElementById(myString);
    
    if(x.style.display != 'flex') {
        x.style.display = 'flex';
    }
    else
    {
        x.style.display = 'none';
    }
    
}
