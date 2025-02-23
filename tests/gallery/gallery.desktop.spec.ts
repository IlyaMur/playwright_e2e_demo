import { galleryTest } from '../../fixtures/tests';
import { galleryItemsMock } from '../../mocks/galleryCards';

galleryTest('Add items to basket', { tag: ['@smoke', '@gallery'] }, async ({ galleryPage, contextPage, paymentPage }) => {
  const { astronautItem, ballonItem, landscapeItem, zebraItem } = galleryItemsMock;

  await galleryPage.addToBasket([astronautItem, landscapeItem, zebraItem, ballonItem]);
  await galleryPage.deleteFromBasket([zebraItem]);
  const totalPrice = await galleryPage.basket.getTotalPrice();

  await paymentPage.visit();
  await paymentPage.assertTotalValue(totalPrice);
  await contextPage.pause();
});
