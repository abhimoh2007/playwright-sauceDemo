import { Browser, BrowserContext, chromium } from "@playwright/test";

let browser: Browser | PromiseLike<Browser>;

export async function getBrowser(): Promise<Browser> {

    if(browser){
        return browser;
    }
    browser = await chromium.launch();
    return browser;
    
}

export async function getContext(): Promise<BrowserContext> {
    const browser = await getBrowser();
    const context = await browser.newContext();

    return context;
}

export default BrowserContext;
