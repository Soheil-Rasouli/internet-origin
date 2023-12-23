(function (document) {
  var toggle = document.querySelector('.sidebar-toggle');
  var sidebar = document.querySelector('#sidebar');
  var checkbox = document.querySelector('#sidebar-checkbox');

  document.addEventListener('click', function (e) {
    var target = e.target;

    if (!checkbox.checked ||
      sidebar.contains(target) ||
      (target === checkbox || target === toggle)) return;

    checkbox.checked = false;
  }, false);
})(document);



class SpecialSection extends HTMLElement {
  constructor() {
      super();
      fetch('/chapters/dial.html')
          .then(response => response.text())
          .then(text => {
              const shadowRoot = this.attachShadow({mode: 'open'});
              shadowRoot.innerHTML = text;

              // Add your event listeners here
              shadowRoot.querySelector('#dial-button').addEventListener('click', function() {
                  // Hide the dial-up form
                  shadowRoot.querySelector('.window').style.display = 'none';

                  // Show the GIF
                  shadowRoot.querySelector('#loading-gif').style.display = 'block';

                  // Play the dial-up sound
                  playDialUpSound();
              });

              function playDialUpSound() {
                  // You can use the HTML5 Audio API to play the sound
                  let audio = new Audio('https://github.com/Soheil-Rasouli/internet-origin/chapters/dial-music.mp3'); // Replace with the correct path to your sound file
                  audio.play();

                  // Add an event listener to navigate when the sound finishes
                  audio.addEventListener('ended', function() {
                      // Navigate to the first chapter or perform any other action
                      window.location.href = 'https://github.com/Soheil-Rasouli/internet-origin/chapters/مقدمه';
                  });
              }
          });
  }
}

// Define the new element
customElements.define('special-section', SpecialSection);

