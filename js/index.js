//navbar

$(document).ready(function() {
  $(".hamburger").click(function() {
    $(this).toggleClass("is-active");
  });
});

//txt animation
$(".ml13").each(function() {
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
    delay: function(el, i) {
      return 30 * i;
    }
  });
  console.log("callback");
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
    delay: function(el, i) {
      return 30 * i;
    }
  });
  console.log("callback");
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
  .on("start end", function(e) {
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
//   .on("end", callback);

// closing function for menu options

var menuopt = $(".overlay-content a");
menuopt.click(function() {
  $(".hamburger").toggleClass("is-active");
});

// for menu closing
$(document).ready(function() {
  $("#menu").click(function() {
    if (document.getElementById("myNav").style.width == "100%") {
      document.getElementById("myNav").style.width = "0%";
    } else {
      document.getElementById("myNav").style.width = "100%";
    }
  });
  $(".overlay-content a").click(function() {
    document.getElementById("myNav").style.width = "0%";
  });
});

//

$(document).ready(function() {
  $("#open").click(function() {
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

$(document).ready(function() {
  $(".closebtn").click(function() {
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

  $(document).ready(function() {
    $(".closebtn").click(function() {
      $("#a1").fadeOut(700, "swing");
      $("#a2").fadeOut(700, "swing");
      $("#a3").fadeOut(700, "swing");
    });
  });
  $(document).ready(function() {
    $("#open").click(function() {
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
  w = 0,
  h = 0,
  rgb = [],
  getWidth = function() {
    w = $win.width();
  };

var first = 1;
var k = 0;
//background change function
$win
  .resize(getWidth)
  .mousemove(function(e) {
    var m;

    var color1 = [7, 59, 76];
    var color2 = [218, 239, 249];

    if (first++) {
      m = Math.round(e.pageX);
      first = 0;
    }

    // setTimeout(function() {
    //   let l = Math.round(e.pageX);

    //   while (m >= l) {
    rgb = [
      color1[0] + Math.round((m / w) * (color2[0] - color1[0])),
      color1[1] + Math.round((m / w) * (color2[1] - color1[1])),
      color1[2] + Math.round((m / w) * (color2[2] - color1[2]))
    ];
    $(".about").css("background", "rgb(" + rgb.join(",") + ")");
    m--;
    //   }
    //   if (l >= w / 2) k = l;
    //   else k = w - l;
    // }, k / 3);
  })
  .resize();

//objects change function
$(function() {
  var $win = $(window),
    w = 0,
    h = 0,
    opacity = 1,
    getWidth = function() {
      w = $win.width();
      h = $win.height();
    };

  $win.mousemove(function(e) {
    $(".view-after").width(e.pageX);
  });
});

//dragable
$(function() {
  $("#my_resizable").resizable({
    handles: "e"
  });
});

