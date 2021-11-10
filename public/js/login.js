const { response } = require("express");

const loginFormHandler = async (event) => {
    event.preventDefault();


    const email = document.querySelector().value.trim();
    const password = document.querySelector().value.trim();

    if (email && password) {
        const response = await fetch();




        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Please try logging in again!');
        }
    }
};


document
        .querySelector();
        .addEventListener();
