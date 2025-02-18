import { signupDesktopTest as test } from '../../fixtures/tests';
import { suite } from 'allure-js-commons';
import { allureTestInfo } from '../../services/allure/allure';

test.beforeEach(() => suite('Registration'));

test(
  'User registration',
  { tag: ['@smoke', '@signup'] },
  async ({ signupPage, accountPage, signinPage, password, email }) => {
    await allureTestInfo({ testId: '42', testSeverity: 'Critical' });
    
    await signinPage.goToSignupButton.click();
    await signupPage.submitRegisterForm({ email, password });

    await accountPage.assertUserData(email);
  }
);
