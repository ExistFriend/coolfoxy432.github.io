const audioPlayer = document.getElementById('audio-player');
const currentTimeDisplay = document.getElementById('current-time');
const volumeSlider = document.getElementById('volume-slider');
const volumeButton = document.getElementById('volume-button');
const playButton = document.getElementById('play-button');
const audioTracker = document.querySelector('.audio-tracker');
const topBanner = document.querySelector('.top-banner'); // Select the top banner

// Format time in MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}


// Update the current time as the audio plays
audioPlayer.addEventListener('timeupdate', () => {
  currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
});

// Set initial volume to 50% (0.5)
audioPlayer.volume = 0.2;

// Update volume when the slider is adjusted
volumeSlider.addEventListener('input', () => {
  const volume = volumeSlider.value / 100; // Convert slider value to 0-1 range
  audioPlayer.volume = volume;
});

// Play or pause the audio when the play button is clicked
playButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play().catch((error) => { // <-- Fixed typo here
      console.error('Audio playback failed:', error);
    });
    playButton.textContent = 'Pause'; // Change button text to "Pause"

    // Update the top banner text
    topBanner.textContent = 'bbno$ x diamond pistols - help herself';

    // Show the volume button and ensure the container is expanded
    volumeButton.classList.add('show');
    audioTracker.classList.add('expanded');
  } else {
    audioPlayer.pause();
    playButton.textContent = 'Play'; // Change button text to "Play"

    // Update the top banner text
    topBanner.textContent = 'Currently playing: None';

    // Hide the volume button and collapse the container
    volumeButton.classList.remove('show');
    volumeSlider.classList.remove('show');
    audioTracker.classList.remove('expanded');
  }
});

// Automatically play the video in the background at double speed
document.addEventListener("DOMContentLoaded", function() {
          const video = document.querySelector('.video-background video');
          if (video) {
            video.playbackRate = 2; // Change 0.5 to your desired speed (1 is normal)
          }
        });

// Toggle volume slider visibility when the volume button is clicked
let isVolumeSliderVisible = false;

volumeButton.addEventListener('click', () => {
  isVolumeSliderVisible = !isVolumeSliderVisible;

  if (isVolumeSliderVisible) {
    // Show the slider and expand the container
    volumeSlider.classList.add('show');
    audioTracker.classList.add('expanded-slider'); // Add a class for expanded width with slider
  } else {
    // Hide the slider and collapse the container
    volumeSlider.classList.remove('show');

    // Delay collapsing the container to allow the slider animation to complete
    setTimeout(() => {
      audioTracker.classList.remove('expanded-slider');
    }, 300); // Match the slider's transition duration
  }
});

