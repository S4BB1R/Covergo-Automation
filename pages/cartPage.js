const { expect } = require('@playwright/test');

exports.CartPage = class CartPage {
    constructor(page) {
        this.page = page;
        this.checkoutBtn = '[data-test="checkout"]';
        this.firstName = '[data-test="firstName"]';
        this.lastName = '[data-test="lastName"]';
        this.postalCode = '[data-test="postalCode"]';
        this.continueBtn = '[data-test="continue"]';
        this.finishBtn = '[data-test="finish"]';
        this.completeHeader = '.complete-header';
    }

    async completeCheckout(first, last, postal) {
        await this.page.click(this.checkoutBtn);
        await this.page.fill(this.firstName, first);
        await this.page.fill(this.lastName, last);
        await this.page.fill(this.postalCode, postal);
        await this.page.click(this.continueBtn);
        await this.page.click(this.finishBtn);
    }

    async assertOrderSuccess() {
        await expect(this.page.locator(this.completeHeader)).toHaveText('Thank you for your order!');
    }
    async cancelCheckout() {
        await this.page.click(this.checkoutBtn);
        await this.page.click('[data-test="cancel"]');
    }

};
