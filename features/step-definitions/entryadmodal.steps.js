const EntryAdModal = require('../pageobjects/entryadmodal.page');

const {Given, When, Then } = require('@wdio/cucumber-framework');


Then(/^the modal is displayed$/, async() => {
    await browser.pause(3000);
	(await EntryAdModal.getModal()).isExisting();
    (await EntryAdModal.getModalTitle()).isDisplayed();
    (await EntryAdModal.getModalBody()).isDisplayed();
    await browser.pause(3000);
    (await EntryAdModal.getModalFooter()).isDisplayed();
    (await EntryAdModal.getModalCloseButton()).click();
    await browser.pause(4000);

});
