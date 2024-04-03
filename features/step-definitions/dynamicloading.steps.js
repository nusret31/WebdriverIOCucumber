const DynamicLoading = require('../pageobjects/dynamicloading.page');
const {Given, When, Then } = require('@wdio/cucumber-framework');


Then(/^the user clicks on dynamic loading page number(.*)$/, async(pageNo) => {
	switch (pageNo) {
        case '1':
            await expect(DynamicLoading.getFirstLoadPage).toBeClickable();
            await (DynamicLoading.getFirstLoadPage).click();
            await browser.pause(6000);
            break;
        case '2':
            await expect(DynamicLoading.getSecondLoadPage).toBeClickable();
            await (DynamicLoading.getSecondLoadPage).click();
            break;
        default:
            console.log(`it will fail.`);
    }
});


Then(/^the user does actions for the first dynamic page$/, async() => {
	await (DynamicLoading.getStartButton()).click();
    await (DynamicLoading.getLoadingSlider()).waitUntil(async function () {
        return (((await DynamicLoading.getFinishText()).isDisplayed))
    }, {
        timeout: 8000,
        timeoutMsg: 'the hello world message is displayed'
    })
});

Then(/^the user does actions for the second dynamic page$/, () => {
	return true;
});

