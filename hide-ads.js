const adContainingElementIds = ['tads', 'tadsb', 'rhs'];
let handleHiding = false;
adContainingElementIds.forEach(function(selector) {
  if (document.getElementById(selector)) {
    document.getElementById(selector).classList.add('car-accordion', 'closed');
    handleHiding = true;
  }
});

if (handleHiding) {
  var toggler = document.createElement('DIV');
  toggler.classList.add('car-toggler');

  toggler.onclick = function() {
    const closed = document.getElementsByClassName('car-accordion');
    Array.prototype.forEach.call(closed, function(el) {
      if (el.classList.contains('closed')) {
        el.classList.remove('closed');
        el.classList.add('open');
      }
      else {
        el.classList.add('closed');
      }
    });
  };
  document.body.prepend(toggler);
}
