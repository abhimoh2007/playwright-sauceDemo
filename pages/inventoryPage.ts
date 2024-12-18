import { Page, Locator, expect, LocatorScreenshotOptions } from "@playwright/test";

class inventoryPage 
{
    readonly page: Page;

    readonly pageHeader: Locator;

    readonly productsTitle: Locator;

    readonly productList: Locator;

    readonly addToCartButton: Locator;

    readonly shoppingCartContainerIcon: Locator;

    readonly cartIcon: Locator;

    constructor(page: Page)
    {
        this.page = page;
        this.pageHeader = page.locator(".app_logo");
        this.productsTitle = page.locator("//span[@class='title' and text()='Products']");
        this.productList = page.locator(".inventory_item");
        this.addToCartButton = page.locator("button:has-text('Add to cart')");
        this.shoppingCartContainerIcon = page.locator("#shopping_cart_container");
        this.cartIcon = page.locator("//a[@class='shopping_cart_link']");
    }

    async addRandomItems(count: number): Promise<void> {

        const productsLocator = this.page.locator(".inventory_item");
        const productCount = await productsLocator.count();

        if (count > productCount) {
            throw new Error(`Cannot select ${count} items. Only ${productCount} items available.`);
        }

        const randomIndexes = this.getRandomIndexes(productCount, count);

        for (const index of randomIndexes) {
            const product = productsLocator.nth(index);
            const addButton = product.locator("button:has-text('Add to cart')");
            await addButton.click();
        }
    }

    private getRandomIndexes(max: number, count: number): number[] {
        const indexes = new Set<number>();
        while (indexes.size < count) {
            const randomIndex = Math.floor(Math.random() * max);
            indexes.add(randomIndex);
        }
        return Array.from(indexes);
    }
}

export default inventoryPage;