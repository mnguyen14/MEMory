const signupFormHandler = async function (event) {
    event.preventDefault();

    const name = document.querySelector('#user-name').value;
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    // console.log(email);
    // console.log(password);
    const response = await fetch('api/user/signup', {
        method: 'POST',
        body: JSON.stringify({
            name, email, password
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Sign up failed, try again.');
    }
};

document
    .querySelector('.form-signup')
    .addEventListener('submit', signupFormHandler);