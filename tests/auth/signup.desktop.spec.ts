import { signupDesktopTest as test } from '../../fixtures/tests';
import { allureSuiteInfo, allureTestInfo } from '../../utils/allure';
import { AllureOwner, AllurePlatform, AllureSeverity, AllureFeature } from '../../constants/allure';

test.beforeEach(async () => {
  await allureSuiteInfo({ testFeature: AllureFeature.SIGNUP, testPlatform: AllurePlatform.WEB });
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
