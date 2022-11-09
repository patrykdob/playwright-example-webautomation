const { test } = require('@playwright/test');
const AjaxLoaderPage = require('../pom/AjaxLoader.page');

test.beforeEach(async ({page}) => {
    const ajaxLoaderPage = new AjaxLoaderPage(page);
    ajaxLoaderPage.navigation('');
});

test.describe('Ajax Loader Page', () => {
    test('Wait for page to load and click the button', async ({page}) => {
        const ajaxLoaderPage = new AjaxLoaderPage(page);
        await ajaxLoaderPage.clickMe();
    });
});
