function showMessage() {
    const surprise = document.getElementById('surprise');
    surprise.classList.toggle('hidden');
    
    // Reproducir la música al hacer clic
    const backgroundMusic = document.getElementById('backgroundMusic');
    if (backgroundMusic.paused) {
      backgroundMusic.play();
    }
  }
