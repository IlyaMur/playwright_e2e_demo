import { Locator } from '@playwright/test';
import { TextElement } from '../../elements/TextField';
import { Button } from '../../elements/Button';
import test from '@playwright/test';
import { ShopItem } from '../../../mocks/shopItems';

export class GalleryCard {
  public readonly name: TextElement;
  public readonly price: TextElement;
  public readonly basketButton: Button;

  constructor(cardLocator: Locator) {
    this.name = new TextElement('Title', cardLocator.getByTestId('product-title'));
    this.price = new TextElement('Price', cardLocator.locator('div.product-price[datatype="product-price"]'));
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
  }

  async checkCard({ price, title }: ShopItem) {
    await test.step(`Assert gallery card: "${await this.getName()}" has price: ${price} and title: ${title}`, async () => {
      await this.name.isVisible();
      await this.name.containsValue(title);

      await this.price.isVisible();
      await this.price.containsValue(price.toString());

      await this.basketButton.isVisible();
      await this.basketButton.isClickable();
    });
  }
}
