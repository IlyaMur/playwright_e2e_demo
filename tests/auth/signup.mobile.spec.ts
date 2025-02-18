import { signupMobileTest as test } from '../../fixtures/tests';

test(
  'User registration',
  { tag: ['@smoke', '@signup'] },
  async ({ accountPage, signupPage, loginPage, password, email }) => {
    await loginPage.goToSignupButton.click();
    await signupPage.submitRegisterForm({ email, password });

    await accountPage.assertUserData(email);
  }
);
