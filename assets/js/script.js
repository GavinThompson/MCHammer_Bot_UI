var url = "http://localhost:8071/motion-control/update"; 

$(document).ready(function(){
    $(document).keydown(function(key){
        switch(parseInt(key.which,10)){
            //left = a
            case 65:
                $('.hammerbot').animate({left: "-=10px"}, 15);
                console.log("Turning left..");
                $.ajax(url, { dataType: "jsonp", data: {turn: -1}} ) 
                break;
            //back =s
            case 83:
                $('.hammerbot').animate({top: "+=10px"}, 15);
                console.log("Going backwards..");
                $.ajax(url, { dataType: "jsonp", data: {forward: -1} })
                break;
            //forward =w
            case 87:
                $('.hammerbot').animate({top:"-=10px"}, 15);
                console.log("Going forward..");
                $.ajax(url, { dataType: "jsonp", data: {forward: 1} })
                break;
            //right = d
            case 68:
                $('.hammerbot').animate({left: "+=10px"}, 15);
                console.log("Turning right..");
                $.ajax(url, { dataType: "jsonp", data: {turn: 1} }) 
                break;
            //Stop = space
            case 32:
                $.ajax(url, { dataType: "jsonp", data: {turn: 0, forward: 0} })
                $('.hammerbot').css({"position": "absolute",
                                    "left": "50%",
                                    "top": "50%",
                                    "margin": "-60px auto 0 -60px"});
                console.log("Stopping..");

                apprise('Stop?', {
                                'verify':true, 
                                'textYes':'Hammertime!', 
                                'textNo':'Stop'}, function(r) {

                                    if(r) { 
                                        // user clicked 'Yes'
                                        console.log("Hammertime..")
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
});

// .apprise('Stop?', {
//                                 'verify':true, 
//                                 'textYes':'Hammertime!', 
//                                 'textNo':'Stop'}, function(r) {

//                                     if(r) { 
//                                         // user clicked 'Yes'
//                                         console.log("Hammertime..")
//                                     } else { 
//                                         // user clicked 'No'
//                                         console.log("No hammertime... :(")
//                                     }
//                             });

