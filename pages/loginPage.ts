import { Page, Locator, expect, LocatorScreenshotOptions } from "@playwright/test";
import { ConfigurationReader } from "../utilities/configurationReader";

class loginPage 
{
    readonly page: Page;

    readonly userNameInputField: Locator;

    readonly passwordInputField: Locator;

    readonly loginButton: Locator;

    readonly pageLogo: Locator;

    constructor(page: Page)
    {
        this.page = page;
        this.userNameInputField = page.locator("#user-name");
        this.passwordInputField = page.locator("#password");
        this.loginButton = page.locator("#login-button");
        this.pageLogo = page.locator(".login_logo");
    }

    async goto(): Promise<void>
    {
        await this.page.goto(ConfigurationReader().loginPageURL);
    }
}

export default loginPage;