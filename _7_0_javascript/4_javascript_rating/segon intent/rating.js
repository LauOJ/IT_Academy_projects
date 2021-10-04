document.addEventListener("click", function(evt) {
  let flyoutElement = document.getElementById('star-rating'),
      targetElement = evt.target;  // clicked element

  do {
      if (targetElement == flyoutElement) {
          // This is a click inside. Do nothing, just return.
          return;
      } 
      // Go up the DOM
      targetElement = targetElement.parentNode;
  } while (targetElement);

  location.reload();

});