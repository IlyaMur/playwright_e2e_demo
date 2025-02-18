import { signinTest as test } from '../../fixtures/tests';

test('User login', { tag: ['@smoke', '@signin'] }, async ({ accountPage, signinPage, password, email }) => {
  await signinPage.loginUser({ email, password });
  await accountPage.visit();

  await accountPage.assertUserData(email);
});
