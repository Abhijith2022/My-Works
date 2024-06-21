var counter = 240;
var counter2 = 25
$(document).ready(function () {
    //     $(window).scroll(function(event) {
    // // $(".dogimage3").animate({"left: 65%"});
    // $(".dogimage3").animate({left: '15%'});

    $(window).bind("mousewheel", function (event) {
        // $(".dogimage3").animate({"left: 65%"});
        // $(".dogimage3").animate({left: '25%'});
        if (event.originalEvent.wheelDelta > 0) {
            counter += 5;
            counter2 += 5;
            console.log(counter)
            $(".themovingtext").animate({ left: counter2 + "%" });
            $("#firstimage").animate( {height: 50+"%",left: 70+"%",top: 6+"%"})


           
        }
        else if(counter2 > 255){

            $(".themovingtext").animate({ left: 25 + "%" });

        }
        else {
            counter -= 5;
            counter2 -= 5;
            $(".firstimageprop3").animate({ height: 280 +"%" });
            $(".firstimageprop3").animate({ height: 300 +"%" });


            $(".themovingtext").animate({ left: counter2 + "%" });
            $("#firstimage").animate( {height: 50+"%",left: 70+"%",top: 6+"%"},600)
            $("#fourthimage").animate( {height: 50+"%",left: 70+"%",top: 19+"%"},800)
            $("#secondimage").animate( {height: 50+"%",left: 70+"%",top: 17+"%"},900)
            



            console.log(counter)
        }

    });
    //   });
    // $(window).on("scroll", function() {
    //     //page height
    //     var scrollHeight = $(document).height();
    //     //scroll position
    //     var scrollPos = $(window).height() + $(window).scrollTop();
    //     // fire if the scroll position is 300 pixels above the bottom of the page
    //     if(((scrollHeight - 300) >= scrollPos) / scrollHeight == 0){

    //         $(".dogimage3").animate({left: '5%'});
    //      }
    //    });

});