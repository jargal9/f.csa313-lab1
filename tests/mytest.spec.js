import { test, expect } from '@playwright/test';

test('амжилттай нэвтрэх', async ({ page }) => {
  // SauceDemo веб сайтыг нээх
  await page.goto('https://www.saucedemo.com');

  // Хэрэглэгчийн нэр болон нууц үгийг зөв оруулах
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');

  // Login товчийг дарах
  await page.getByRole('button', { name: 'Login' }).click();

  // Нэвтэрсний дараа 'Products' гэсэн текст дэлгэцэнд харагдаж байгаа эсэхийг шалгах
  await expect(
    page.getByText('Products', { exact: true })
  ).toBeVisible();

  // Нэвтэрсний дараа зөв URL руу орсон эсэхийг шалгах
  await expect(page).toHaveURL(/fail.html/);

  // Logout хийх
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();

  // Login хуудас руу буцсан эсэхийг шалгах
  await expect(page).toHaveURL(/saucedemo\.com\/?$/);
  await expect(page.getByPlaceholder('Username')).toBeVisible();

});

test('амжилтгүй нэвтрэх', async ({ page }) => {
  // SauceDemo веб сайтыг нээх
  await page.goto('https://www.saucedemo.com');

  // Зөв username оруулан, буруу password оруулах
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('wrong_password');

  // Login товчийг дарах
  await page.getByRole('button', { name: 'Login' }).click();

  // Алдааны мессеж харагдаж байгаа эсэхийг шалгах
  await expect(
    page.getByText(
      'Epic sadface: Username and password do not match any user in this service',
      { exact: true }
    )
  ).toBeVisible();
});

test('бараа сагсанд нэмэх', async ({ page }) => {
  // SauceDemo веб сайтыг нээх
  await page.goto('https://www.saucedemo.com');

  // Нэвтрэн орох
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // Products хуудас нээгдсэн эсэхийг шалгах
  await expect(
    page.getByText('Products', { exact: true })
  ).toBeVisible();

  // Эхний барааг сагсанд нэмэх
  await page.getByRole('button', { name: 'Add to cart' }).first().click();

  // Сагсны тоо 1 болсон эсэхийг шалгах
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // Logout хийх
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();

  // Login хуудас руу буцсан эсэхийг шалгах
  await expect(page).toHaveURL(/saucedemo\.com\/?$/);
  await expect(page.getByPlaceholder('Username')).toBeVisible();
});