import { expect, test } from '@playwright/test';
import { BaseElement } from './BaseElement';

export class Input extends BaseElement {
  async hasValue(expectedValue: string) {
    await test.step(`"${this.name}" is visible`, async () => {
      await expect(this.locator).toHaveValue(expectedValue);
    });
  }

  async clear() {
    await test.step(`Clear "${this.name}"`, async () => {
      await this.locator.fill(''); 
    });
  }

  async typeText(text: string) {
    await test.step(`Type text ${text} to "${this.name}"`, async () => {
      await this.locator.fill(text);
    });
  }
}
