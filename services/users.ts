import test, { APIRequestContext } from '@playwright/test';

export interface UserData {
  email: string;
  password: string;
}

export async function createUser({ email, password }: UserData, request: APIRequestContext): Promise<string> {
  let token!: string;

  await test.step(`Creating user with email: ${email}`, async () => {
    const response = await request.post(process.env.BASE_URL + '/api/signup', { data: { username: email, password } });
    const json = await response.json();
    token = json.token;
  });

  return token;
}
