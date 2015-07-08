document.addEventListener("DOMContentLoaded", function() {

/*******************************************************************************
* Tubular for embedded video in background
*
* videoId: get from YouTube video URL, e.g. https://youtu.be/3O56g8KC6CM
* wrapperZIndex: keep this low, to ensure that video stays in background
* start: start time for video, in seconds
*******************************************************************************/

  $('#tubular-wrapper').tubular({videoId: '3O56g8KC6CM', wrapperZIndex: -1, start: 19});

});