/* Cards */

const cvcCard = document.querySelector('#cvc_card');
const numberCard = document.querySelector('#number_card');
const nameCard = document.querySelector('#name_card');
const expCardMonth = document.querySelector('#exp_card-month');
const expCardYear = document.querySelector('#exp_card-year');

/* Inputs */

const inputName = document.querySelector('#input_name');
const inputNumberCard = document.querySelector('#input_number_card');
const inputMonth = document.querySelector('#input_month');
const inputYear = document.querySelector('#input_year');
const inputCvc = document.querySelector('#input_cvc');
const inputs = document.querySelectorAll('.input');

/* Warnings */

const warningName = document.querySelector('#warning_name');
const warningNumber = document.querySelector('#warning_number');
const warningExp = document.querySelector('#warning_exp');
const warningCvc = document.querySelector('#warning_cvc');
const warnings = document.querySelectorAll('.warning__text');

/* Buttons */

const btnConfirmCard = document.querySelector('#btn_confirm_card');
const btnContinueThx = document.querySelector('#btn_continue_thx');

/* Thanks Message*/

const inputContainer = document.querySelector('.input__container');
const thxContainer = document.querySelector('.thx__container');

/* Functions*/ 

function confirmInput() {
    thxContainer.style.display = "flex";
    inputContainer.style.display = "none";
}

function clearInput() {
    inputName.value = "";
    nameCard.innerHTML = "Cardholder Name";

    inputNumberCard.value = "";
    numberCard.innerHTML = "0000 0000 0000 0000";

    inputMonth.value = "";
    expCardMonth.innerHTML = "00";

    inputYear.value = "";
    expCardYear.innerHtml = "00";

    inputCvc.value = "";
    cvcCard.innerHTML = "000";
    
    warningName.style.display = "none";
    warningNumber.style.display = "none";
    warningExp.style.display = "none";
    warningCvc.style.display = "none";

}

function printName(inputName) {
    nameCard.innerHTML = inputName;
}

function printNumber(inputNumberCard) {
    numberCard.innerHTML = inputNumberCard;
}

function printMonth(inputMonth) {
    expCardMonth.innerHTML = inputMonth;
}

function printYear(inputYear) {
    expCardYear.innerHTML = inputYear;
}

function printCvc(inputCvc) {
    cvcCard.innerHTML = inputCvc;
}

/* Card number restrictions */

function maskCard(i) {
   
    let v = i.value;
    
    if(isNaN(v[v.length-1])){ 
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "19");
    if (v.length == 4) i.value += " ";
    if (v.length == 9) i.value += " ";
    if (v.length == 14) i.value += " ";
}

/* Events */

btnConfirmCard.addEventListener('click', () => {
    let valida = 0;

    inputs.forEach((input, index) => {
        if (input.value === "") {
            warnings[index].style.display = "block";
            valida++;
        }
    });

    if (valida === 0) {
        confirmInput();
    }
});

btnContinueThx.addEventListener('click', () => {

    thxContainer.style.display = "none";
    inputContainer.style.display = "flex";
    
    clearInput();
});
