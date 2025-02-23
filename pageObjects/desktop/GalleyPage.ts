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
    return Promise.all((await this.cards.all()).map(async (locator) => new GalleryCard(locator)));
  }

  async getCardByName({ title }: GalleryItem) {
    const cardLocator = this.cards.filter({ hasText: title });
    const card = new GalleryCard(cardLocator);
    await card.checkCard();
    return card;
  }

  async addToBasket(items: GalleryItem[]) {
    await test.step(`Add to basket items: ${items.map((item) => `"${item.title}"`).join(', ')}`, async () => {
      for (const item of items) {
        const card = await this.getCardByName(item);
        await this.basket.addItem(item);
        await card.basketButton.click();
      }
    });
  }

  async deleteFromBasket(items: GalleryItem[]) {
    await test.step(`Delete from basket items: ${items.map((item) => `"${item.title}"`).join(', ')}`, async () => {
      for (const item of items) {
        const card = await this.getCardByName(item);
        await this.basket.deleteItem(item);
        await card.basketButton.click();
      }
    });
  }
}
