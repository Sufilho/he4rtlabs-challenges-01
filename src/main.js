let inputs = document.querySelectorAll('.variables_input');
let btn = document.querySelector(".calc-btn");
let result_box = document.querySelector('.result_box');
let result_text = document.querySelector('.result_text');

// Limiting inputs keyCodes
inputs.forEach((elem) => {
    elem.onkeydown = (elem) => {
        if((elem.keyCode == 189 || elem.keyCode == 69)) {
            return false
        }
    }
})

// Calculating
btn.addEventListener("click", calculate);

function calculate() {
    let days = parseFloat(document.querySelector("#days").value);
    let hours = parseFloat(document.querySelector("#hours").value);
    let days_off = parseFloat(document.querySelector("#days_off").value);
    let total = parseFloat(document.querySelector("#total").value);
    if (isNaN(days) || isNaN(hours) || isNaN(days_off) || isNaN(total)) {
        inputs.forEach((elem) => {
            elem.setAttribute("placeholder", "Insira um valor!")
        })
    } else if (days == 0) {
        alert('Quantidade de dias inválido!')
    } else if (hours > 24 || hours == 0) {
        alert('Quantidade de horas inválida!')    
    } else if (days_off >= days) {
        alert('Quantidade de dias de folga inválida!')
    } else if (total == 0) {
        alert('Valor total inválido!')
    } else {
        if (result_box.classList.contains('result_none')){
            result_box.setAttribute('class', 'result_block');
        }
        let result = ((total / ((days - days_off) * hours))).toFixed(2);
        result_text.innerHTML = 'R$ '+ result + ' dinheiros por hora!';
    }
}