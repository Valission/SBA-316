let AButton = document.getElementById('AButton')
let heading = document.querySelector('h4')
let body = document.querySelector('body')
let writing 

function makeAwsome(){
    heading.innerHTML = "<h4> This website is so awsome</h4>"
    AButton.textContent = "scroll up and click the heading"
    heading.style.cursor =  "pointer"
}
function makeAwsomer(){
    soCool = document.createElement('p')
    soCool.textContent = 'It"s so cool'
    heading.append(soCool)
}
AButton.addEventListener('click', makeAwsome)
heading.addEventListener('click', makeAwsomer)