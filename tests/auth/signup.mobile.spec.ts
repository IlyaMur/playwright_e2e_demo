import { signupMobileTest as test } from '../../fixtures/tests';
import { allureSuiteInfo, allureTestInfo } from '../../utils/allure';
import { AllureOwner, AllurePlatform, AllureSeverity, AllureFeature } from '../../constants/allure';

test.beforeEach(async () => {
  await allureSuiteInfo({ testFeature: AllureFeature.SIGNIN, testPlatform: AllurePlatform.MOBILE });
});

test(
  'User registration',
  { tag: ['@smoke', '@signup'] },
  async ({ accountPage, signupPage, signinPage, password, email }) => {
    await allureTestInfo({ testId: '42', testSeverity: AllureSeverity.CRITICAL, testOwner: AllureOwner.IVAN_IVANOV });

    await signinPage.goToSignupButton.click();
    await signupPage.submitRegisterForm({ email, password });
    await accountPage.assertUserData(email);
  }
);
