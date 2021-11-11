

const loginFormHandler = async (event) => {
    event.preventDefault();


    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

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
    .querySelector('.login-form')
        .addEventListener('submit', loginFormHandler);
