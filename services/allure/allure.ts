import { severity, allureId } from 'allure-js-commons';

export interface AllureTestInfo {
  testId: string;
  testSeverity: string;
}

export async function allureTestInfo({ testId, testSeverity }: AllureTestInfo) {
  allureId(testId);
  severity(testSeverity);
}
