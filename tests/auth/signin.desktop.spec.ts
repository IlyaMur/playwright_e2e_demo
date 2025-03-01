import { signinTest as test } from '../../fixtures/tests';
import { allureSuiteInfo, allureTestInfo } from '../../utils/allure';
import { AllureOwner, AllurePlatform, AllureSeverity, AllureFeature } from '../../constants/allure';

test.beforeEach(async () => {
  await allureSuiteInfo({ testFeature: AllureFeature.SIGNIN, testPlatform: AllurePlatform.WEB });
});

test('User login', { tag: ['@smoke', '@signin'] }, async ({ accountPage, signinPage, password, email }) => {
  await allureTestInfo({ testId: '43', testSeverity: AllureSeverity.CRITICAL, testOwner: AllureOwner.IVAN_IVANOV });

  await signinPage.loginUser({ email, password });
  await accountPage.visit();
  await accountPage.assertUserData(email);
});
