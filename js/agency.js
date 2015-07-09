/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {

  // upon page scroll, detect when at the top
  $('#fullpage').on("mousewheel", function() {
    checkPageScroll();
  })

  // or upon nav click as well
  $(".nav-link").on("click", function() {
    alert("Highlight")
    checkPageScroll();
  })


  $('#fullpage').fullpage({
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'Services', 'About'],
    showActiveTooltip: true,
    // scrollOverflow: true,
    fitToSection: false,
    anchors: ['Home', 'Services', 'About']
  });

  var options = [
    {selector: '#services', offset: 0, callback: (function(){
      $('.modal-trigger').css('border-color', 'black');
      $('.modal-trigger').css('color', 'black');
    })}
  ];

  Materialize.scrollFire(options);

    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      ready: function() { console.log('Ready'); }, // Callback for Modal open
      complete: function() { console.log('Closed'); } // Callback for Modal close
    }
  );

  // Highlight the top nav as scrolling occurs
  // $('body').scrollspy({
  //     target: '.navbar-fixed-top'
  // })

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
  });
});

var checkPageScroll = function() {
  if ($(".header").hasClass("active")) {
    $("a.waves-effect.waves-dark.btn.modal-trigger").removeClass("bottom");
    $("#fp-nav ul li a span, .fp-slidesNav ul li a span").css({background: "#fff"});
    $(".fp-tooltip").css({color: "#fff"});
  } else {
    $("a.waves-effect.waves-dark.btn.modal-trigger").addClass("bottom");
    $("#fp-nav ul li a span, .fp-slidesNav ul li a span").css({background: "#303030"});
    $(".fp-tooltip").css({color: "#303030"});
  }
}