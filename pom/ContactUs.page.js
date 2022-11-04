const BasePage = require('./Base.page');
const { expect } = require('@playwright/test');

class ContactUsPage extends BasePage {
    constructor(page) {
        super(page);

        // locators
        this.firstName = page.locator('input[name="first_name"]');
        this.lastName = page.locator('input[name="last_name"]');
        this.emailAddress = page.locator('input[name="email"]');
        this.comments = page.locator('textarea[name="message"]');
        this.resetBtn = page.locator('[value="RESET"]');
        this.submitBtn = page.locator('[value="SUBMIT"]');
        this.confirmationMessage = page.locator('#contact_reply');
;
    }

    async navigate() {
        await super.navigation('Contact-Us/contactus.html');
    }

    async fillAllFields(firstName, lastName, email, comments) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.emailAddress.fill(email);
        await this.comments.fill(comments);
    }

    async clickSubmit() {
        await this.submitBtn.click();
    }

    async clickReset() {
        await this.resetBtn.click();
    }

    async inputsShouldBeEmpty() {
        await expect(this.firstName).toBeEmpty();
        await expect(this.lastName).toBeEmpty();
        await expect(this.emailAddress).toBeEmpty();
        await expect(this.comments).toBeEmpty();
    }

    async confirmationMessageShouldBeVisible() {
        await expect(this.confirmationMessage).toBeVisible();
    }
}
module.exports = ContactUsPage;