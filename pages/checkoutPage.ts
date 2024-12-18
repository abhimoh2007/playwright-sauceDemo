import { Page, Locator, expect, LocatorScreenshotOptions } from "@playwright/test";

class checkoutPage 
{
    readonly page: Page;

    readonly firstNameInput: Locator;

    readonly lastNameInput: Locator;

    readonly postalCodeInput: Locator;

    readonly continueButton: Locator;

    readonly finishButton: Locator;

    readonly pageHeader: Locator;

    readonly firstNameRequiredError: Locator;

    readonly lastNameRequiredError: Locator;

    readonly zipOrPostCodeRequiredError: Locator;

    readonly checkoutOverviewPageHeader: Locator;

    constructor(page: Page)
    {
        this.page = page;
        this.firstNameInput = page.locator("#first-name");
        this.lastNameInput = page.locator("#last-name");
        this.postalCodeInput = page.locator("#postal-code");
        this.continueButton = page.locator("#continue");
        this.finishButton = page.locator("#finish");
        this.pageHeader = page.locator("//span[@class='title' and text()='Checkout: Your Information']");
        this.firstNameRequiredError = page.locator("//*[text()='Error: First Name is required']");
        this.lastNameRequiredError = page.locator("//*[text()='Error: Last Name is required']");
        this.zipOrPostCodeRequiredError = page.locator("//*[text()='Error: Postal Code is required']");
        this.checkoutOverviewPageHeader = page.locator("//span[@class='title' and text()='Checkout: Overview']");
    }
}

export default checkoutPage;