console.log('Welcome to my Creative Side')

function menuToggle() {
  const x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle'
  }
}
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
      &&
      location.hostname === this.hostname
    ) {
      // Figure out element to scroll to
      let target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually going to happen
        event.preventDefault()
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          const $target = $0(target)
          $target.focus()
          if ($target.is(':focus')) { // Checking if the target was focused
            return false
          } else {
            $target.attr('tabindex', '-1') // Adding tabindex for elements not focusable
            $target.focus() // Set focus again
          }
        })
      }
    }
  })
