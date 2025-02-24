import test from '@playwright/test';
import { ShopItem } from '../../../mocks/shopItems';

export class Basket {
  private items: ShopItem[] = [];

  async addItem(item: ShopItem) {
    await test.step(`Add item ${item.title} to basket:`, async () => {
      this.items.push(item);
    });
  }

  async deleteItem(item: ShopItem) {
    await test.step(`Delete item ${item.title} from basket:`, async () => {
      this.items = this.items.filter((basketItem) => basketItem.title !== item.title);
    });
  }

  get totalPrice() {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }
}
