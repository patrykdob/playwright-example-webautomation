const { test } = require('@playwright/test');
const DatepickerPage = require ('../pom/Datepicker.page');

test.beforeEach(async ({page}) => {
    const datepickerPage = new DatepickerPage(page);
    await datepickerPage.navigate();
});

test.describe('Datepicker Page', () => {
    test('Change the date and check if correct one is set', async ({page}) => {
        const datepickerPage = new DatepickerPage(page);
        await datepickerPage.changeDate('10', 'May', '2023', '05-10-2023');
    });
});