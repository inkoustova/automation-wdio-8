import {username, password} from './fixtures.js'
// import LoginPage from '../pageobjects/login.page'
// import ApplicationsPage from '../pageobjects/applications.page'

describe('Czechitas Login Page', async () => {

    it('should open login page', async () => {

        await browser.reloadSession();
        
        await browser.url('/prihlaseni');

        const windowSize = await browser.getWindowSize();
        console.log(windowSize);

        //const allCookies = await browser.getCookies();//tohle odlogovava a pak to haze issues s xrf tokenem
        //console.log(allCookies);
        
        await browser.saveScreenshot('login_page.png');


        await browser.pause(5000);

    });

});
