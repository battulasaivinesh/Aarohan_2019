//navbar

$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  });

                  // closing function for menu options
            
                  var menuopt = $('.overlay-content a');
                  menuopt.click(function() {
                      $('.hamburger').toggleClass('is-active');
                  } );

            // for menu closing
                $(document).ready(function(){
                    $("#menu").click(function(){
                        if(document.getElementById("myNav").style.width=="100%")
                        {
                            document.getElementById("myNav").style.width = "0%"; 
                        }
                        else
                        {
                            document.getElementById("myNav").style.width = "100%";
                        }
                    });
                    $(".overlay-content a").click(function(){
                        document.getElementById("myNav").style.width = "0%"; 
                    });
                });

  //
  
    $(document).ready(function(){
        $("#open").click(function(){
            $("#root").animate({
                marginTop: '10vh',
                marginLeft: '10vw',
                marginRight: '10vw',             
                opacity: '0.7',
                width: '80vw',
            },800);
            $('#open').animate({
                opacity:'0',
            },800);
        });
    });


    $(document).ready(function(){
        $(".closebtn").click(function(){

            $("#root").animate({
                marginLeft:0,
                marginTop:0, 
                opacity: '1',
                width: '100vw'
            },2000);

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
                                    $('.about').css('background','rgb('+rgb.join(',')+')');
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

// team

(function($) {
    /* Ресайз блока меню со списком проектов */
    $(window).resize(function() {
        console.log
        var width_w = $(window).width();
        var width_block = (width_w * 70) / 100;
        if (width_w < 321) {
            width_block = 320;
        }
        $(".projectsMenu__rightPart").css("width", width_block + "px");
    });
    $("#Проекты, #mobiПроекты").click(function(e) {
        e.preventDefault();
        //Выключаем сколл на главной
        $(document).off("mousemove");
        //Выключаем скролл основной части
        $("body").css({
            "height": "100%",
            "overflow": "hidden"
        });

        //Выключаем курсор на странице проекта
        setTimeout(function() {
            $(".projectAll_block_number").css("display", "none");
            $(".projectsMenu").css("cursor", "default");
        }, 1000);
        //popup mobiMenu скрыть
        var menu = $(".popup__mobiMenu, .popup__mobiMenu-white");
        var windowWidth = $(window).width();
        menu.css({
            "opacity": "1"
        });
        menu.animate({
            marginLeft: -windowWidth,
            opacity: 0
        }, 300, function() {});
        setTimeout(function() {
            menu.css("display", "none");
        }, 550);

        $(".projectsMenu").css("display", "block");

        $(".projectsMenu__leftPart").css("opacity", "0");
        $(".projectsMenu__leftPart").animate({
            opacity: 0.7
        }, 500, function() {});

        var width_w = $(window).width();
        var width_block = (width_w * 70) / 100;
        if (width_w < 321) {
            width_block = 320;
        }
        var leftCloseBlock = width_w - width_block;
        $(".projectsMenu__leftPart__closeBlock").css("width", leftCloseBlock + "px");
        $(".projectsMenu__rightPart__blackBlock").css("top", "0");
        $(".projectsMenu__rightPart__blackBlock").css("display", "block");

        $(".projectsMenu__rightPart").animate({
            width: width_block
        }, 1000, function() {
            $(".projectsMenu__rightPart__blackBlock").animate({
                top: 4000
            }, 2000, function() {
                $(".projectsMenu__rightPart__blackBlock").css("display", "none");
            });
        });

    });

    $(".projectsMenu__leftPart__close, .projectsMenu__rightPart__close, .projectsMenu__leftPart__closeBlock").click(function() {
        var
            winW = $(window).width(),
            winWHalf = winW / 2,
            $cont = $(".projects"),
            contW = $cont.width()
        var finalX = 0;
        var finalX_plus = 0;
        var moveContent = function(e) {
            var x = e.pageX;
            finalX = (x - winWHalf) * (contW / winW);
            if (finalX > 0) {
                finalX_plus = finalX;
            }
            $cont.css("transform", "translate3D(" + (0 - finalX_plus) + "px, 0, 0)");
        };
        $(document).on("mousemove", moveContent);
        $(".projectsMenu__rightPart__fotoProjects, .projectsMenu__rightPart__nameProjects").animate({
            opacity: 0
        }, 500);
        $(".projectsMenu__rightPart").animate({
            width: 0
        }, 500, function() {
            $(".projectsMenu__leftPart").animate({
                opacity: 0
            }, 500, function() {
                $(".projectsMenu").css("display", "none");
                $(".projectsMenu__rightPart__fotoProjects, .projectsMenu__rightPart__nameProjects").css("opacity", "1");
                //Включаем скролл основной части
                $("body").css({
                    "height": "100%",
                    "overflow-y": "auto"
                });
            });
        });
        //Включаем курсор
        var urlPage = window.location.pathname.split('/');
        if (urlPage[1] == 'projects') {
            $(".projectAll_block_number").css("display", "block");
            $("body").css("cursor", "none");
        }
    });

    $(window).on("load", function() {
        $(".projectsMenu__rightPart").mCustomScrollbar({
            axis: "y", // horizontal scrollbar
            autoHideScrollbar: false
        });
    });

    function startMenuProjectImageAnimation(newImgUrl, top, left) {
        var imgMenu = $(".projectsMenu__rightPart__fotoProjects-wrapImg");
        imgMenu.find("img").attr("src", newImgUrl);
        imgMenu.css({
            "width": "0px",
            "top": top + "px",
            "left": left + "px"
        });
        imgMenu.stop().animate({
            width: 357
        }, 500);
    }

    function stopMenuProjectImageAnimation() {
        $(".projectsMenu__rightPart__fotoProjects-wrapImg").stop().animate({
            width: 0
        }, 500);
    }
    //Вывод одной фотки проекта
    $(".projectsMenu__rightPart__nameProjects-category li").hover(
        function() {
            //Получаем высоту экрана
            var heightWindowMenuHalf = $(window).height() / 2;
            var top_offset = $('#mCSB_1_container').offset().top;
            var heightObjectMenuHalf = $(".projectsMenu__rightPart__nameProjects-category-img").height() / 2;
            var randomTop = Math.floor(Math.random() * (100 - 2 + 1));
            var randomLeft = Math.floor(Math.random() * (100 - 2 + 1));
            var calcAddTop = (((heightWindowMenuHalf) * randomTop) / 100);
            var topObjectMenu = heightObjectMenuHalf + calcAddTop - top_offset;
            var pathImgPoroject = $(this).find("img").attr("src");
            var imgMenu = $(".projectsMenu__rightPart__fotoProjects-wrapImg");
            if (imgMenu.width() > 0) {
                imgMenu.stop().animate({
                    width: 0
                }, 600, function() {
                    startMenuProjectImageAnimation(pathImgPoroject, topObjectMenu, randomLeft);
                });
            } else {
                startMenuProjectImageAnimation(pathImgPoroject, topObjectMenu, randomLeft);
            }
        },
        stopMenuProjectImageAnimation);

})(jQuery);


$(document).ready(function() {
    $(".header__bg").css("display", "none");

    $(".projectMainSliderMobi__project-1").append('<div class="blockBgSliderItem"></div>');
    var width_display_device = $(window).width();
    if (width_display_device < 769) {
        //Блок проектов
        var widthProjectMainSliderMobi = $(window).width() - 32;
        $(".owl-item").css("width", widthProjectMainSliderMobi + "px");
        $(".projectMainSliderMobi").css("width", widthProjectMainSliderMobi + "px");
        var owlTeam = $('.projectMainSliderMobi');
        owlTeam.owlCarousel({
            loop: true,
            nav: false,
            items: 1,
            margin: 16,
            touchDrag: false
        });

        $(document).on('click', function(event) {
            console.log(event.target);
        });

        var windowHeight = $(window).height();
        var projectHeight = windowHeight - 110;
        $(".projectMainSliderMobi > div").css("height", projectHeight + "px");
        $(".projectMainSliderMobi-wrap").css("height", windowHeight + "px");
        var widthBlockOne = $(".projectMainSliderMobi-wrap").width();
        $(".projectMainSliderMobi__bgBlock").css("transform", "translateX(" + widthBlockOne + "px)");
        $(".projectMainSliderMobi-wrap").swipe({
            swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
                if (direction == "left") {
                    $(".projectMainSliderMobi__bgBlock").css("transform", "translateX(" + widthBlockOne + "px)");
                    $(".projectMainSliderMobi__bgBlock").animate({
                        transform: "translateX(0px)"
                    }, 500, function() {
                        owlTeam.trigger('prev.owl.carousel');
                        setTimeout(function() {
                            $(".projectMainSliderMobi__bgBlock").animate({
                                transform: "translateX(-" + widthBlockOne + "px)"
                            }, 500);
                        }, 200);
                    });
                } else if (direction == "right") {
                    $(".projectMainSliderMobi__bgBlock").css("transform", "translateX(" + widthBlockOne + "px)");
                    $(".projectMainSliderMobi__bgBlock").animate({
                        transform: "translateX(0px)"
                    }, 500, function() {
                        owlTeam.trigger('next.owl.carousel');
                        setTimeout(function() {
                            $(".projectMainSliderMobi__bgBlock").animate({
                                transform: "translateX(-" + widthBlockOne + "px)"
                            }, 500);
                        }, 200);
                    });
                }
            },
            threshold: 0
        });
    }
});

