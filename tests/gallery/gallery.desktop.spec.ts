import test from '@playwright/test';
import { AllureSuite, AllurePlatform, AllureSeverity, AllureOwner } from '../../constants/allure';
import { galleryTest } from '../../fixtures/tests';
import { shopItemsMock } from '../../mocks/shopItems';
import { allureSuiteInfo, allureTestInfo } from '../../utils/allure';

test.beforeEach(async () => {
  await allureSuiteInfo({ testSuite: AllureSuite.BASKET, testPlatform: AllurePlatform.WEB });
});

galleryTest('Add items to basket', { tag: ['@smoke', '@gallery'] }, async ({ galleryPage, paymentPage }) => {
  await allureTestInfo({ testId: '45', testSeverity: AllureSeverity.CRITICAL, testOwner: AllureOwner.IVAN_IVANOV });

  const { astronautItem, ballonItem, landscapeItem, zebraItem } = shopItemsMock;
  await galleryPage.addToBasket([astronautItem, landscapeItem, zebraItem, ballonItem]);
  await galleryPage.deleteFromBasket([zebraItem]);
  await paymentPage.visit();
  await paymentPage.assertTotalValue(galleryPage.basket.totalPrice);
});
