function updateDateTime() {
    // Get the current date and time
    const now = new Date();

    // Get the day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[now.getDay()];

    // Get the date in the format "d Month, YYYY"
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString(undefined, options);

    // Get the time in the format "h:mm a"
    const formattedTime = now.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });

    // Create the display string
    const displayString = `Today is ${formattedTime} on ${dayOfWeek}, ${formattedDate}`;

    // Update the content of the <h3> element
    document.getElementById("datetime").textContent = displayString;
}

// Call the function initially to display the date and time
updateDateTime();

// Update the date and time every second
setInterval(updateDateTime, 1000);