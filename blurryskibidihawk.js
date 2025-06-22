// ...existing code...

// Reveal content and start music on first click
window.addEventListener('DOMContentLoaded', function() {
  const overlay = document.getElementById('blur-overlay');
  function revealContentAndPlay() {
    if (overlay) {
      overlay.style.opacity = '0';
      setTimeout(() => overlay.style.display = 'none', 500);
    }
    // Start music if not already playing
    if (audioPlayer.paused) {
      audioPlayer.play().catch(() => {});
      playButton.textContent = 'Pause';
      topBanner.textContent = 'bbno$ x diamond pistols - help herself';
      volumeButton.classList.add('show');
      audioTracker.classList.add('expanded');
    }
    window.removeEventListener('click', revealContentAndPlay);
  }
  window.addEventListener('click', revealContentAndPlay);
});
// ...existing code...