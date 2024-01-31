function imgSlider(anything) {
    document.getElementsByClassName('starbucks')[0].src = anything;
}

function changeCircleColor(color) {
    const circle = document.getElementsByClassName('circle')[0];
    circle.style.background = color;
}
 function displayPopup(header){
    alert('Hovered over the header!');
 }