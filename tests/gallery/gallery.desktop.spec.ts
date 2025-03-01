import { AllureFeature, AllurePlatform, AllureSeverity, AllureOwner } from '../../constants/allure';
import { galleryTest as test } from '../../fixtures/tests';
import { shopItemsMock } from '../../mocks/shopItems';
import { allureSuiteInfo, allureTestInfo } from '../../utils/allure';

test.beforeEach(async () => {
  await allureSuiteInfo({ testFeature: AllureFeature.BASKET, testPlatform: AllurePlatform.WEB });
});

test('Add items to basket', { tag: ['@smoke', '@gallery'] }, async ({ galleryPage, paymentPage }) => {
  await allureTestInfo({ testId: '45', testSeverity: AllureSeverity.CRITICAL, testOwner: AllureOwner.IVAN_IVANOV });

  const { astronautItem, ballonItem, landscapeItem, zebraItem } = shopItemsMock;
  await galleryPage.addToBasket([astronautItem, landscapeItem, zebraItem, ballonItem]);
  await galleryPage.deleteFromBasket([zebraItem]);
  await paymentPage.visit();
  await paymentPage.assertTotalValue(galleryPage.basket.totalPrice);
});
