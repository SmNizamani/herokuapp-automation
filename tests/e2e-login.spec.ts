import { test, expect } from "@playwright/test";
import { LoginPage } from "../page-objects/LoginPage";
import { Navbar } from "../page-objects/Navbar";

test.describe.only("Login and Logout Scnearios", () => {
    let loginPage:LoginPage
    let navBar:Navbar
    //Go to link before each test case hook.
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        navBar = new Navbar(page)
        await loginPage.visit()
        await navBar.clickOnTab("login form")
        await page.pause()

    }
    )

    test('Negative case for login', async ({ page }) => {
        // await loginPage.login('wrong', 'right')
        // await loginPage.assertErrorMessage()
        console.log('first case')
    }
    )

    test('Positive case for login', async ({ page }) => {
        // await loginPage.login('standard_user', 'secret_sauce')
        // const accSummaryTab = await page.locator('.title')
        // await expect(accSummaryTab).toHaveText('Products')
        // await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
        console.log('first case')
    }
    )
}
)
