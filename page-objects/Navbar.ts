import {Locator, Page } from "@playwright/test";

export class Navbar {

    readonly page: Page
    readonly form_auth: Locator
    readonly AccountActivity: Locator
    readonly TransferFunds: Locator
    readonly PayBills: Locator
    readonly MyMoneyApp: Locator
    readonly OnlineStatements: Locator

    constructor(page: Page) {
        this.page = page
        this.form_auth = page.locator("a[href='/login']")
        this.AccountActivity = page.locator('#account_activity_tab')
        this.TransferFunds = page.locator('#transfer_funds_tab')
        this.PayBills = page.locator('#pay_bills_tab')
        this.MyMoneyApp = page.locator('#money_map_tab')
        this.OnlineStatements = page.locator('#online_statements_tab')
    }

    async clickOnTab(tabName) {
        switch (tabName) {
            case 'login form':
                await this.form_auth.click()
                break
            case 'Account Activity':
                await this.AccountActivity.click()
                break
            case 'Transfer Funds':
                await this.TransferFunds.click()
                break
            case 'Pay Bills':
                await this.PayBills.click()
                break
            case 'My Money App':
                await this.MyMoneyApp.click()
                break
            case 'Online Statements':
                await this.OnlineStatements.click()
                break
            default:
                throw new Error('Tab doesn not exist...')
        }
    }
}