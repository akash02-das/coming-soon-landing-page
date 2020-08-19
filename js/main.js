const countdown = document.querySelector('.countdown');

// Set launch date (milliseconds)
const launchDate = new Date('Aug 19, 2021 13:00:00').getTime();

// Update every second
const intval = setInterval(() => {
    // Get todays date and time (milliseconds)
    const current = new Date().getTime();

    // Distance from current date to the launch date
    const distance = launchDate - current;

    // Time calculation
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let hour = hours < 10 ? '0' + hours : hours;
    let minute = minutes < 10 ? '0' + minutes : minutes;
    let second = seconds < 10 ? '0' + seconds : seconds;

    // Display results
    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hour}<span>Hours</span></div>
        <div>${minute}<span>Minutes</span></div>
        <div>${second}<span>Seconds</span></div>
    `;

    // If launch date passed
    if (distance < 0) {
        // Stop countdown
        clearInterval(intval);

        // Style  and output text
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = 'Launched!';
    }
}, 1000);