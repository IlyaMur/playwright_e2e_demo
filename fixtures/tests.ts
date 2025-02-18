import { test as base } from '@playwright/test';
import { commonUtilsFixture } from './utils/common.fixture';
import { mergeFixtures } from '../utils/fixtures';
import { PageContextFixture, staticMockContextFixture } from './contexts/staticMock.fixture';
import { SignupContextFixture, signupTestFixture } from './testsFixtures/signup.fixture';
import { LoginContextFixture, loginTestFixture } from './testsFixtures/signin.fixture';
import { PageObjectsFixture, pageObjectsDesktopFixture } from './pageObjectsFixtures/desktop.fixture';
import { pageObjectsMobileFixture } from './pageObjectsFixtures/mobile.fixture';

export const signupDesktopTest = base.extend<PageObjectsFixture & SignupContextFixture & PageContextFixture>(
  mergeFixtures(pageObjectsDesktopFixture, signupTestFixture, commonUtilsFixture, staticMockContextFixture)
);

export const signupMobileTest = base.extend<PageObjectsFixture & SignupContextFixture & PageContextFixture>(
  mergeFixtures(pageObjectsMobileFixture, signupTestFixture, commonUtilsFixture, staticMockContextFixture)
);

export const loginTest = base.extend<PageObjectsFixture & LoginContextFixture & PageContextFixture>(
  mergeFixtures(pageObjectsMobileFixture, loginTestFixture, commonUtilsFixture, staticMockContextFixture)
);
