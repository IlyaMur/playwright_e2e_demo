import { GalleryCard } from './GalleryCard';
import test from '@playwright/test';

export class Basket {
  private cards: GalleryCard[] = [];

  async addItem(card: GalleryCard) {
    await test.step(`Add item ${await card.getName()} to basket:`, async () => {
      this.cards.push(card);
      await card.clickBasketButton();
    });
  }

  async deleteItem(card: GalleryCard) {
    await test.step(`Delete item ${await card.getName()} from basket:`, async () => {
      this.cards = (
        await Promise.all(
          this.cards.map(async (basketCard) =>
            (await basketCard.getName()) === (await card.getName()) ? null : basketCard
          )
        )
      ).filter((card) => card !== null);

      await card.clickBasketButton();
    });
  }

  async getTotalPrice() {
    let total = 0;

    for (const card of this.cards) {
      total += parseInt(await card.getPrice(), 10);
    }

    return total;
  }
}
