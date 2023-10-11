describe('Homework', async () => {

    it('should open page and create screenshot', async () => {

        await browser.reloadSession();

        await browser.url('/prihlaseni');

        await browser.saveScreenshot('login_page.png');

        await browser.pause(5000);

    });

    it('should open registrace page and return selectors', async () => {

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


});
