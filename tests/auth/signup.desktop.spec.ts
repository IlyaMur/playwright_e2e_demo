import { signupDesktopTest as test } from '../../fixtures/tests';
import { label, suite } from 'allure-js-commons';
import { allureTestInfo } from '../../services/allure/allure';
import { AllureCustomLabel, AllureOwner, AllurePlatform, AllureSeverity, AllureSuite } from '../../constants/allure';

test.beforeEach(async () => {
  await suite(AllureSuite.SIGNUP);
  await label(AllureCustomLabel.PLATFORM, AllurePlatform.WEB);
});

test(
  'User registration',
  { tag: ['@smoke', '@signup'] },
  async ({ signupPage, accountPage, signinPage, password, email }) => {
    await allureTestInfo({ testId: '44', testSeverity: AllureSeverity.CRITICAL, testOwner: AllureOwner.IVAN_IVANOV });

    await signinPage.goToSignupButton.click();
    await signupPage.submitRegisterForm({ email, password });
    await accountPage.assertUserData(email);
  }
);
