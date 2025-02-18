import { loginTest as test } from '../../fixtures/tests';

test('User login', { tag: ['@smoke', '@login'] }, async ({ accountPage, loginPage, password, email }) => {
  await loginPage.loginUser({ email, password });

  await accountPage.assertUserData(email);
});
