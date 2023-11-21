// @ts-check
const { test, expect } = require('@playwright/test');

const usernameInputSelector = 'input[name="USERN-nNAME"]';
const passwordInputSelector = 'input[name="PASSword"]';

//DESCRIBE SCOPE TASKNYA 
test.describe('form lOGIN', () => {

  //check case, apakah page contains title 'Swag labs'?
  test('Flow login', async ({ page }) =>{
    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveTitle(/Swag Labs/);

    //filled username
    await page.waitForSelector(usernameInputSelector);
    await page.fill(usernameInputSelector, 'standard_user');

    //filled password
    await page.waitForSelector(usernameInputSelector);
    await page.fill(passwordInputSelector, 'secret_sauce');

    //click submit
    await page.click('#login-button');
    await page.waitForLoadState('load');
    await page.goto('https://www.saucedemo.com/inventory.html');

  });

  test('Inventory', async ({ page }) =>{
  
  });

});





// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
