var images = document.querySelectorAll('#imageContainer img');
var button = document.getElementById('showImagesBtn');

button.addEventListener('click', function() {
  images[0].style.display = 'block';
  images[1].style.display = 'block';
  images[2].style.display = 'block';
});