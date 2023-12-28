import {username, password} from './fixtures.js'

describe('Login page', async () => {
 beforeEach (async () => {
        console.log('bezi pred kazdym testem')
        await browser.reloadSession();
        await browser.url('/prihlaseni');
        const PrihlasitButton = $('.btn-primary')
        await browser.pause(500);//.pause jen kdyz clovek tvori testy, nepouzivat pak ve finalnim testu
        await browser.url('/registrace');
    });

    xit('should check that form is displayed correctly, lesson 4', async () => {

       // await browser.reloadSession();
        await browser.url('/registrace');
        //await browser.pause(500);

    });

    it('should key in registration submit it, lesson 3', async () => {

        // await browser.reloadSession();
         await browser.url('/registrace');
         
         const name = 'Lilie Liliovita'
         const email = 'lilie@seznam.cz'
         const password2 = 'Czechitas666'
 
         const idNameSelector = $('#name');
         const idEmailSelector = $('#email');
         const idPasswordSelector = $('#password');
         const idPasswordConfirmSelector = $('#password-confirm');
         const SubmitButton = $('.btn-primary')
 
         await idNameSelector.setValue(name);
         await idEmailSelector.setValue(email);
         await idPasswordSelector.setValue(password2);
         await idPasswordConfirmSelector.setValue(password2);
         await SubmitButton.click();
 
         //await browser.pause(500);
 
     });

     it('registrace s jiz registrovanym emailem', async () => {

        
         //await browser.pause(500);
 
     });

     it('registrace s nevalidnim heslem', async () => {

        
        //await browser.pause(500);

    });
     
});
