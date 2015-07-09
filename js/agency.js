/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('#fullpage').fullpage({
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'Services', 'About'],
    showActiveTooltip: true,
    // scrollOverflow: true,
    fitToSection: false
  });

  // var options = [
  //   {selector: '.class', offset: 200, callback: 'globalFunction()' },
  //   {selector: '.other-class', offset: 200, callback: 'globalFunction()' },
  // ];

  // Materialize.scrollFire(options);

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

});


// Highlight the top nav as scrolling occurs
// $('body').scrollspy({
//     target: '.navbar-fixed-top'
// })

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});