import { Locator, Page } from '@playwright/test';
import { WebRoute } from '../../constants/routes';
import { BasePage } from '../BasePage';
import { GalleryCard } from './components/GalleryCard';
import { Basket } from './components/Basket';
import { GalleryItem } from '../../mocks/galleryCards';
import { test } from '@playwright/test';

export class GalleryPage extends BasePage {
  public readonly cards: Locator;
  public readonly basket: Basket = new Basket();
  private readonly name = 'Gallery';

  constructor(page: Page, options = { isMobile: false }) {
    super(page, WebRoute.GALLERY, options);
    this.cards = page.getByTestId('product-card');
  }

  async getAllCards(): Promise<GalleryCard[]> {
    return Promise.all(
      (await this.cards.all()).map(async (locator) => {
        return new GalleryCard(locator).checkCard();
      })
    );
  }

  async getCardByName(item: GalleryItem) {
    const cardLocator = this.cards.filter({ hasText: item.title });
    return await new GalleryCard(cardLocator).checkCard();
  }

  async addToBasket(items: GalleryItem[]) {
    await test.step(`Add to basket items: ${items.map((item) => item.title).join(', ')}`, async () => {
      for (const item of items) {
        await this.basket.addItem(await new GalleryCard(this.cards.filter({ hasText: item.title })).checkCard());
      }
    });
  }

  async deleteFromBasket(items: GalleryItem[]) {
    await test.step(`Delete from basket items: ${items.map((item) => item.title).join(', ')}`, async () => {
      for (const item of items) {
        await this.basket.deleteItem(await this.getCardByName(item));
      }
    });
  }
}
