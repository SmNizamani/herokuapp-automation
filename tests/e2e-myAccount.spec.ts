import { test, expect } from "@playwright/test";
import { LoginPage } from "../page-objects/LoginPage";
import { myAccPage } from "../page-objects/myaccPage";

test.describe.only("Login and Logout Scnearios", () => {
    let loginPage:LoginPage
    let myacc:myAccPage
    //Go to link before each test case hook.
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        myacc = new myAccPage(page)
        await loginPage.visit()
        await loginPage.loginWithCorrectCredentials()

    }
    )

    test('login test', async ({ page }) => {
        await myacc.editFirstName()
    }
    )
}
)
