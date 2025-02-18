import { Page } from '@playwright/test';
import { CommonUtilsFixture } from '../../utils/common.fixture';

export type PageContextFixture = CommonUtilsFixture & {
  contextPage: Page;
};
