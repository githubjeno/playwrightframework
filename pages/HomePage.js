import { Page, expect } from "@playwright/test";


export default class HomePage {
   serviceTitleLocator = "Service";
   contactsLinkLocator = "Contacts";

  constructor( Page) {
    this.page=page
  }

  async expectServiceTitleToBeVisible() {
    await expect(this.page.getByTitle(this.serviceTitleLocator)).toBeVisible({
      timeout: 15000,
    }).catch((error) => {
      logger.error(`Error clicking login button: ${error}`);
      throw error; // rethrow the error if needed
    }).then(()=>logger.info("Service Title is visible"));
  }


  async navigateToContactTab(){

    await expect(this.page.getByRole('link', { name: this.contactsLinkLocator })).toBeVisible();
    logger.info("Contacts Tab is visible")
    await this.page.getByRole('link', { name: this.contactsLinkLocator }).click();
    logger.info("Contacts Tab is clicked")
    return new ContactPage(this.page);
    
  }

  async navigateToCaseTab(){

    await expect(this.page.getByRole('link', { name: this.contactsLinkLocator })).toBeVisible();
    logger.info("Contacts Tab is visible")
    await this.page.getByRole('link', { name: this.contactsLinkLocator }).click();
    logger.info("Contacts Tab is clicked")
    return new ContactPage(this.page);
    
  }
}