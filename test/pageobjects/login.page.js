const { $ } = require('@wdio/globals')
class LoginPage {
    get inputUsername() { return $("//input[@id='user-name']"); }
    get inputPassword() { return $("//input[@id='password']"); }
    get btnLogin() { return $("//input[@id='login-button']"); }
    get errorMessage() { return $("//h3[@data-test='error']"); }
    get pageTitle() { return $("//div[@class='app_logo']"); }

    async open() {
        await browser.url('/');
    }

    async login(username, password) {
        if (username !== null) await this.inputUsername.setValue(username);
        if (password !== null) await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    async clearInputs() {
        await this.inputUsername.clearValue();
        await this.inputPassword.clearValue();
    }
}

module.exports = new LoginPage();

