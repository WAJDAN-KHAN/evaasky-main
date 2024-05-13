// Function: main
const setLocationPeriod = (city, country) => {
    const locationPeriod = document.getElementById('time-in-current-location');
    const locationName = document.getElementById('location-name');
    locationName.textContent = `${city}, ${country}`;
    locationPeriod.innerHTML = `I’m staying in ${city.toLowerCase()} and I’m looking for a playmate! Could it be you? <br/> Send me a 😈¸ in my Dms and let's chat`;
  };
  
  // Function to start countdown timer
  const startCountdown = () => {
    const timer = document.getElementById('timer');
    let seconds = localStorage.getItem('countdownTime');
    seconds = seconds ? parseInt(seconds, 10) : (60 * 32) + 30;
  
    const updateTimer = () => {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;
      timer.textContent = `${hours}h ${minutes < 10 ? '0' : ''}${minutes}m ${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}s`;
    };
  
    updateTimer();
  
    const countdownInterval = setInterval(() => {
      seconds--;
      updateTimer();
      localStorage.setItem('countdownTime', seconds.toString());
  
      if (seconds <= 0) {
        clearInterval(countdownInterval);
        startCountdown(); // Restart the countdown
      }
    }, 1000);
  };
  
  // Function to set user availability status
  const startAvailableCountdown = () => {
    const availableBlock = document.getElementById('available');
    const userStatusBlock = document.getElementById('user-status');
    availableBlock.textContent = 'Available now';
    userStatusBlock.classList.add('available');
    localStorage.setItem('isAvailable', 'true');
  };
  
  // Fetch location information. Dont be a noob, you need to enter you api key below from IPDATA.CO
  $.get(
    "https://api.ipdata.co?api-key=753efb66cabd7f5caa26a05c3543e369b620a13aa61981c3372fb6cc",
    function (response) {
      const countryName = response.country_name;
      const cityName = response.city;
      setLocationPeriod(cityName, countryName);
    },
    "jsonp"
  );
  
  // Set location period when the page loads
  window.addEventListener('load', () => {
    startCountdown();
    startAvailableCountdown();
  });
  
  // It is wise not to send money to an indian make your landing page. use your knowledge to steal and/or modify it so it suits your need