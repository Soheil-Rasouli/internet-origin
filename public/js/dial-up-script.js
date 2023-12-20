document.getElementById('connectButton').addEventListener('click', function() {
    // Play the dial-up sound (replace 'dial-up-sound.mp3' with your actual file)
    var audio = new Audio('/dial-up-sound.mp3');
    audio.play();
  
    // Redirect to your first chapter after a delay (adjust the delay as needed)
    setTimeout(function() {
      window.location.href = '/chapters/مقدمه/';
    }, 5000); // 5000 milliseconds (5 seconds) delay
  });
  