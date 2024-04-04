const dynamicLoading = require('../pageobjects/dynamicloading.page');
const { expect, $ } = require('@wdio/globals');
const {Given, When, Then } = require('@wdio/cucumber-framework');


Then(/^the user clicks on dynamic loading page number (.*)$/, async(pageNo) => {
	switch (pageNo) {
        case '1':
            await expect(dynamicLoading.FirstLoadPage).toBeClickable();
            await (dynamicLoading.FirstLoadPage).click();
            await browser.pause(6000);
            break;
        case '2':
            await expect(dynamicLoading.SecondLoadPage).toBeClickable();
            await (dynamicLoading.SecondLoadPage).click();
            await browser.pause(6000);
            break;
        default:
            console.log(`it will fail.`);
    }
});


Then(/^the user does actions for the first dynamic page$/, async() => {
    await browser.pause(2000);
    await expect(dynamicLoading.StartButton).toBeClickable();
	await (dynamicLoading.StartButton).click();
    await browser.pause(6000);
    await (dynamicLoading.LoadingSlider).waitUntil(async function () {
        return (((await dynamicLoading.FinishText).isDisplayed))
    }, {
        timeout: 8000,
        timeoutMsg: 'the hello world message is not displayed'
    })
});

Then(/^the user does actions for the second dynamic page$/, async() => {
    await browser.pause(2000);
    await expect(dynamicLoading.StartButton).toBeClickable();
	await (dynamicLoading.StartButton).click();
    await browser.pause(6000);
    await (dynamicLoading.FinishText).waitForEnabled({ timeout: 7000 });
});

