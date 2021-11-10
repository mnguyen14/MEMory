
const loginFormHandler = async (event) => {
    event.preventDefault();


    const email = document.querySelector('#exampleInputEmail1').value.trim();
    const password = document.querySelector('#exampleInputPassword1').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-type': 'application/json' }
        });


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
