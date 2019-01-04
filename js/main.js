function mousescroll (param){
  if(param == true){
    //Включение скролла при помощи мыши
    var
      winW = $(window).width(),
      winWHalf = winW / 2,
      $cont = $(".projects"),
      contW = $cont.width()
//    console.log('winW=' + winW + ', winWHalf=' + winWHalf + ', contW=' + contW);
//    var finalX = 0;
//    var finalX_plus = 0;
    var moveContent = function(e) {
        var x = e.pageX;
        var procentMoveMouse = ((x - winWHalf) * 100) / winWHalf;
//        finalX = (procentMoveMouse * (contW - winW)) / 100;
//        console.log('x='+ x + ', procentMoveMouse=' + procentMoveMouse + ', finalX=' + finalX);
//        if(finalX >= 0){
//          finalX_plus = finalX;
          var widthMainForLi = $(window).width();
          $(".projects li").each(function(){
            var thisWidth = $(this).attr("data-type");
            switch(thisWidth) {
              case "big-slide":
                var x1 = -((x - winWHalf) * (560 / winW));
                $(this).css("transform", "translate3D("+ x1 + "px, 0, 0)")+30;
                break;
              case "middle-slide":
                var x2 = -((x - winWHalf) * (420 / winW));
                $(this).css("transform", "translate3D("+ x2 + "px, 0, 0)");
                break;
              case "small-slide":
                var x3 = -((x - winWHalf) * (280 / winW));
                $(this).css("transform", "translate3D("+ x3 + "px, 0, 0)");
                break;
            }
          });
//        }
//        $cont.css({transition:"all 3s linear"});
//        $cont.css("transform", "translate3D(" + (0 - finalX_plus) + "px, 0, 0)");
    };
    $(document).on("mousemove", moveContent);
    // только при нахождении в области проектов
//    $cont.on("mousemove", moveContent);
  // }else if (param ==false){
  //   return false;
    $(window).resize(function(){
      winW = $(this).width();
      winWHalf = winW / 2;
    });
  }
}

