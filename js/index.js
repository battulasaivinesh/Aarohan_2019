//navbar

$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
  });
});

//txt animation
$(".ml13").each(function () {
  $(this).html(
    $(this)
      .text()
      .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
  );
});

function callback() {
  setTimeout(() => {
    document.getElementById("about-wrapper").style.opacity = 1;
  }, 300);

  anime.timeline({ loop: false }).add({
    targets: ".ml13 .letter",
    translateY: [100, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: function (el, i) {
      return 30 * i;
    }
  });
}

function reverse_callback() {
  //   $(".ml13").each(function() {
  //     $(this).html(
  //       $(this)
  //         .text()
  //         .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
  //     );
  //   });

  //wrapper 2
  setTimeout(() => {
    document.getElementById("about-wrapper2").style.opacity = 1;
  }, 100);

  anime.timeline({ loop: false }).add({
    targets: ".ml13 .letter",
    translateY: [0, -100],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 800,
    delay: function (el, i) {
      return 30 * i;
    }
  });
}

var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
  triggerElement: "#trigger1",
  triggerHook: "onLeave",
  offset: "0",
  duration: "100%"
})
  // .setPin("#about-wrapper")
  //   .addIndicRators({ name: "random" })
  .addTo(controller)
  .on("start end", function (e) {
    if (
      e.type == "end" &&
      e.target.controller().info("scrollDirection") == "FORWARD"
    ) {
      callback();
    }
    if (
      e.type == "end" &&
      e.target.controller().info("scrollDirection") == "REVERSE"
    ) {
      reverse_callback();
    }
  });




// closing function for menu options

var menuopt = $(".overlay-content a");
menuopt.click(function () {
  $(".hamburger").toggleClass("is-active");
});

// for menu closing
$(document).ready(function () {
  $("#menu").click(function () {
    if (document.getElementById("myNav").style.width == "100%") {
      document.getElementById("myNav").style.width = "0%";
    } else {
      document.getElementById("myNav").style.width = "100%";
    }
  });
  $(".overlay-content a").click(function () {
    document.getElementById("myNav").style.width = "0%";
  });
});

//

$(document).ready(function () {
  $("#open").click(function () {
    $("#root").animate(
      {
        marginTop: "10vh",
        marginLeft: "10vw",
        marginRight: "10vw",
        opacity: "0.7",
        width: "80vw"
      },
      800
    );
    $("#open").animate(
      {
        opacity: "0"
      },
      800
    );
  });
});

$(document).ready(function () {
  $(".closebtn").click(function () {
    $("#root").animate(
      {
        marginLeft: 0,
        marginTop: 0,
        opacity: "1",
        width: "100vw"
      },
      2000
    );

    $("#open").animate(
      {
        opacity: "1"
      },
      2000
    );
  });

  $(document).ready(function () {
    $(".closebtn").click(function () {
      $("#a1").fadeOut(700, "swing");
      $("#a2").fadeOut(700, "swing");
      $("#a3").fadeOut(700, "swing");
    });
  });
  $(document).ready(function () {
    $("#open").click(function () {
      $("#a1").fadeIn();
      $("#a2").fadeIn();
      $("#a3").fadeIn();
    });
  });
});

//landingpage

var $win = $(window),
  w = 0,
  h = 0,
  rgb = [],
  getWidth = function () {
    w = $win.width();
  };

var first = 1;
var k = 0;
//background change function
$win
  .resize(getWidth)
  .mousemove(function (e) {
    var m;

    var color1 = [16, 36, 66];
    var color2 = [255, 255, 255];

    if (first++) {
      m = Math.round(e.pageX);
      first = 0;
    }
    $(".cloud1 img").css("opacity", 1 - (m / w) * 2);
    $(".cloud2 img").css("opacity", 1 - (m / w) * 2);
    $(".cloud3 img").css("opacity", 1 - (m / w) * 2);

    rgb2 = [
      Math.round((1 - m / w) * 255),
      Math.round((1 - m / w) * 255),
      Math.round((1 - m / w) * 255)
    ];

    if (m / w > 0.2 && m / w < 0.5) {
      $(".patron-black").css("opacity","0");
      rgb2 = [200, 200, 200];
    } else if (m / w > 0.5 && m / w < 0.7) {
      rgb2 = [76.5, 76.5, 76.5];
      $(".patron-black").css("opacity","1");
    }

    var scroll = $(window).scrollTop();

    if (scroll < 1000) {
      $(".dates").css("color", "rgb(" + rgb2.join(",") + ")");
      $(".line").css("background-color", "rgb(" + rgb2.join(",") + ")");
      $(".fa-icon").css("color", "rgb(" + rgb2.join(",") + ")");
    }
    else {
      $(".line").css("background-color", "");
      $(".fa-icon").css("color", "");
    }

    // setTimeout(function() {
    //   let l = Math.round(e.pageX);

    //   while (m >= l) {
    rgb = [
      color1[0] + Math.round((m / w) * (color2[0] - color1[0])),
      color1[1] + Math.round((m / w) * (color2[1] - color1[1])),
      color1[2] + Math.round((m / w) * (color2[2] - color1[2]))
    ];
    $("#landing_container").css("background", "rgb(" + rgb.join(",") + ")");
    m--;
    //   }
    //   if (l >= w / 2) k = l;
    //   else k = w - l;
    // }, k / 3);
  })
  .resize();

//objects change function
$(function () {
  var $win = $(window),
    w = 0,
    h = 0,
    opacity = 1,
    getWidth = function () {
      w = $win.width();
      h = $win.height();
    };

  $win.mousemove(function (e) {
    $(".view-after").width(e.pageX);
  });
});

//dragable
$(function () {
  $("#my_resizable").resizable({
    handles: "e"
  });
});


new ScrollMagic.Scene({triggerElement: "#trigger2",})
  .setClassToggle("#social_icons", "black") // add class toggle
  .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#trigger2",})
  .setClassToggle("#hamburger-11", "black-menu") // add class toggle
  .addTo(controller);


new ScrollMagic.Scene({ triggerElement: "#trigger3" })
  .setClassToggle("#social_icons", "white") // add class toggle
  .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#trigger3",})
  .setClassToggle("#hamburger-11", "white-menu") // add class toggle
  .addTo(controller);

new ScrollMagic.Scene({ triggerElement: "#trigger4" })
  .setClassToggle("#social_icons", "black2") // add class toggle
  .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#trigger4",})
  .setClassToggle("#hamburger-11", "black-menu2") // add class toggle
  .addTo(controller);