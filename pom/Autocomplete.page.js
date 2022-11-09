const BasePage = require('./Base.page');

class AutocompletePage extends BasePage {
    constructor(page) {
        super(page);

        // locators
        this.itemInput = page.locator('#myInput');
        this.submitButton = page.locator('#submit-button');
        this.autocompleteList = page.locator('#myInputautocomplete-list');

    }

    async navigate() {
        await super.navigation('Autocomplete-TextField/autocomplete-textfield.html');
    }

    async typeItemInput(input) {
        await this.itemInput.fill(input);
    }

    async chooseItemFromAutocompleteList(item) {
        await this.autocompleteList.locator(`text=${item}`);
    }

    async submitItem() {
        await this.submitButton.click();
    }
}
module.exports = AutocompletePage;