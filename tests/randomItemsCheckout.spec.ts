import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import InventoryPage from '../pages/inventoryPage';
import CartPage from '../pages/cartPage';
import CheckoutPage from '../pages/checkoutPage';
import ConfirmationPage from '../pages/confirmationPage';
import { getContext} from '../utilities/BrowserContext';
import { ConfigurationReader } from '../utilities/configurationReader';
import { generateRandomString, generateRandomNumber} from '../utilities/BrowserUtilities';

test.describe('Sauce Labs demo website test flow @sauceTest', async () =>{
  test('Selecting random items from the products list and checking out @sauceTest001', async () => {
    const context = await getContext();
    const page = await context.newPage();

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const confirmationPage = new ConfirmationPage(page); 

    // #region : Login
    await loginPage.goto();
    await expect(loginPage.pageLogo).toBeVisible();
    await expect(loginPage.userNameInputField).toBeVisible();
    await expect(loginPage.userNameInputField).toBeEnabled();
    await expect(loginPage.passwordInputField).toBeVisible();
    await expect(loginPage.passwordInputField).toBeEnabled();
    await loginPage.userNameInputField.fill(ConfigurationReader().id);
    await loginPage.passwordInputField.fill(ConfigurationReader().password);
    await loginPage.loginButton.click();

    // region : Inventory Page

    await expect(inventoryPage.pageHeader).toBeVisible();
    await expect(inventoryPage.productsTitle).toBeVisible();

    // Adding 3 random items to the cart
    await inventoryPage.addRandomItems(3);
    await expect(inventoryPage.cartIcon).toBeVisible();
    await expect(inventoryPage.cartIcon).toBeEnabled();
    await inventoryPage.cartIcon.click();

    // region : Cart Page

    await expect(cartPage.pageHeader).toBeVisible();
    await expect(cartPage.checkoutButton).toBeVisible();
    await expect(cartPage.checkoutButton).toBeEnabled();
    await cartPage.checkoutButton.click();

    // region : Checkout

    // filling up the checkout form
    await expect(checkoutPage.pageHeader).toBeVisible();

    await expect(checkoutPage.firstNameInput).toBeEnabled();
    await checkoutPage.firstNameInput.fill(generateRandomString(4));
    await checkoutPage.continueButton.click();
    await expect(checkoutPage.lastNameRequiredError).toBeVisible();

    await expect(checkoutPage.lastNameInput).toBeVisible();
    await expect(checkoutPage.lastNameInput).toBeEnabled();
    await checkoutPage.lastNameInput.fill(generateRandomString(4));
    await checkoutPage.continueButton.click();
    await expect(checkoutPage.zipOrPostCodeRequiredError).toBeVisible();   

    await expect(checkoutPage.postalCodeInput).toBeVisible();
    await expect(checkoutPage.postalCodeInput).toBeEnabled();
    await checkoutPage.postalCodeInput.fill(generateRandomNumber(6).toString());

    // clicking on the continue button
    await expect(checkoutPage.continueButton).toBeEnabled();
    await checkoutPage.continueButton.click();
    await expect(checkoutPage.checkoutOverviewPageHeader).toBeVisible();

    await expect(checkoutPage.finishButton).toBeVisible();
    await expect(checkoutPage.finishButton).toBeEnabled();
    await checkoutPage.finishButton.click();

    // region : Confirmation page

    await expect(confirmationPage.pageHeader).toBeVisible();
    await expect(confirmationPage.confirmationMessage).toBeVisible();

    await context.close();
  });
});
