const BasePage = require("./Base.page");

class AjaxLoaderPage extends BasePage {
    constructor(page) {
        super(page)

        // locators
        this.clickMeButton = page.locator('#button1');
    }

    async navigation() {
        super.navigation('Ajax-Loader/index.html');
    }

    async clickMe() {
        await this.clickMeButton.click();
    }
}
module.exports = AjaxLoaderPage;