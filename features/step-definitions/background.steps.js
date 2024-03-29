const {Given, When, Then } = require('@wdio/cucumber-framework');
const constants = require('../base/constants');

Given(/^the user is on (.*) page$/, async (pageUrl) => {
	await browser.url(constants.URL_BROWSER + pageUrl);
});

