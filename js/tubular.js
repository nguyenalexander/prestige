document.addEventListener("DOMContentLoaded", function() {

/*******************************************************************************
* Tubular for embedded video in background
* docs: http://www.seanmccambridge.com/tubular/
*
* about the parameters:
* videoId: get from YouTube video URL, e.g. https://youtu.be/3O56g8KC6CM
* ratio: aspect ratio, tweak as needed
* wrapperZIndex: keep this low, to ensure that video stays in background
* start: start time for video, in seconds
*******************************************************************************/

  $('#tubular-wrapper').tubular({videoId: 'AdfFnTt2UT0', ratio: 16/9, wrapperZIndex: -1, start: 19});

});