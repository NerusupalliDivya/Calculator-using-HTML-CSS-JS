let display = document.getElementById("display");

function appendToDisplay(value){
    if(display.textContent === '0'){
        display.textContent = '';
    }
    display.textContent += value;
}

function clearDisplay(){
    display.textContent = '0';
}

function deleteLastCharacter(){
    display.textContent = display.textContent.slice(0, -1);
}

function toggleSign(){
    if(display.textContent.startsWith('-')){
        display.textContent = display.textContent.slice(1);
    }else{
        display.textContent = '-' + display.textContent;
    }
}
function calculateResult(){
    try{
        display.textContent = eval(display.textContent);
    }catch(error){
        display.textContent = 'Error';
    }
}