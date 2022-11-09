const { expect } = require('@playwright/test');
const BasePage = require("./Base.page");

class DatepickerPage extends BasePage {
    constructor(page) {
        super(page);

        // locators
        this.datepicker = page.locator('#datepicker');
        this.datepickerDays = page.locator('.datepicker-days');
        this.datepickerMonths = page.locator('.datepicker-months');
        this.datepickerYear = page.locator('.datepicker-years');
        this.datepickerSwitch = page.locator('.datepicker-switch');

    }

    async navigate() {
        await super.navigation('Datepicker/index.html');
    }

    async changeDate(day, month, year, expectedDate) {
        await this.datepicker.click();
        // switch to years to change whole date
        await this.datepickerSwitch.first().dblclick();

        await this.datepickerYear.locator(`text=${year}`).click();
        await this.datepickerMonths.locator(`text=${month}`).click();
        await this.datepickerDays.locator(`text=${day}`).first().click();
        const value = await this.page.evaluate(el => el.value, await this.page.$('input'));
        expect(value).toEqual(expectedDate);
    }
}
module.exports = DatepickerPage;