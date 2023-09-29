function updateDateTime() {

    const d = new Date();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[d.getDay()];

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = d.toLocaleDateString(undefined, options);

    const formattedTime = d.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });

    const displayString = `Today is ${formattedTime} on ${dayOfWeek}, ${formattedDate}`;

    document.getElementById("datetime").textContent = displayString;
}

updateDateTime();