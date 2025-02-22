import { expect, test } from '@playwright/test';
import { BaseElement } from './BaseElement';

export class TextField extends BaseElement {
  async hasValue(expectedValue: string) {
    await test.step(`"${this.name}" has expected value: ${expectedValue}`, async () => {
      await expect(this.locator).toHaveValue(expectedValue);
    });
  }

  async containsValue(expectedSubstring: string) {
    await test.step(`"${this.name}" contains substring: ${expectedSubstring}`, async () => {
      await expect(this.locator).toContainText(expectedSubstring);
    });
  }
}
