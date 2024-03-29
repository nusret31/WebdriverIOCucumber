const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');
const { Key } = require('webdriverio');

Then(/^the user slides the item via keyboard (.*) times$/, async (keypress) => {
	let k = 0;
	const element = $('input[type="range"]');
	element.click();
	for(k; k < keypress; k++){
	 	await browser.pause(1000);
		await browser.keys("ArrowRight");
	 	await browser.pause(1000);
	}
	
});