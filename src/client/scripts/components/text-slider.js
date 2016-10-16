var $ = require('jQuery');
var theaterjs = require('theaterjs');


$(document).ready(function() {
  
  var theater = theaterjs();

  // add/remove class `is-typing`
  theater
    .on('type:start, erase:start', function() {
      // add a class to actor's dom element when he starts typing/erasing
      var actor = theater.getCurrentActor();
      actor.$element.classList.add('is-typing');
    })
    .on('type:end, erase:end', function() {
      // and then remove it when he's done
      var actor = theater.getCurrentActor();
      actor.$element.classList.remove('is-typing');
    });

  theater.addActor('text-slider', { accuracy: 1, speed: 1.05 });
  theater
    .addScene('text-slider:Full-Stack Web Developer', 2000)
    .addScene(theater.replay);

});
