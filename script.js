var url = "http://localhost:8071/motion-control/update";

var btnKeydownCss = {'background': 'rgb(236, 240, 245)',
                     'background': 'rgba(236, 240, 245, .5)'}
                     /* First background option a fall-back for browsers that don't support rgba */
var btnKeyupCss = {'background': 'rgb(44, 62, 80)',
                   'background': 'rgba(44, 62, 80, .2)'}
var btnKeyupstrafeCss = {'background': 'rgb(231, 76, 60)',
                         'background': 'rgba(231, 76, 60, .5)'}


$(document).ready(function(){
    $('.bgdancer').hide();
    $('#strafebuttons').hide();
    $('#hammer_time_text').hide();
    $(document).keydown(function(key){
        switch(parseInt(key.which,10)){
            //left = a
            case 65:
                $('.hammerbot').animate({left: "-=10px"}, 15);
                console.log("Turning left..");
                $.ajax(url, { dataType: "jsonp", data: {turn: -1} })
                $('.k2').css(btnKeydownCss);
                break;
            //back =s
            case 83:
                $('.hammerbot').animate({top: "+=10px"}, 15);
                console.log("Going backwards..");
                $.ajax(url, { dataType: "jsonp", data: {forward: -1} })
                $('.k3').css(btnKeydownCss);
                break;
            //forward =w
            case 87:
                $('.hammerbot').animate({top:"-=10px"}, 15);
                console.log("Going forward..");
                $.ajax(url, { dataType: "jsonp", data: {forward: 1} })
                $('.k1').css(btnKeydownCss);
                break;
            //right = d
            case 68:
                $('.hammerbot').animate({left: "+=10px"}, 15);
                console.log("Turning right..");
                $.ajax(url, { dataType: "jsonp", data: {turn: 1} })
                $('.k4').css(btnKeydownCss); 
                break;
            //Stop = space
            case 32:
                $.ajax(url, { dataType: "jsonp", data: {turn: 0, forward: 0} })
                $('.center').css({"position": "absolute",
                                    "left": "50%",
                                    "top": "50%",
                                    "margin": "-60px auto 0 -60px"});
                $('.hammerbot').css({"position": "absolute", 
                                                "top": 0, 
                                                "left": 0,
                                                "z-index": 3});
                console.log("Stopping..");
                apprise('Stop?', {
                                'verify':true, 
                                'textYes':'Hammertime!', 
                                'textNo':'Stop'}, function(canttouchthis) {
                                    if(canttouchthis) { 
                                        // user clicked 'Yes'
                                        console.log("Hammertime..")
                                        $('.bgdancer').show()
                                        $('#strafebuttons').show()
                                        $('#hammer_time_text').show();
                                        $('#topbuttons').hide();
                                        $('#bottombuttons').hide();
                                        $('#spacebar_div').css({'border-color': '#e74c3c',
                                                                'background': 'rgb(231, 76, 60)',
                                                                'background': 'rgba(231, 76, 60, .5)',});
                                        $(document).keydown(function(key){
                                        switch(parseInt(key.which,10)){
                                            case 69:
                                                $('.groupdance').animate({left: "+=15px"}, 15);
                                                console.log("Strafe right..");
                                                $.ajax(url, { dataType: "jsonp", data: {strafe: 1} })
                                                $('.k6').css(btnKeydownCss);
                                                break;

                                            case 81:
                                                $('.groupdance').animate({left: "-=15px"}, 15);
                                                console.log("Strafing left..");
                                                $.ajax(url, { dataType: "jsonp", data: {strafe: -1} })
                                                $('.k5').css(btnKeydownCss);
                                                break;

                                            case 32:
                                                $.ajax(url, { dataType: "jsonp", data: {turn: 0, forward: 0} })
                                                location.reload();
                                                                                                                    
                                            default:
                                                break;
                                            }
                                        });
                                        $(document).keyup(function(key){
                                        switch(parseInt(key.which,10)){
                                            case 69:
                                                console.log("Not strafe right..");
                                                $.ajax(url, { dataType: "jsonp", data: {strafe: 0} })
                                                $('.k6').css(btnKeyupstrafeCss);
                                                break;

                                            case 81:
                                                console.log("Not strafing left..");
                                                $.ajax(url, { dataType: "jsonp", data: {strafe: 0} })
                                                $('.k5').css(btnKeyupstrafeCss);
                                                break;
                                            }
                                        });
                                    } else { 
                                        // user clicked 'No'
                                        console.log("No hammertime... :(")
                                    }
                            });
                break;
            default:
                break;
        }
    });
    $(document).keyup(function(key){
        switch(parseInt(key.which,10)){
            case 65:
                console.log("Not turning left..");
                $.ajax(url, { dataType: "jsonp", data: {turn: 0} })
                $('.k2').css(btnKeyupCss);
                break;
            //back =s
            case 83:
                console.log("Not going backwards..");
                $.ajax(url, { dataType: "jsonp", data: {forward: 0} })
                $('.k3').css(btnKeyupCss);
                break;
            //forward =w
            case 87:
                console.log("Not going forward..");
                $.ajax(url, { dataType: "jsonp", data: {forward: 0} })
                $('.k1').css(btnKeyupCss);
                break;
            //right = d
            case 68:
                console.log("Not turning right..");
                $.ajax(url, { dataType: "jsonp", data: {turn: 0} })
                $('.k4').css(btnKeyupCss);
                break;
        }
    });
});
