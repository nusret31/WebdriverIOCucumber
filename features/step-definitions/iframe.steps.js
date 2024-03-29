const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');
const IframePage = require('../pageobjects/iframe.page');
const TextContent = require('../data/textContent.json');

Then(/^the user validates the existence of the iframe$/, async () => {
    await expect(IframePage.iframeContainer).toBeExisting();
});


Then(/^User clicks on the (.*) button$/, async (action) => {
    switch (action) {
        case 'file':
            await expect(IframePage.fileButton).toBeClickable();
            await (IframePage.fileButton).click();
            break;
        case 'edit':
            await expect(IframePage.editButton).toBeClickable();
            await (IframePage.editButton).click();
            break;
        case 'view':
            await expect(IframePage.viewButton).toBeClickable();
            await (IframePage.viewButton).click();
            break;
        case 'format':
            await expect(IframePage.formatButton).toBeClickable();
            await (IframePage.formatButton).click();
            break;
        default:
            console.log(`it will fail.`);
    }
});

Then(/^User clicks on new document button$/, async () => {
	await (IframePage.newDocumentButton).click();
});


Then(/^User enters text in mce editor$/, () => {
     let iframeElement = $((".tox-edit-area__iframe"));
     (iframeElement).isExisting();
     browser.switchToFrame($(".tox-edit-area__iframe"));
    ( IframePage.documentTextArea).clearValue();
    let textInfo = TextContent.NEW_DOCUMENT_TEXT[0].TEXT;
    ( IframePage.documentTextArea).setValue(textInfo);
     browser.pause(9000);
	console.log(textInfo);
    

});

