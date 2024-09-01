import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page
    readonly loginBtn: Locator
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly submitBtn: Locator
    readonly titleText: Locator

    constructor(page: Page) {
        this.page = page
        this.usernameInput = page.locator('#input-email')
        this.passwordInput = page.locator('#input-password')
        this.loginBtn = page.locator("(//a[@role='button'])[12]")
        this.submitBtn = page.locator("input[value='Login']")
        this.titleText = page.locator("(//h2[normalize-space()='My Account'])[1]")
    }

    async visit()
    {
        await this.page.goto('https://ecommerce-playground.lambdatest.io/')
    }

    async loginWithCorrectCredentials() {
        await this.loginBtn.click()
        await this.usernameInput.fill('smnizamani@gmail.com')
        await this.passwordInput.fill('123456')
        await this.submitBtn.click()
    }

    async assertPageTitle() {
        await expect(this.titleText).toContainText('My Account')
    }
}
