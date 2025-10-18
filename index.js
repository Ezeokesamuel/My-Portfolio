
  function updateClock() {
    const now = new Date();
    document.getElementById("clock").innerHTML = now.toLocaleTimeString();
  }

  // Run immediately, then every 1 second
  updateClock();
  setInterval(updateClock, 1000);
