import test, { APIRequestContext } from '@playwright/test';
import config from '../playwright.config';
import { APIRoute } from '../constants/routes';

export interface UserData {
  email: string;
  password: string;
}

interface SignupResponse {
  token: string;
}

export async function createUser({ email, password }: UserData, request: APIRequestContext): Promise<string> {
  return await test.step(`Creating user with email: ${email}`, async () => {
    const url = new URL(APIRoute.SIGNUP, config.use?.baseURL).toString();
    const response = await request.post(url, { data: { username: email, password } });

    if (!response.ok()) {
      throw new Error(`Failed to create user: ${response.status()} ${response.statusText()}`);
    }

    const json: SignupResponse = await response.json();
    return json.token;
  });
}
