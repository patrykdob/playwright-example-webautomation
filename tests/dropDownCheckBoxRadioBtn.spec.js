const { test } = require('@playwright/test');
const DropdownCheckBoxRadioBtn = require('../pom/DropdownCheckBoxRadioBtn.page');

test.beforeEach(async ({page}) => {
    const dropCheckRadioBtnPage = new DropdownCheckBoxRadioBtn(page);
    await dropCheckRadioBtnPage.navigate();
});

test.describe('Dropdown Menu(s), Checkboxe(s) & Radio Button(s) Page', () => {
    test('Check all boxes, uncheck 2 & 4, confirm which are checked and unchecked', async ({page}) => {
        const dropCheckRadioBtnPage = new DropdownCheckBoxRadioBtn(page);

        for (let checkboxOption = 1; checkboxOption < 5; checkboxOption++) {
            await dropCheckRadioBtnPage.checkCheckbox(checkboxOption);
        }

        await dropCheckRadioBtnPage.uncheckCheckBox(2);
        await dropCheckRadioBtnPage.uncheckCheckBox(4);

    });

    test('Click all Radio Buttons and check each if value is correct', async ({page}) => {
        const dropCheckRadioBtnPage = new DropdownCheckBoxRadioBtn(page);

        let radiobuttons = ['green', 'blue', 'yellow', 'orange', 'purple'];
        for (const radiobutton of radiobuttons) {
            await dropCheckRadioBtnPage.checkRadioButton(radiobutton);
        } 
    });

    test('Pick all options from dropdown menus and check if the choosen value is correct', async ({page}) => {
        const dropCheckRadioBtnPage = new DropdownCheckBoxRadioBtn(page);

        let firstDropdownOptions = ['java', 'c#', 'python', 'sql'];
        for (const firstDropdownOption of firstDropdownOptions) {
            await dropCheckRadioBtnPage.dropdownChooseValue(1, firstDropdownOption)
        }

        let secondDropdownOptions = ['eclipse', 'maven', 'testng', 'junit'];
        for (const secondDropdownOption of secondDropdownOptions) {
            await dropCheckRadioBtnPage.dropdownChooseValue(2, secondDropdownOption)
        }

        let thirdDropdownOptions = ['html', 'css', 'javascript', 'jquery'];
        for (const thirdDropdownOption of thirdDropdownOptions) {
            await dropCheckRadioBtnPage.dropdownChooseValue(3, thirdDropdownOption)
        }

    });
});