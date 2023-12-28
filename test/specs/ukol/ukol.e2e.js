describe('Variace na registrace', async () => {

    beforeEach (async () => {
        console.log('bezi pred kazdym testem')
        await browser.url('/registrace')
    });
   
    it('1.test - Validní registrace', async () => {

        console.log('1.test - Validní registrace')

        const unique= Date.now();
        const name = 'T'+unique + 'Test'
        const email = 'Test-' +unique +'@seznam.cz'
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

        const navbarRight = $('.navbar-right')
        const userNameDropdown = navbarRight.$('[data-toggle="dropdown"]');
        const logoutLink = $('#logout-link');
        
        const currentUser = $('.navbar-right').$('strong').getText()
        await expect(await userNameDropdown.getText()).toEqual(name)
        console.log(await currentUser);

        // assert we are logged in, without it, the test would be invalid
        
        let user =userNameDropdown.getText();
            if(user=name) {
               console.log('Registrace proběhla v pořádku')
            } else {
                console.log('Registrace neúspěšná')
            }
       
       
        await browser.pause(500);
        const navitem = $('.navbar-right')
        const text = 'Přihlásit'

        await userNameDropdown.click();
        await logoutLink.click();
        await browser.pause(500);
        let button =navitem.getText()
            if(button=text) {
                console.log('Odhlášení proběhlo úspěšně')
            } else {
                console.log('Chyba při odhlašování')
        }
       
     });

     it('2. test - nevalidní registrace - použitý email', async () => {
        console.log('2. test - nevalidní registrace - použitý email')
         await browser.url('/registrace');
        const name = 'Lilie Liliovita'
        const email = 'lilie@seznam.cz'
        const password2 = 'Czechitas666'
     
        const idNameSelector = $('#name');
        const idEmailSelector = $('#email');
        const idPasswordSelector = $('#password');
        const idPasswordConfirmSelector = $('#password-confirm');
        const SubmitButton = $('.btn-primary')
        const error = $('.invalid-feedback');
     
        await idNameSelector.setValue(name);
        await idEmailSelector.setValue(email);
        await idPasswordSelector.setValue(password2);
        await idPasswordConfirmSelector.setValue(password2);
        await SubmitButton.click();
        
        $('.invalid-feedback').waitForDisplayed;
        //const currentUser = $('.navbar-right').$('.invalid-feedback').getText()
        console.log(await error.getText());
        //await browser.pause(500);
 
     });

     it('registrace s nevalidnim heslem', async () => {
        console.log('treti test')
        await browser.url('/registrace');
         
        const unique= Date.now();
        const name = 'Test'+ unique + 'Test'
        const uniqueemail = 'Test-' +unique +'@seznam.cz'
        const password2 = '12345678'

        const idNameSelector = $('#name');
        const idEmailSelector = $('#email');
        const idPasswordSelector = $('#password');
        const idPasswordConfirmSelector = $('#password-confirm');
        const SubmitButton = $('.btn-primary')
        const error = $('.invalid-feedback');

        await idNameSelector.setValue(name);
        await idEmailSelector.setValue(uniqueemail);
        await idPasswordSelector.setValue(password2);
        await idPasswordConfirmSelector.setValue(password2);
        await SubmitButton.click();
      
        $('.invalid-feedback').waitForDisplayed;
        //const currentUser = $('.navbar-right').$('.invalid-feedback').getText()
        console.log(await error.getText());
        //await browser.pause(500);
    });
     
});
