import { Page, Locator, expect, LocatorScreenshotOptions } from "@playwright/test";

class confirmationPage 
{
    readonly page: Page;

    readonly confirmationMessage: Locator;

    readonly pageHeader: Locator;

    constructor(page: Page)
    {
        this.page = page;
        this.confirmationMessage = page.locator("//h2[@class='complete-header' and text()='Thank you for your order!']");
        this.pageHeader = page.locator("//span[@class='title' and text()='Checkout: Complete!']");
    }
}

export default confirmationPage;