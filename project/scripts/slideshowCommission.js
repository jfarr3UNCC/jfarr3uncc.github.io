let slideIndex1 = 0;

showSlides();

function showSlides() {
    let i;

    let slides1 = document.getElementsByClassName("slides");

    for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";  
    }
    slideIndex1++;
    if (slideIndex1 > slides1.length) {slideIndex1 = 1}    
    slides1[slideIndex1-1].style.display = "block";  
    

    setTimeout(showSlides, 5000); 
}

