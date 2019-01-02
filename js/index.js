
//navbar
    $(document).ready(function(){
        $("#open").click(function(){
            $("#wrapper").animate({
                marginTop: '10vh',
                marginLeft: '10vw',            
                opacity: '0.7',
                height: '80vh',
                width: '80vw'},800);
            $('#open').animate({
                opacity:'0',
            },800);
        });
    });


    $(document).ready(function(){
        $(".closebtn").click(function(){

            $("#wrapper").animate({
                marginLeft:0,
                marginTop:0, 
                opacity: '1',
                height: '100vh',
                width: '100vw'},2000);

            $('#open').animate({
                opacity:'1',
            },2000);
        });

        $(document).ready(function(){
            $(".closebtn").click(function(){
            $("#a1").fadeOut(700,"swing");
            $("#a2").fadeOut(700,"swing");
            $("#a3").fadeOut(700,"swing");
        });
    });
    $(document).ready(function(){
        $("#open").click(function(){
            $("#a1").fadeIn();
            $("#a2").fadeIn();
            $("#a3").fadeIn();
        });
    });
    });
    
    
    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
    }
    
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

  //landingpage

    var $win = $(window),
    w = 0,h = 0,
    rgb = [],
    getWidth = function() {
        w = $win.width();
    };

            var first = 1;
            var k = 0;
        //background change function
            $win.resize(getWidth).mousemove(function(e) {
                var m;
                if(first++){
                    m = Math.round(e.pageX);
                    first = 0;          
                }
                
                    
                    setTimeout( function(){
                        let l = Math.round(e.pageX);
 
                            while( m >= l  ){
                                rgb = [
                                    Math.round(m/w * 100),
                                    Math.round(m/w * 300),
                                    255,
                                ];
                                    $('#landing').css('background','rgb('+rgb.join(',')+')');
                                m--;     
                            }
                            if(l >= w/2)
                                k=l;
                            else
                                k=w-l;
                        },k/3);    
            }).resize();
        

//objects change function
    $(function(){
        var $win = $(window),
        w = 0,h = 0,
        opacity = 1,
        getWidth = function() {
            w = $win.width();
            h = $win.height();
        };

        $win.mousemove(function(e) {
            $('.view-after').width(e.pageX);
        });
    });


//dragable
    $( function() {
        $( "#my_resizable" ).resizable({
            handles: "e"
        });
    } );

