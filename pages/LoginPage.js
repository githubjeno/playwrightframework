import { Page, expect } from "@playwright/test";
//exports.LoginPage=
 class LoginPage {
  

  constructor(page) {
    this.page=page
    this.usernameInputSelector =this.page.locator("#username");
    this.usernameInputSelectors = ["#username",'input[name="username"]', ".username", "//*[@id='username]"];
    this.passwordInputSelector =this.page.locator("#password");
    this.loginButtonSelector =this.page.locator("#Login");
  }

  async quickLogin(username,password) {
    await this.navigateToLoginPage();
    await this.fillUsername(username);
    await this.fillPassword(password);
    return await this.clickLoginButton();
  }

  async navigateToLoginPage() {
    await this.page.goto("https://login.salesforce.com");
    logger.info("Navigated to login.salesforce.com");
  }

  async fillUsername(username) {
    await this.page.locator(this.usernameInputSelector).fill(username);
    logger.info("Filled username");
  }

  async fillUsername_selfheal(username) {
    let usernameInputLocator = await findValidElement(this.page,this.usernameInputSelectors );
    await usernameInputLocator?.fill(username);
    const enteredValue = await usernameInputLocator?.inputValue();
    expect(enteredValue).toBe(username);
   
  }

  async fillPassword(password) {
    await this.page.locator(this.passwordInputSelector).fill(password);
    logger.info("Filled pasword");
  }

  async clickLoginButton() {
    await this.page
      .locator(this.loginButtonSelector)
      .click()
      .catch((error) => {
        logger.error(`Error clicking login button: ${error}`);
        throw error; // rethrow the error if needed
      })
      .then(() => logger.info("Clicked login button"));

    const homePage = new HomePage(this.page);
    return homePage;
  }
}
module.exports = {LoginPage}