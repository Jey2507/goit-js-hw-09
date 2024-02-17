'use strict';

const form = document.querySelector(".feedback-form");

const keyForm = "feedback-form-state";


function dataForm(form) {
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    return {
        email,
        message
    }
}

form.addEventListener("input", (event) => {
    event.preventDefault();
    const data = dataForm(event.currentTarget);
    const jsDate = JSON.stringify(data);
    localStorage.setItem(keyForm, jsDate)
})

const item = localStorage.getItem(keyForm)

if (item) {
    const dateParse = JSON.parse(item)
    form.email.value = dateParse.email;
    form.message.value = dateParse.message;
}


form.addEventListener("submit", (event) => {
    if (form.email.value === "" || form.message.value === "") {
        alert("Будь ласка, заповніть обидва поля форми!");
        return; 
    }
    event.preventDefault();
    const lastDate = dataForm(form);
    console.log(lastDate)

    localStorage.removeItem(keyForm);
    form.reset();
})