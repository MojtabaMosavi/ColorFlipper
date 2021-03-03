const button = document.querySelector('#button');
const simpleButton = document.querySelector("#simple");
const hexButton = document.querySelector('#hex');
const colorDisplay = document.querySelector('.color')

function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min) + min )
}

function generateHex(){
    const hexDigits = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let hexCode = '';
    for(let i = 0; i < 6; i++){
        hexCode += hexDigits[randomNumber(0,hexDigits.length)];
    }
    return hexCode;
}

let simpleState = false;
let hexState = false;

simpleButton.addEventListener('click',() => simpleState = true)
hexButton.addEventListener('click',() => hexState = true)

function changeColor(){
    if(hexState){
        const suffix = this.dataset.suffix || ''
        document.documentElement.style.setProperty("--background-", suffix + generateHex());
        colorDisplay.innerHTML = `${"#" + generateHex() }`
    }else{
        let colors = ['#ere234','#234223','#245322','#234521']
        let color = colors[randomNumber(0,colors.length)]
        document.documentElement.style.setProperty('--background-',color);
        colorDisplay.innerHTML = color;
    }
}

button.addEventListener('click',changeColor)