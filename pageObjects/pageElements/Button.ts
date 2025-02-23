import { expect, test } from '@playwright/test';
import { BaseElement } from './BaseElement';

export class Button extends BaseElement {
  async isClickable() {
    await test.step(`"${this.name}" is clickable`, async () => {
      await expect(this.locator).toBeVisible();
      await expect(this.locator).toBeEnabled();
    });
  }

  async click() {
    await test.step(`"${this.name}" click`, async () => {
      await this.locator.click();
    });
  }

  async hasText(expectedText: string) {
    await test.step(`"${this.name}" has expected text ${expectedText}`, async () => {
      await expect(this.locator).toHaveText(expectedText);
    });
  }
}
