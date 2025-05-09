const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { InventoryPage } = require('../pages/inventoryPage');
const { CartPage } = require('../pages/cartPage');

async function loginAsStandardUser(page) {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await page.waitForURL('**/inventory.html');
}

test.describe('Additional SauceDemo POM Test Cases', () => {

    test('TC1 - Should verify product description contains expected text', async ({ page }) => {
        await loginAsStandardUser(page);
        const inventory = new InventoryPage(page);
        const description = await inventory.getFirstItemDescription();
        expect(description).toContain('carry');
    });

    test('TC2 - Should reset app state and clear cart', async ({ page }) => {
        await loginAsStandardUser(page);
        const inventory = new InventoryPage(page);
        await inventory.addBackpackToCart();
        await inventory.openMenu();
        await inventory.resetAppState();
        await page.reload();
        await expect(page.locator(inventory.cartBadge)).not.toBeVisible();
    });

    test('TC3 - Should login with standard_user', async ({ page }) => {
        await loginAsStandardUser(page);
        await expect(page).toHaveURL(/.*inventory/);
    });

    test('TC4 - Should display correct item name on inventory page', async ({ page }) => {
        await loginAsStandardUser(page);
        const inventory = new InventoryPage(page);
        const itemName = await inventory.getFirstItemName();
        expect(itemName).toContain('Sauce Labs');
    });

    test('TC5 - Should verify cart badge is not visible when cart is empty', async ({ page }) => {
        await loginAsStandardUser(page);
        const inventory = new InventoryPage(page);
        await expect(page.locator(inventory.cartBadge)).not.toBeVisible();
    });

    test('TC6 - Should allow navigating back from checkout page', async ({ page }) => {
        await loginAsStandardUser(page);
        const inventory = new InventoryPage(page);
        const cart = new CartPage(page);
        await inventory.addBackpackToCart();
        await inventory.openCart();
        await cart.cancelCheckout();
        await expect(page).toHaveURL(/.*cart/);
    });

    test('TC7 - Should persist cart items across navigation', async ({ page }) => {
        await loginAsStandardUser(page);
        const inventory = new InventoryPage(page);
        await inventory.addBackpackToCart();
        await inventory.openCart();
        await inventory.continueShopping();
        await expect(page.locator(inventory.cartBadge)).toHaveText('1');
    });

    test('TC8 - Should open side menu and verify logout option', async ({ page }) => {
        await loginAsStandardUser(page);
        const inventory = new InventoryPage(page);
        await inventory.openMenu();
        await expect(page.locator(inventory.logoutLink)).toBeVisible();
    });

    test('TC9 - Should lock out user and verify specific error message', async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();
        await login.login('locked_out_user', 'secret_sauce');
        await expect(page.locator(login.errorMessage)).toContainText('Sorry, this user has been locked out.');
    });

    test('TC10 - Should verify footer copyright', async ({ page }) => {
        await loginAsStandardUser(page);
        const inventory = new InventoryPage(page);
        const footer = await inventory.getFooterText();
        expect(footer).toContain('©');
    });

});