$(document).ready(function() {
  
  //При клике по пунктам меню
  $("#Studio, #Contact, #logo, #Студия, #Контакты").click(function (e) {
    e.preventDefault();
    var linkMenu = $(this).attr("href");
    var nameLink = $(this).attr("id");
    $(".projects li").each(function(i){
      var widthImg = $(this).width();
      var imgProject = $(this).find("img");
      var pProject = $(this).find("p");
      
      pProject.animate({opacity: 0},500);
      
      imgProject.animate({
        marginLeft: - widthImg,
        opacity: 0
      },1500)
    }).promise().then(function(){
        if(nameLink === "Contact" || nameLink === "Контакты"){
          $(".greyBg").css("display","none");
          $(".whiteBg").css("display","none");
          $(".blackBg").css("display","block");
          $(".wrapBg").css({"display":"block","opacity":"1"});
          var blackBg = $(".blackBg");
          var blackBg_width = $(window).width();
          blackBg.css("transform", "translate3d("+blackBg_width+"px, 0px, 0px)");
          setTimeout(function(){
            blackBg.animate({transform: "translateX(0px)"},1200,function(){
              location.href = linkMenu;
            });
          },700);
        }else{
          $(".blackBg").css("display","none");
          $(".greyBg").css("display","none");
          var whiteBg = $(".whiteBg");
          var whiteBg_width = $(window).width();
          whiteBg.css("margin-left",whiteBg_width+"px");
          $(".wrapBg").css({"display":"block","opacity":"1"});
          whiteBg.animate({ marginLeft: - 0 },1200,function(){ location.href = linkMenu; });
        }
      });
    });
      
  //Смена фонов
  var greyBg = $('.greyBg');
  var $marginLefty_width = greyBg.width();
  $('.greyBg').css("margin-left", $marginLefty_width+"px");
  greyBg.animate({ marginLeft: 0 }, 1600, function () {
    $(".wrapBg").animate({ opacity: 0 }, 0, function(){
      $(".wrapBg").css("display","none");
      //Появление верхнего меню
      $('header').css({top: '-=15'}); // только для главной анимация меню
      $("header").animate({top: '+=15', opacity: 1}, 1600);
      //Появление в футере языка
//      $(".lang").animate({bottom: '+=22' , opacity: 1}, 1600);
      //Показываем фото проектов
      
      //Для разрешения < 768
      var windowWindth = $(window).width();
      if(windowWindth < 769){
        var _dragging = false;
        $(".owl-stage-outer").on('touchmove', function(e){
          _dragging = true;
        });
        $(".owl-stage-outer").on('touchend', function(e){
          if(!_dragging) {
            $(".owl-stage-outer .active").click();
          }
          _dragging = false;
        });
        $(".owl-stage-outer").on('click', '.active', function() {
          const link = ($(this).find('a').attr('href'));
          var itemWidthMobi = $(".projectMainSliderMobi__itemMobi").width();
          $(".projectMainSliderMobi__bgBlock").css("margin-left",itemWidthMobi+"px");
          $(".projectMainSliderMobi__bgBlock").animate({marginLeft: 0}, 100,function(){
            ///////////////////////////////
            $(".greyBg").css("display","block");
            $(".whiteBg").css("display","none");
            var whiteBg = $(".greyBg");
            var whiteBg_width = $(window).width();
            whiteBg.css("margin-left",whiteBg_width+"px");
            $(".wrapBg").css({"display":"block","opacity":"1"});
            whiteBg.animate({
              marginLeft: - 0
            },1500, function () {
             location.href = link;
            });
            ///////////////////////////////
          });
        });
          
        var itemWidthMobi = $(".projectMainSliderMobi__itemMobi").width();
        $(".blockBgSliderItem").animate({marginLeft: -itemWidthMobi}, 1600, function(){
          $(".blockBgSliderItem").css("display","none");
        });
      }
      
      //Выравнивание по середине экрана
      var heightWindowMain = $(window).height();
      if(heightWindowMain > 810){
        var topMarginProject = ($(window).height() / 2) - 405 ;
        var projectWrap = $(".projects");
        TweenMax.to(projectWrap, 0.5, {top:topMarginProject});
      }
      
      setTimeout(function () {
        $('.loader').animate({opacity: 0}, 300);
        var $marginLefty = $(".projects img");
        $marginLefty.animate({marginLeft: 0 }, 1000);
      }, 1000);
    
      //РџСЂРё РєР»РёРєРµ РїРѕ РїСЂРѕРµРєС‚Сѓ СЃРІРѕСЂР°С‡РёРІР°РµРј РІСЃРµ
      $(".projects li").click(function () {
        $(".projects li").each(function (){
          var $marginLefty = $(this).find("img");
          var $marginLefty_width = $marginLefty.width();
          $marginLefty.animate({ marginLeft: - $marginLefty_width });
        });
        $(".projects__name").animate({ opacity: 0 }, 200, function () {
          ///////////////////////////////
          $(".greyBg").css("display","block");
          $(".whiteBg").css("display","none");
          var whiteBg = $(".greyBg");
          var whiteBg_width = $(window).width();
          whiteBg.css("margin-left",whiteBg_width+"px");
          $(".wrapBg").css({"display":"block","opacity":"1"});
          whiteBg.animate({
            marginLeft: - 0
          },1500, function () {
            var urlSite = window.location.hostname;
          });
          ///////////////////////////////
        });
      });
    
      //Появление названий проектов
      setTimeout(function () {
        $(".projects__name").each(function () {
          var height = $(this).outerHeight(true);
          $(this).animate({ 'margin-top': '-=' + (height - 1) }, 800);
        });
      }, 1700);
    });
  });


  // Р”Р»СЏ РјРѕР±РёР»СЊРЅС‹С… РІРµСЂСЃРёР№
  var width_main = $(window).width();
  if (width_main > 768){
    //Р’РєР»СЋС‡РµРЅРёРµ РіРѕСЂРёР·РѕРЅС‚Р°Р»СЊРЅРѕРіРѕ СЃРєСЂРѕР»РёРЅРіР°
    (function ($) {
      $(window).on("load", function () {
        $(".content").mCustomScrollbar({
            axis: "x",
            mouseWheel:{ enable: false },
//          autoHideScrollbar: false,
//          autoHideScrollbar: true,
//          callbacks:{
//            whileScrolling:function(){
//              var pr = this.mcs.leftPct;
//            }
//          },
          scrollbarPosition: "outside",
          scrollButtons: {enable: false},
          theme: 'minimal-dark'
        });
            //scroll on hover 
        var to;
        var scrollRight = function() {
          $(".content").mCustomScrollbar("scrollTo","-=60");
        };
        var scrollLeft = function() {
          $(".content").mCustomScrollbar("scrollTo","+=60");
        };

            $(".scroller-right").hover(function(e) {
                to = window.setInterval(scrollRight, 100);
            },function(e) {
                window.clearInterval(to);
            })

            $(".scroller-left").hover(function(e) {
              to = window.setInterval(scrollLeft, 100);
            },function(e) {
                window.clearInterval(to);
            })

      });
    })(jQuery);



    setTimeout(function () {mousescroll(true);},3800);
    
    //РЈРјРµРЅСЊС€РµРЅРёРµ С„РѕС‚Рѕ РїСЂРѕРµРєС‚РѕРІ РїСЂРѕРїРѕСЂС†РёРѕРЅР°Р»СЊРЅРѕ РїСЂРё РІС‹СЃРѕС‚Рµ СЌРєСЂР°РЅР° РјРµРЅСЊС€Рµ 850px
    var winH = $(window).height();
    if(winH < 850){
      var procentMin = (winH * 100) / 850;
      $(".projects li").each(function (i) {
        var wrapProject = $(this).find("div");
        var width_wrapProject = wrapProject.width();
        var height_wrapProject = wrapProject.height();
        var new_width_wrapProject = ( width_wrapProject * procentMin ) / 100;
        var new_height_wrapProject = ( height_wrapProject * procentMin ) / 100;
        wrapProject.width(new_width_wrapProject);
        wrapProject.height(new_height_wrapProject);
        var topLi = parseInt($(this).css("top"));
        var leftLi = parseInt($(this).css("left"));
        var new_topLi = ( topLi * procentMin) / 100;
        var new_leftLi = ( leftLi * procentMin) / 100;
        $(this).css("top",new_topLi);
        $(this).css("left",new_leftLi);
      });
    }

    //При наведени на один из проектов остальные удаляем и включаем полу прозрачность
    $(".projects li").hover(function () {
      var boxes = $(".projects img");
      var boxes_p = $(".projects p");
      
      var this_i = $(this).find("img");
      var this_p = $(this).find("p");
      
      //TweenMax.to(boxes, 0.7, {scale:0.9, opacity: 0.5});
      TweenMax.to(boxes, 0.7, {opacity: 0.5});
      //TweenMax.to(boxes_p, 0.7, {fontSize: "11.1px", opacity: 0.5});
      
      /*$(".projects li").each(function(){
        var width = $(this).find("img").width();
        var height = $(this).find("img").height();
        var distance_correction_horizontal = ( width - ( width * 90 ) / 100 ) / 2;
        var distance_correction_vertical = ( height -( height * 90 ) / 100 ) / 2.2  ;
        var this_boxes_p = $(this).find("p");
        TweenMax.to(this_boxes_p, 0.7, {left: distance_correction_horizontal, bottom: distance_correction_vertical});
      });*/
      
      TweenMax.to(this_i, 0.1, {scale:1, opacity: 1});
      TweenMax.to(this_i, 0.1, {opacity: 1});
      //TweenMax.to(this_p, 0.1, {fontSize: "13.1px", opacity: 1, left: 0, bottom: -1});
      
    },function () {
      var boxes = $(".projects img");
      var boxes_p = $(".projects p");
      //TweenMax.to(boxes, 0.7, {scale:1, opacity: 1});
      TweenMax.to(boxes, 0.7, {opacity: 1});
      //TweenMax.to(boxes_p, 0.7, {fontSize: "13.1px", opacity: 1 });
      
      /*$(".projects li").each(function(){
        var this_boxes_p = $(this).find("p");
        TweenMax.to(this_boxes_p, 0.7, {left: 0, bottom: -1});
      });*/
      
    });

  }

  //popup mobiMenu открываем
  $(".header__mobiMenu").click(function(){
    var menu = $(".popup__mobiMenu");
    var windowWidth = $(window).width();
    menu.css({"opacity":"1","margin-left": windowWidth+"px"});
    menu.animate({
      marginLeft: 0,
      opacity: 1
    }, 500, function() {
    });
    menu.css("display","block");
  });

  //popup mobiMenu закрываем
  $(".popup__mobiMenu-close").click(function(){
    var menu = $(".popup__mobiMenu");
    var windowWidth = $(window).width();
    menu.css({"opacity":"1"});
    menu.animate({
      marginLeft: windowWidth,
      opacity: 0
    }, 500, function() {
    });
    setTimeout(function () {
      menu.css("display","none");
    }, 700);
  });
  
      //Переход при клике из списка спроектов
      $(".projectsMenu__rightPart__nameProjects-category li").click(function(e){
          console.log('Clink in Project');
          e.preventDefault();
          // для проектов без страницы
          if (!$(this).find("a").attr("href"))
              return false;
    
          //$(".projectsMenu__rightPart__fotoProjects, .projectsMenu__rightPart__nameProjects").animate({opacity: 0},500);
        
          var link_proekt = $(this).find("a").attr("href");
          console.log('HREF = ' + link_proekt);
        
          $(".projectsMenu__rightPart").animate({ width: 0 }, 700).promise().then(function() {
            $(".projectsMenu__leftPart").animate({ opacity: 0 }, 500).promise().then(function() {
                $(".projectsMenu").css("display","none").promise().then(function() {

                    $(".projects li").each(function(i) {
                        var widthImg = $(this).width();
                        var imgProject = $(this).find("img");
                        var pProject = $(this).find("p");
                        
                        console.log('Images animate');
                        pProject.animate({opacity: 0}, 500);
                        imgProject.animate({marginLeft: - widthImg, opacity: 0}, 700);
                
                    }).promise().then(
                        function(){
                            window.location.href = link_proekt;
                //            $(".projects__name").animate({opacity: 0}, 300).promise().then(
                //                function(){
                //                    console.log('Projects name animate');
                //                    
                //                    $(".blackBg").css("display","none");
                //                    $(".greyBg").css("display","none");
                //                    var whiteBg = $(".whiteBg");
                //                    var whiteBg_width = $(window).width();
                //                    //console.log(whiteBg_width);
                //                    whiteBg.css({transform: "translateX("+whiteBg_width+"0px)"});
                //                    $(".wrapBg").css({"display":"block","opacity":"1"});
                //
                //                    whiteBg.animate({transform: "translateX(0px)"}, 1000).promise().then(
                //                        function(){
                //                            console.log('whiteBg animate. Load new link "' + link_proekt + '"');
                //                            window.location.href = link_proekt;
                //                        }
                //                    );
                //               }
                //           ); // $(".projects__name").animate
                        }
                    ); // .promise().then
                });
            });
          });
    
        //        ); // imgProject.animate
            
    //    }); // $(".projects li").each
    
    }); // $(".projectsMenu__rightPart__nameProjects-category li").click
  
  
  ////////////////////////////////////////
  if($(window).width() < 769){
    $(".mainpage").css("overflow-y","hidden");
  }
  

});