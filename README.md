# Playwright E2E Demo

## О проекте

Демо-проект автоматизированного E2E-тестирования с использованием [Playwright](https://playwright.dev/) + TypeScript.  
Включает в себя примеры самих тестов, базовую структуру (Page Object, Page Elements, Fixtures), подключенный Allure, а также возможность запуска тестов как локально, так и в Docker-контейнере.

## Развертывание

### Локальная установка

Приложение по которому гоняются тесты доступно в директории `bin` - бинарник с зашитой статикой и веб-сервером.  
Доступны версии только для архитектур Apple Silicon и Linux Arm64.  

1. Подготовить .env:
   ```sh
   make env-prepare
   ```

2. Установите зависимости:
   ```sh
   make install
   ```

3. Запустите тесты:
   ```sh
   make test # запуск всего сюита
   make test-mobile # запуск тестов с эмуляцией мобильного девайса
   ```

### Docker

Собрать и запустить проект в docker-контейнере (Dockerfile только в качестве демо, не для прода):
   ```sh
   make prepare-env
   make docker-test-run
   ```

## Структура

```sh
├── bin # бинарники веб-прилы по которой гоняются тесты (запускается автоматически)
│   ├── README.md
│   ├── app_linux_arm
│   └── app_mac_arm
├── constants # константные данные для тестов (лейблы аллюр, маршруты, конфиги и т.д)
│   ├── allure.ts
│   └── routes.ts
├── fixtures # тестовые данные Playwright
│   ├── contexts
│   │   ├── types
│   │   │   └── pageObjectContext.fixture.ts
│   │   └── staticMock.fixture.ts
│   ├── pageObjectsFixtures
│   │   ├── desktop.fixture.ts
│   │   └── mobile.fixture.ts
│   ├── testsFixtures
│   │   ├── gallery.fixture.ts
│   │   ├── signin.fixture.ts
│   │   └── signup.fixture.ts
│   ├── utils
│   │   └── common.fixture.ts
│   └── tests.ts
├── mocks
│   └── shopItems.ts
├── pageObjects # реализации POM, Page Elements, Components
│   ├── components
│   │   ├── Basket.ts
│   │   ├── GalleryCard.ts
│   │   └── Navbar.ts
│   ├── elements
│   │   ├── BaseElement.ts
│   │   ├── Button.ts
│   │   ├── Input.ts
│   │   └── TextField.ts
│   └── pages
│       ├── desktop
│       │   ├── AccountPage.ts
│       │   ├── GalleryPage.ts
│       │   ├── PaymentPage.ts
│       │   ├── SigninPage.ts
│       │   └── SignupPage.ts
│       ├── mobile
│       └── BasePage.ts
├── services # доступ к API внешних сервисов
│   └── users.ts
├── tests
│   ├── auth
│   │   ├── signin.desktop.spec.ts
│   │   ├── signup.desktop.spec.ts
│   │   └── signup.mobile.spec.ts
│   └── gallery
│       └── gallery.desktop.spec.ts
├── utils
│   ├── allure.ts
│   ├── fixtures.ts
│   └── mocks.ts
```

## Пример теста

```typescript
test.beforeEach(async () => {
  await allureSuiteInfo({ testSuite: AllureSuite.BASKET, testPlatform: AllurePlatform.WEB });
});

test('Add items to basket', { tag: ['@smoke', '@gallery'] }, async ({ galleryPage, paymentPage }) => {
  await allureTestInfo({ testId: '42', testSeverity: AllureSeverity.CRITICAL, testOwner: AllureOwner.IVAN_IVANOV });

  const { astronautItem, ballonItem, landscapeItem, zebraItem } = shopItemsMock;
  await galleryPage.addToBasket([astronautItem, landscapeItem, zebraItem, ballonItem]);
  await galleryPage.deleteFromBasket([zebraItem]);
  await paymentPage.visit();
  await paymentPage.assertTotalValue(galleryPage.basket.totalPrice);
});

```

## Дополнительно

В `Makefile` предоставлены основные CLI-команды для управления проектом.