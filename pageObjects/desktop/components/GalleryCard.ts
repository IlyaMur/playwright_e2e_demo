import { Locator } from '@playwright/test';
import { TextElement } from '../../pageElements/TextField';
import { Button } from '../../pageElements/Button';
import test from '@playwright/test';

export class GalleryCard {
  public readonly name: TextElement;
  public readonly price: TextElement;
  public readonly basketButton: Button;

  constructor(cardLocator: Locator) {
    this.name = new TextElement('Card title', cardLocator.getByTestId('product-title'));
    this.price = new TextElement('Card price', cardLocator.locator('div.product-price[datatype="product-price"]'));
    this.basketButton = new Button('Add to Basket button', cardLocator.getByTestId('product-button'));
  }

  async getName(): Promise<string> {
    return (await this.name.getTextContent()) || '';
  }

  async getPrice(): Promise<string> {
    return (await this.price.getTextContent()) || '';
  }

  async clickBasketButton() {
    await test.step(`Click to basket button: ${await this.getName()}`, async () => {
      await this.basketButton.click();
    });
    return this;
  }

  async checkCard() {
    await test.step(`Check gallery card: ${await this.getName()}`, async () => {
      await this.name.isVisible();
      await this.price.isVisible();
      await this.basketButton.isVisible();
      await this.basketButton.isClickable();
    });
    return this;
  }
}
