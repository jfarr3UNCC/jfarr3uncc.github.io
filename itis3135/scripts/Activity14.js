$(document).ready(function() {
    $('#nav_list a').on('click', function(event) {
        event.preventDefault(); 
        var speakerFile = $(this).attr('title') + '.json'; 
        $.getJSON('json_files/' + speakerFile, function(data) {
            $('main').empty();
            $('main').html(`
                <h1>${data.name}</h1>
                <h2>${data.month}</h2>
                <h3>${data.speaker}</h3>
                <img src="${data.image}" alt="${data.alt}">
                <p>${data.description}</p>
                `);
        });
    });
});
