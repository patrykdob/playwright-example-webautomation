class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigation(path) {
        await this.page.goto(`https://webdriveruniversity.com/${path}`);
    }
}
module.exports = BasePage;