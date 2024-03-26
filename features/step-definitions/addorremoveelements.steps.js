const {Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^user is on add or remove elements page$/, async () => {
	await browser.url("https://the-internet.herokuapp.com/add_remove_elements/");
});

Then(/^user clicks on add button (.*) times$/, async (count) => {

    for(let i = 0; i <= count; i++){
      const addElementButton = await $('//button[text()="Add Element"]');
      await addElementButton.click();
    }
});

When(/^user clicks on delete button (.*) times$/, async(count) => {
  let i = 0;
  browser.pause(6000);
	while(i < count){
    const addElementButton = await $('//button[text()="Delete"]');
    await addElementButton.click();
    i++;
    console.log("it works");
  }
});


