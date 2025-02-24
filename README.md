# Playwright E2E Demo

## О проекте

Этот репозиторий представляет собой демонстрационный проект автоматизированного end-to-end тестирования с использованием [Playwright](https://playwright.dev/).
Проект включает в себя примеры тестов, базовую структуру (Page Object, Page Elements, Fixtures), подключенный Allure, а также возможность запуска тестов как локально, так и в Docker-контейнере.

## Развертывание

### Локальная установка

Приложение по которому гоняются тесты доступно в директории `bin` - это бинарник с зашитой статикой и веб-сервером. К сожалению, доступны версии только для архитектур Apple Silicon и Linux Arm64.  
Для установки всех зависимостей и выполнения тестов вручную используйте `Makefile`.

1. Установите зависимости:
   ```sh
   make install
   ```

2. Запустите тесты:
   ```sh
   make test
   ```

### Docker

Доступен `Dockerfile`, который позволяет запустить демо-проект изолированно в контейнере (предназначено только для демонстрации).  
   ```sh
   make docker-test-run
   ```

## Структура проекта

- `bin/` — бинарники веб-прилы по которой гоняются тесты (запускается автоматически)
- `constants/` — константные данные для тестов (лейблы аллюр, маршруты, конфиги и т.д)
- `fixtures/` — тестовые данные Playwright
- `mocks/` — мокированные данные
- `tests/` — e2e-тесты
- `services/` — доступ к API внешних сервисов
- `pageObjects/` — реализации паттернов Page Object Model, Page Elements, Components
- `utils/` — вспомогательные утилиты

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