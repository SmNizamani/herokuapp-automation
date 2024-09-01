import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly loginBtn: Locator
    readonly errorMessage: Locator

    constructor(page: Page) {
        this.page = page
        this.usernameInput = page.locator('#user-name')
        this.passwordInput = page.locator('#password')
        this.loginBtn = page.locator('#login-button')
        this.errorMessage = page.locator('.error-message-container h3')
    }

    async visit()
    {
        await this.page.goto('https://www.saucedemo.com/')
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginBtn.click()
        
    }

    async assertErrorMessage() {
        await expect(this.errorMessage).toContainText('Epic sadface: Username and password do not match any user in this service')
    }
}
