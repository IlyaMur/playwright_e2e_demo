import { severity, allureId, owner, description, label, feature } from 'allure-js-commons';
import { AllureCustomLabel, AllureOwner, AllurePlatform, AllureSeverity } from '../constants/allure';

export interface AllureSuiteInfo {
  testFeature: string;
  testPlatform: AllurePlatform;
}

export interface AllureTestInfo {
  testId: string;
  testSeverity: AllureSeverity;
  testOwner: AllureOwner;
  testDescription?: string;
}

export async function allureSuiteInfo({ testFeature: testSuite, testPlatform }: AllureSuiteInfo) {
  await feature(testSuite);
  await label(AllureCustomLabel.PLATFORM, testPlatform);
}

export async function allureTestInfo({ testId, testSeverity, testOwner, testDescription }: AllureTestInfo) {
  await allureId(testId);
  await severity(testSeverity);
  await owner(testOwner);

  if (testDescription) {
    await description(testDescription);
  }
}
