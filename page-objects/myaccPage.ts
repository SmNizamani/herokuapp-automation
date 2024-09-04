import { expect, Page, Locator } from "@playwright/test";

export class myAccPage{

    readonly page: Page
    readonly editAccount: Locator
    readonly firstName: Locator
    readonly lastName: Locator
    readonly email: Locator
    readonly phone: Locator
    readonly continueBtn: Locator

    constructor(page: Page) {
        this.page = page
        this.editAccount = page.locator("//a[normalize-space()='Edit your account information']")
        this.firstName = page.locator('#input-firstname')
        this.lastName = page.locator('#input-lastname')
        this.email = page.locator('#input-email')
        this.phone = page.locator('#input-telephone')
        this.continueBtn = page.locator("input[value='Continue']")
    }

    async editFirstName(){
        await this.editAccount.click()
        const currentName = await this.firstName.textContent()
        console.log(currentName)
        //await this.firstName.fill("")

    }
}