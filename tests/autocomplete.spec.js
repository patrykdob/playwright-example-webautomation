const { test } = require('@playwright/test');
const AutocompletePage = require('../pom/Autocomplete.page')

test.beforeEach(async ({page}) => {
    const autocompletePage = new AutocompletePage(page);
    await autocompletePage.navigate();

});

test.describe('Autocomplete TextField Page', () => {
    test('Enter first 3 characters and choose 2 items from list', async ({page}) => {
        const autocompletePage = new AutocompletePage(page);

        await autocompletePage.typeItemInput('alm');
        await autocompletePage.chooseItemFromAutocompleteList('Almond');
        await autocompletePage.submitItem();

        await autocompletePage.typeItemInput('coo');
        await autocompletePage.chooseItemFromAutocompleteList('Cookies');
        await autocompletePage.submitItem();
    });
});