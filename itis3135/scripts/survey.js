document.getElementById('byoForm').addEventListener('submit', function(event){

    event.preventDefault;

    var userName = document.getElementById('name').value;
    var userMascot = document.getElementById('mascot').value;
    var userCaption = document.getElementById('caption').value;
    var userPersonalBackground = document.getElementById('personalBackground').value;
    var userProfessionalBackground = document.getElementById('professionalBackground').value;
    var userAcademicBackground = document.getElementById('academicBackground').value;
    var userWebBackground = document.getElementById('webBackground').value;
    var userPlatform = document.getElementById('platform').value;

    document.getElementById('userName').innerHTML = userName;
    document.getElementById('userMascot').innerHTML = userMascot;
    document.getElementById('userCaption').innerHTML = userCaption;
    document.getElementById('userPersonalBackground').innerHTML = userPersonalBackground;
    document.getElementById('userProfessionalBackground').innerHTML = userProfessionalBackground;
    document.getElementById('userAcademicBackground').innerHTML = userAcademicBackground;
    document.getElementById('userWebBackground').innerHTML = userWebBackground;
    document.getElementById('userPlatform ').innerHTML = userPlatform ;


    document.getElementById('userIntro').style.display = 'block';

    alert("help");
});