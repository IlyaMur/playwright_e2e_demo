![E2E Tests](https://github.com/ilyamur/playwright_e2e_demo/actions/workflows/ci.yml/badge.svg)

# Playwright E2E Demo

## О проекте  

Демо-проект автоматизированного E2E-тестирования с использованием Playwright:
- Playwright + TypeScript
- Allure Reports
- GitHub CI Actions (allure-отчеты с CI автоматически публикуются на GitHub Pages)
- Сборка и запуск в Docker

[**Allure DEMO**](https://ilyamur.github.io/playwright_e2e_demo)

## Развертывание  

```sh
git clone https://github.com/IlyaMur/playwright_e2e_demo
cd playwright_e2e_demo
make env-prepare # подготовить .env
make install
```
Приложение по которому гоняются тесты доступно в директории `/bin` - бинарник с зашитой статикой и веб-сервером.  
Доступны версии для архитектур Apple Silicon, Linux AMD64/ARM64. В .env можно указать желаемую версию прилы.

## Запуск тестов

   ```sh
   make test # запуск всего сюита
   make test-mobile # запуск тестов под мобильный флоу
   make test-allure # запуск тестов с аллюр
   ```

## Docker

Собрать и запустить проект в `docker`-контейнере
   ```sh
   make prepare-env
   make docker-test-run
   ```

## Структура

```sh
├── bin # бинарники веб-прилы по которой гоняются тесты
├── constants # лейблы аллюр, маршруты, конфиги и т.д
├── fixtures # тестовые данные Playwright
│   ├── contexts
│   ├── pageObjectsFixtures
│   ├── testsFixtures
│   └── utils
├── mocks
├── pageObjects # реализации POM, Page Elements, Components
│   ├── components
│   ├── elements
│   └── pages
│       ├── desktop
│       └── mobile
├── services # доступ к API внешних сервисов
├── tests # сами файлы тестов
│   ├── auth
│   └── gallery
└── utils
```

## Пример теста

```typescript
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
```

## Дополнительно

В `Makefile` представлены основные CLI-команды для управления проектом.