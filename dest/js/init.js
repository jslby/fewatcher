$(function(){
  $("a.youtube").click(function(event) {
    $.fancybox({
      'padding'   : 0,
      'autoScale'   : false,
      'transitionIn'  : 'none',
      'transitionOut' : 'none',
      'title'     : this.title,
      'width'   : 680,
      'height'    : 495,
      'href'      : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
      'type'      : 'swf',
      'swf'     : {
        'wmode'    : 'transparent',
        'allowfullscreen' : 'true'
      }
    });
    event.preventDefault();
  });
});