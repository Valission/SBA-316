let AButton = document.getElementById('AButton')
let heading = document.querySelector('h4')
let body = document.querySelector('body')
let lighting = document.getElementById('switch') 
let para = document.getElementById('para')
let question = document.getElementById('Qpara')
let opinion = document.getElementById('opinion')
let form = document.getElementById('opinionForm')
let options = document.getElementsByName('opinion')
let darkmode = false

function makeAwsome(){
    heading.innerHTML = "<h4> This website is so awsome</h4>"
    AButton.textContent = "scroll up and click the heading"
    heading.style.cursor =  "pointer"
}
function makeAwsomer(){
    soCool = document.createElement('p')
    soCool.textContent = 'It"s so cool'
    heading.appendChild(soCool)
}
function changemode(){
    if (darkmode == false){
        lighting.textContent = "Light mode"
        body.style.backgroundColor = 'black'
        para.style.color = 'aliceblue'
        opinion.style.backgroundColor = 'aliceblue'
        darkmode = true
    }
    else{
        lighting.textContent = "Dark mode"
        body.style.backgroundColor = 'white'
        para.style.color = "black"
        question.style.color = 'black'
        opinion.style.color = 'black'
        opinion.style.border= '2px, solid, black'
        darkmode = false
    }
}
function completeform(event) {
    event.preventDefault();

    
    let isChecked = false;

    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            isChecked = true;
            break;
        }
    }

    if (isChecked == false) {
        alert("Please choose an option before submitting.");
    } else {
        alert("Thanks for your opinion!");
    }
}

AButton.addEventListener('click', makeAwsome)
heading.addEventListener('click', makeAwsomer)
lighting.addEventListener('click',changemode)
form.addEventListener('submit', completeform)