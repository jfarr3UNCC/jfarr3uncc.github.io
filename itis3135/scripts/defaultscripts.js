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

    const displayString = `Today is ${formattedTime} on ${dayOfWeek}, ${formattedDate}`;

    document.getElementById("datetime").textContent = displayString;
}

updateDateTime();