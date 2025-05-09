exports.InventoryPage = class InventoryPage {
    constructor(page) {
        this.page = page;
        this.sortDropdown = '[data-test="product_sort_container"]';
        this.itemPrices = '.inventory_item_price';
        this.backpackAddBtn = '[data-test="add-to-cart-sauce-labs-backpack"]';
        this.backpackRemoveBtn = '[data-test="remove-sauce-labs-backpack"]';
        this.cartBadge = '.shopping_cart_badge';
        this.cartLink = '.shopping_cart_link';
        this.continueShoppingBtn = '#continue-shopping';
        this.menuBtn = '#react-burger-menu-btn';
        this.logoutLink = '#logout_sidebar_link';
        this.itemName = '.inventory_item_name';
        this.itemDesc = '.inventory_item_desc';
        this.footer = '.footer_copy';
        this.resetAppBtn = '#reset_sidebar_link';
    }

    async getFirstItemName() {
        return await this.page.locator(this.itemName).first().textContent();
    }

    async getFirstItemDescription() {
        return await this.page.locator(this.itemDesc).first().textContent();
    }

    async addBackpackToCart() {
        await this.page.click(this.backpackAddBtn);
    }

    async openCart() {
        await this.page.click(this.cartLink);
    }

    async continueShopping() {
        await this.page.click(this.continueShoppingBtn);
    }

    async openMenu() {
        await this.page.click(this.menuBtn);
    }

    async resetAppState() {
        await this.page.click(this.resetAppBtn);
    }

    async getFooterText() {
        return await this.page.locator(this.footer).textContent();
    }
};
