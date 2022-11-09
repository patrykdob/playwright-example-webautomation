const BasePage = require('./Base.page');
const { expect } = require('@playwright/test');

class DropCheckRadioBtnPage extends BasePage {

    constructor(page) {
        super(page);

        // locators
        this.dropdownMenus = page.locator('.dropdown-menu-lists'); 
        this.checkbox = page.locator('#checkboxes');
        this.radioButton = page.locator('#radio-buttons');

    }
    
    async navigate() {
        await super.navigation('Dropdown-Checkboxes-RadioButtons/index.html');
    }

    async checkCheckbox(checkBoxNo) {
        await this.checkbox.locator(`input[value="option-${checkBoxNo}"]`).check();
        await expect(this.checkbox.locator(`input[value="option-${checkBoxNo}"]`)).toBeChecked();
    }

    async uncheckCheckBox(checkBoxNo) {
        await this.checkbox.locator(`input[value="option-${checkBoxNo}"]`).uncheck();
        await expect(this.checkbox.locator(`input[value="option-${checkBoxNo}"]`)).not.toBeChecked();
    }

    async checkRadioButton(radioButtonValue) {
        await this.radioButton.locator(`input[value="${radioButtonValue}"]`).check();
        await expect(this.radioButton.locator(`input[value="${radioButtonValue}"]`)).toBeChecked();
    }

    async dropdownChooseValue(dropDownMenuOption, dropDownValue) {
        const dropdown = this.page.locator(`#dropdowm-menu-${dropDownMenuOption}`);
        await dropdown.selectOption(dropDownValue);
        await expect(this.page.locator(`#dropdowm-menu-${dropDownMenuOption}`)).toHaveValue(dropDownValue);
    }
}
module.exports = DropCheckRadioBtnPage;