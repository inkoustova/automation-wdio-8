import {username, password} from './fixtures.js'
// import LoginPage from '../pageobjects/login.page'
// import ApplicationsPage from '../pageobjects/applications.page'

describe ('Login page', async () => {

    it('should open login page', async () => {

        await browser.reloadSession();
        await browser.url('/prihlaseni');
        
        const loginButton = $('.btn-primary');
        await loginButton.click();
        console.log('Vyplňte přihlašovací údaje');


    });

    it('login with incorrect details', async () => {

        //await browser.reloadSession();
        await browser.url('/prihlaseni');

        const emailField = $('#email');
        const passwordField = $('#password');
        const loginButton = $('.btn-primary');

        await emailField.setValue(username);
        await passwordField.setValue('invalid');
        await loginButton.click();

    });

   it('log in with correct details', async () => {

        //await browser.reloadSession();
        await browser.url('/prihlaseni');
        const emailField = $('#email');
        const passwordField = $('#password');
        const loginButton = $('.btn-primary');

        await emailField.setValue(username);
        await passwordField.setValue(password);
        await loginButton.click();

    });

});

describe ('Prihlaseny user - prihlasky', async () => {

    beforeEach 
   it('go to prihlasky a vypis vsechny radky tabulky', async () => {

        //await browser.reloadSession();

        await browser.url('/prihlaseni');


        await browser.pause(5000);

    });
});

describe ('Log out', async () => {    
    it('odhlas se', async () => {

        await browser.reloadSession();

        await browser.url('/prihlaseni');


        await browser.pause(5000);

    });

});
