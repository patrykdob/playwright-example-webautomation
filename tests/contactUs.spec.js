const { test, expect } = require('@playwright/test');
const ContactUsPage = require('../pom/ContactUs.page');

test.beforeEach(async ({page}) => {
    const contactUsPage = new ContactUsPage(page);
    await contactUsPage.navigate();
});

test.describe('Contact Us Page', () => {
    test('Fill all fields, reset and check if fields are empty', async ({page}) => {
        const contactUsPage = new ContactUsPage(page);
        await contactUsPage.fillAllFields('Tester', 'Testowy', 'tester@test.com', "test test test test");
        await contactUsPage.clickReset();
        
        await contactUsPage.inputsShouldBeEmpty();
    });

    test('Fill some fields, try to sumbit and check for error message', async ({page}) => {
        const contactUsPage = new ContactUsPage(page);
        await contactUsPage.fillAllFields('Tester', '', 'tester@test.com', "test test test test");
        await contactUsPage.clickSubmit();

        await expect(page.getByText('Error: all fields are required')).toBeVisible();
        
    });

    test('Enter invalid email, try to sumbit and check for error message', async ({page}) => {
        const contactUsPage = new ContactUsPage(page);
        await contactUsPage.fillAllFields('Tester', 'Testowy', 'invalidmail.com', "test test test test");
        await contactUsPage.clickSubmit();

        await expect(page.getByText('Error: Invalid email address')).toBeVisible();
        
    });

    test('Fill all fields, submit and check for confirmation message', async ({page}) => {
        const contactUsPage = new ContactUsPage(page);
        await contactUsPage.fillAllFields('Tester', 'Testowy', 'tester@test.com', "test test test test");
        await contactUsPage.clickSubmit();
        
        await contactUsPage.confirmationMessageShouldBeVisible();
    });
});