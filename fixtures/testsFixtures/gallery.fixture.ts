import { Fixtures, request } from '@playwright/test';
import { WebRoute } from '../../constants/routes';
import { PageContextFixture } from '../contexts/staticMock.fixture';
import { createTestUser } from '../../services/users';

export type GalleryContextFixture = {
  gallerySetup: void;
};

export const galleryTestFixture: Fixtures<GalleryContextFixture, PageContextFixture> = {
  gallerySetup: [
    async ({ contextPage, email, password }, use) => {
      await createTestUser({ email, password }, await request.newContext());
      await contextPage.goto(WebRoute.GALLERY);
      await use();
    },
    { auto: true }
  ]
};
