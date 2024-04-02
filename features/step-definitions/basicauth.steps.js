const {Given, When, Then } = require('@wdio/cucumber-framework');
const { URL_BROWSER } = require('../base/constants');
const userCredentials = require("../data/userCredentials.json")

Then(/^the user bypasses the basic auth$/, async() => {
    await browser.pause(2000);
    let username = userCredentials.registeredUser[0].username;
    let password = userCredentials.registeredUser[0].password;
    const browserNameTrimmed = URL_BROWSER.replace("https://", "") + "basic_auth";
	await browser.url('https://'+ username + ':' + password +'@' + browserNameTrimmed);
});

Then(/^this (.*) is displayed$/, async (message) => {
	 expect($('.example p')).toHaveTextContaining(message);
});