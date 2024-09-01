import { test, expect } from "@playwright/test";
import { LoginPage } from "../page-objects/LoginPage";

test.describe.only("Login and Logout Scnearios", () => {
    let loginPage:LoginPage
    //Go to link before each test case hook.
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        await loginPage.visit()

    }
    )

    test('login test', async ({ page }) => {
        // await loginPage.login('wrong', 'right')
        // await loginPage.assertErrorMessage()
        await loginPage.loginWithCorrectCredentials()
        await page.pause()
        await loginPage.assertPageTitle()
    }
    )
}
)
