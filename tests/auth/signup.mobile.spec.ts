import { signupMobileTest as test } from '../../fixtures/tests';

test(
  'User registration',
  { tag: ['@smoke', '@signup'] },
  async ({ accountPage, signupPage, signinPage, password, email }) => {
    await signinPage.goToSignupButton.click();
    await signupPage.submitRegisterForm({ email, password });

    await accountPage.assertUserData(email);
  }
);
