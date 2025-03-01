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

2. Установить зависимости:
   ```sh
   make install
   ```

3. Запустить тесты:
   ```sh
   make test # запуск всего сюита
   make test-mobile # запуск тестов под мобильный флоу
   make test-allure # запуск тестов с аллюр
   ```

### Docker

Собрать и запустить проект в docker-контейнере (`Dockerfile` предоставлен только в качестве демо, не для прода):
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

В `Makefile` представлены основные CLI-команды для управления проектом.