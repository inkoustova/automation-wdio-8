describe('Login page', async () => {

    it('should open page and create screenshot, lesson 1', async () => {

        await browser.reloadSession();

        await browser.url('/prihlaseni');

        await browser.saveScreenshot('login_page.png');

        await browser.pause(500);//.pause jen kdyz clovek tvori testy, nepouzivat pak ve finalnim testu

    });
});

describe('Registrace page', async () => {
    it('should open and return selectors, lesson 2', async () => {

        //await browser.reloadSession();
        await browser.url('/registrace');

        const idNameSelector = $('#name');
        console.log(await idNameSelector.getHTML());

        const idEmailSelector = $('#email');
        console.log(await idEmailSelector.getHTML());

        const idPasswordSelector = $('#password');
        console.log(await idPasswordSelector.getHTML());

        const idPasswordConfirmSelector = $('#password-confirm');
        console.log(await idPasswordConfirmSelector.getHTML());

        const classSelector = $('.btn-primary');
        console.log(await classSelector.getHTML());

        //await browser.pause(500);

    });

    it('should check that form is displayed correctly, lesson 4', async () => {

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
     
     it('should check that registration was correct, lesson 5', async () => {

        // await browser.reloadSession();
         await browser.url('/registrace');
         
       
 
         //await browser.pause(500);
 
     });

     it('registration should failed with incorrect password and already registered email, lesson 4', async () => {

        // await browser.reloadSession();
         await browser.url('/registrace');
         
       
 
         //await browser.pause(500);
 
     });
});
