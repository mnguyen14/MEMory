# MEMory

https://glacial-falls-08571.herokuapp.com/

# Table of Content
[Description](#Description)

[Installation](#Installation)

[Usage](#Usage)

[License](#License)

[Contact](#Contact)

## Description
MEMory is an online journal app that allows you to create journal entries, view them, and give you the option to delete them.

## Installation
Run 'npm install' in your terminal

However, installation is not necessary, you can use the Heroku link provided above.

## Usage

Open the heroku link above in the readme.

Upon opening the page, you will be greeted with the login page. 

![MEMory log in page](https://i.gyazo.com/bad268ef8ee2985a051b760ba0d25376.jpg)

If you're a returning user you can input your email and password and click on the "Log In" button to access the site. If you're a new user, to sign up, click on "Sign up" under the "Log In" button.

![MEMory sign up page](https://i.gyazo.com/0f3876293b5061c360189b5a18618106.jpg)

Enter the necessary credentials to create an account. You will not have to worry about anyone getting your password, it is hashed via Bcrypt. When you're done click "Sign up now". 

You will then be redirected to the homepage where you can create a new journal entry or view or delete old entries. 

![MEMory homepage](https://i.gyazo.com/0cb64e8a6cb0bc56d33567b676e1d1b3.png)

For now it isn't working, but in future development we hope when you click on one of the entries in the entry history, the entry will appear and you will be able to read it. You will also have the option to delete it.

Upon clicking "+ New Entry" you will be sent to a page where you can create a new entry(This feature is not yet working as well):

![MEMory new entry page](https://i.gyazo.com/fd6eccb7097c1dd6f9ec3eda3741e03f.png)

A title and text inside the text box is required to submit the journal entry. You are free to write about whatever you want! If you're unsure what to write about, you can select one of our sample prompts via clicking on the drop down menu.

![MEMory sample prompts](https://i.gyazo.com/e9294038af1947ee68d65d0e1022ab28.png)

After submitting the journal entry, it will load into your "Entry History" on the homepage where you can view or delete it.

Though the links do not work on our website, we were still able to get our app working via Insomnia. You can sign up, log in, and create, view, and delete entries. 

![Insomnia sign up](https://i.gyazo.com/92a098d7f5e8e9600186a0f46d3e6815.png)

![Insomnia get user](https://i.gyazo.com/307d04222289086db8e1ee704da1bb12.png)

![Insomnia log in](https://i.gyazo.com/42356bdcb8afb7d6008aceab0ad84fa1.png)

After logging in you can create an entry.

![Insomnia log in](https://i.gyazo.com/03c8f02b2da5cb6a73c9aa21af9b1608.png)

You can see that the entry is made and it belongs to user_id: 4, Dan.

![Insomnia get user](https://i.gyazo.com/4b1a60f4be789453b136895208723df7.png)

When doing a GET on a user, you can see the user's name, email, and their entries. It shows the entry title, text, and the date it was created. Their password stays hidden on GET request.

## License
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

## Contact
Matthew Nguyen:

https://github.com/mnguyen14

Email: matthewnguyen0814@gmail.com


Edward Castaneda:

https://github.com/aeghin

Email: psnedwardxp@gmail.com


Mariana Solayman:

https://github.com/mas0530

Email: marianasolayman@yahoo.com
