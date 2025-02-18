import { Fixtures } from '@playwright/test';

export const mergeFixtures = (...fixtures: Fixtures[]): Fixtures => Object.assign({}, ...fixtures);
