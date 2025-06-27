// const { expect } = require('@wdio/globals')
// const LoginPage = require('../pageobjects/login.page')
// const SecurePage = require('../pageobjects/secure.page')

const LoginPage = require('../pageobjects/login.page');
const assert = require('assert');
const users=require('../../data/credentials')

describe('SauceDemo Login Tests', () => {
    beforeEach(async () => {
        await LoginPage.open();
    });

    it('UC-1: Should show error on empty credentials', async () => {
        await LoginPage.login('someuser', 'somepass');
        await LoginPage.clearInputs();
        await LoginPage.btnLogin.click();
        const error = await LoginPage.errorMessage.getText();
        assert.strictEqual(error.includes('username is required'), true);
    });

    it('UC-2: Should show error when password is missing', async () => {
        await LoginPage.inputUsername.setValue('testuser');
        await LoginPage.inputPassword.setValue('somepass');
        await LoginPage.inputPassword.clearValue();
        await LoginPage.btnLogin.click();
        const error = await LoginPage.errorMessage.getText();
        assert.strictEqual(error.includes('password is required'), true);
    });

    users.forEach(({ username}) => {
        it(`UC-3: Should log in with valid credentials (${username})`, async () => {
            await LoginPage.login(String(username),'secret_sauce');
            const title = await LoginPage.pageTitle.getText();
            assert.strictEqual(title, 'Swag Labs');
        });
    });
});

