const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');
const newWindowPage = require("../pageobjects/newwindow.page");
const constants = require('../base/constants');

Then(/^the user clicks on click here link$/, async () => {
    await expect(newWindowPage.clickHereButton).toBeClickable();
    await (newWindowPage.clickHereButton).click();
    browser.pause(4000);
});


Then(/^the user is redirected to a different page$/, async() => {
    let urlNewWindow = constants.NEW_WINDOW_URL;
    browser.switchWindow(urlNewWindow);
    await browser.url(urlNewWindow);
    console.log(browser.getUrl());
    await expect(browser).toHaveUrl(urlNewWindow);
});
