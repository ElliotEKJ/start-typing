(function () {
  /*
     ------------------------------------
     Create captions for `img`s
     ------------------------------------
  */

  var imgs = document.querySelectorAll('article img')

  Array.prototype.forEach.call(imgs, function (el) {
    var alttext = el.getAttribute('alt')

    if (alttext) {
      el.insertAdjacentHTML('afterend', '<figcaption><p>' + alttext + '</p></figcaption>')
    }
  })

  /*
     ------------------------------------
     Fluid videos
     ------------------------------------
  */

  fluidvids.init({
    selector: ['iframe', 'object'],
    players: ['www.youtube.com', 'player.vimeo.com']
  })
}).call(this)
