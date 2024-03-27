const {Given, When, Then } = require('@wdio/cucumber-framework');

Then(/^the user validates header and paragraph$/, async() => {
    const headerElement = $('.example h3');
    const paragraphElement = $('.example p');

    await expect(headerElement).toHaveText(
        expect.stringContaining("Hovers"));

    await expect(paragraphElement).toHaveText(
        expect.stringContaining("Hover over the image for additional information"));
    });

        
Then(/^user hovers over the images$/, async () => {
	const hoverFigure1 = $('.figure.nth-child(0)');
    hoverFigure1.moveToObject();
    console.log("it works");
});
