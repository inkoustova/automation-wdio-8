describe('Registration page', async () => {

    beforeEach (async () => {
        console.log('runs before each test - browser opens')
        await browser.url('/registrace')
    });
   
    it('should create valid registration', async () => {

        console.log('1.test - Valid registration created')

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
        
        let user =userNameDropdown.getText();
            if(user=name) {
               console.log('Registrace proběhla v pořádku')
            } else {
                console.log('Registrace neúspěšná')
            }
       
       
        const navitem = $('.navbar-right')
        const text = 'Přihlásit'

        await userNameDropdown.click();
        await logoutLink.click();

        let button =navitem.getText()
            if(button=text) {
                console.log('Odhlášení proběhlo úspěšně')
            } else {
                console.log('Chyba při odhlašování')
        }
       
     });

     it('should return error as email is already registered', async () => {
        console.log('2. test - invalid registration - already registered email')

        const name = 'Lišák Admin'
        const email = 'da-app.admin@czechitas.cz'
        const password2 = 'Czechitas123'
     
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
        console.log(await error.getText());
        
        const navbarRight = $('.navbar-right')
        const text = 'Přihlásit'
        await expect(await navbarRight.getText()).toEqual(text)
        let button =navbarRight.getText()
            if(button=text) {
                console.log('Registrace nebyla dokončena')
            } else {
                console.log('Chyba')
        }
 
     });

     it('should return error for invalid password used', async () => {
        console.log('3. test - invalid registration - invalid password used')
         
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
        console.log(await error.getText());
        
        const navbarRight = $('.navbar-right')
        const text = 'Přihlásit'
        await expect(await navbarRight.getText()).toEqual(text);
        let button =navbarRight.getText()
            if(button=text) {
                console.log('Registrace nebyla dokončena')
            } else {
                console.log('Nastala neočekávaná chyba')
         }
        });
});
