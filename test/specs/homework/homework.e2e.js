describe('Homework', async () => {

    it('should open page and create screenshot, lesson 1', async () => {

        await browser.reloadSession();

        await browser.url('/prihlaseni');

        await browser.saveScreenshot('login_page.png');

        await browser.pause(5000);

    });

    it('should open registrace page and return selectors, lesson 2', async () => {

        await browser.reloadSession();
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

        await browser.pause(5000);

    });

    it('should open registrace page and submit it, lesson 3', async () => {

        await browser.reloadSession();
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

        await browser.pause(5000);

    });


});
