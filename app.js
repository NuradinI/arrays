const button = document.querySelector('button');

button.addEventListener('click', function(){
    document.querySelector('button').style.backgroundColor = '#dd2c00'
})

document.getElementById('naruto').addEventListener('mouseenter', mouseEnter)
function mouseEnter() {
    document.getElementById('naruto').innerHTML = '<img src="https://artfiles.alphacoders.com/106/106054.jpg">'
}

const bodyElement = document.getElementById('site')

bodyElement.addEventListener('keypress', function(eventDetails){
    if(eventDetails.key == 'h'){
        bodyElement.style.backgroundColor = '#e0ece4';
    }
})