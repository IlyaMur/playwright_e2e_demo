import { Locator, expect, test } from '@playwright/test';

export abstract class BaseElement {
  public readonly locator: Locator;
  public readonly name: string;

  constructor(name: string, locator: Locator) {
    this.name = name;
    this.locator = locator;
  }

  async isVisible() {
    await test.step(`"${this.name}" is visible`, async () => {
      await expect(this.locator).toBeVisible();
    });
  }

  async isNotVisible() {
    await test.step(`"${this.name}" is not visible`, async () => {
      await expect(this.locator).toBeHidden();
    });
  }

  async exists() {
    await test.step(`"${this.name}" is exists`, async () => {
      await expect(this.locator).toBeAttached();
    });
  }

  async doesNotExist() {
    await test.step(`"${this.name}" doesnt exist`, async () => {
      await expect(this.locator).not.toBeAttached();
    });
  }

  async hasText(expectedText: string) {
    await test.step(`"${this.name}" has text`, async () => {
      await expect(this.locator).toHaveText(expectedText);
    });
  }

  async isClickable() {
    await test.step(`"${this.name}" is clickable`, async () => {
      await expect(this.locator).toBeVisible();
      await expect(this.locator).toBeEnabled();
    });
  }
}
