function updateDateTime() {

    const d = new Date();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[d.getDay()];

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = d.toLocaleDateString(undefined, options);

    const formattedTime = d.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit', second: '2-digit'});

    const displayString = `Today is ${formattedTime} on ${dayOfWeek}, ${formattedDate}`;

    document.getElementById("datetime").textContent = displayString;
}

document.getElementById('greetingForm').addEventListener('submit', function(event) {

    event.preventDefault();

    const userName = document.getElementById('name').value;
    const userMood = document.getElementById('mood').value;

    document.getElementById('userName').innerHTML = userName;
    document.getElementById('userMood').innerHTML = userMood;

    document.getElementById('greetingMessage').style.display = 'block';

});

document.getElementById('favoriteNum').addEventListener('submit', function(event){

    event.preventDefault();

    var userNum = Math.abs(Math.round(document.getElementById('num').value));

    const shapeList = ["Not a Shape", "henagon", "digon", "trigon", "tetragon", "pentagon", "hexagon", "heptagon", "octagon", "enneagon", "decagon"];
    const shape = shapeList[userNum];

    document.getElementById('userNum').innerHTML = shape;

    document.getElementById('shapeMessage').style.display = 'block';
    
});

document.getElementById('quote').addEventListener('submit', function(event){

    event.preventDefault();
    
    var price = document.getElementById('hours').value;
    document.getElementById('price').innerHTML = price * 33.3;

    document.getElementById('quoteMessage').style.display = 'block';

});

document.getElementById('suprise').addEventListener('submit', function(event){

    document.getElementById('frogImage').style.display = 'block';

});

document.getElementById('contactForm').addEventListener('submit', function(event) {

    event.preventDefault();

    const contact = document.getElementById('email').value;
    document.getElementById('contact').innerHTML = contact;

    document.getElementById('contactMessage').style.display = 'block';
});

document.getElementById('options').addEventListener('submit', function(event){

    event.preventDefault;

    const num = Math.floor(Math.random() * (3 - 1)) + 1;

    const optionList =["Design Consultation", "Website Design", "Website Revamp"];
    const option = optionList[num];

    document.getElementById('option').innerHTML = option;

    document.getElementById('optionMessage').style.display = 'block';
});

document.getElementById("validation_link_html").setAttribute("href", "https://validator.w3.org/check?url" + location.href);
document.getElementById("validation_link_css").setAttribute("href", "https://jigsaw.w3.org//css-validator/validator?url" + location.href);


updateDateTime();
setInterval(updateDateTime, 1000);