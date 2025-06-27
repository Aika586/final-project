// const { expect } = require('@wdio/globals')
// const LoginPage = require('../pageobjects/login.page')
// const SecurePage = require('../pageobjects/secure.page')

const LoginPage = require("../pageobjects/login.page");
const assert = require("assert");
const { expect } = require("@wdio/globals");
const users = require("../../data/credentials");

describe("SauceDemo Login Tests", () => {
  beforeEach(async () => {
    await LoginPage.open();
  });

  it("UC-1: Should show error on empty credentials", async () => {
    await LoginPage.login("", "");
    await LoginPage.clearInputs();
    await LoginPage.btnLogin.click();
    await expect(LoginPage.errorMessage).toBeDisplayed();

    await expect(LoginPage.errorMessage).toHaveText(/Username is required/i);
  });

  it("UC-2: Should show error when password is missing", async () => {
    await LoginPage.inputUsername.setValue("testuser");
    await LoginPage.btnLogin.click();
    await expect(LoginPage.errorMessage).toBeDisplayed();
    await expect(LoginPage.errorMessage).toHaveText(/Password is required/i);
  });

  users.forEach(({ username }) => {
    it(`UC-3: Should log in with valid credentials (${username}) and have title -Swag Labs`, async () => {
      await LoginPage.login(String(username), "secret_sauce");
      await expect(browser).toHaveTitle("Swag Labs");
    });
  });
});
