let AButton = document.getElementById('AButton')
let heading = document.querySelector('h4')
let body = document.querySelector('body')
let lighting = document.getElementById('switch') 
let para = document.getElementById('para')
let darkmode = false

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
function changemode(){
    if (darkmode == false){
        lighting.textContent = "Light mode"
        body.style.backgroundColor = 'black'
        para.style.color = 'aliceblue'
        darkmode = true
    }
    else{
        lighting.textContent = "Dark mode"
        body.style.backgroundColor = 'white'
        para.style.color = "black"
        darkmode = false
    }
}
AButton.addEventListener('click', makeAwsome)
heading.addEventListener('click', makeAwsomer)
lighting.addEventListener('click',changemode)