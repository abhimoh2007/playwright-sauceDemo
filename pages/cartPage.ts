import { Page, Locator, expect, LocatorScreenshotOptions } from "@playwright/test";

class cartPage 
{
    readonly page: Page;

    readonly checkoutButton: Locator;

    readonly pageHeader: Locator;

    constructor(page: Page)
    {
        this.page = page;
        this.checkoutButton = page.locator("#checkout");
        this.pageHeader = page.locator("//span[@class='title' and text()='Your Cart']");
    }
}

export default cartPage;