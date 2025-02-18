declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CI?: '1' | '0';
      BASE_URL: string;
    }
  }
}

export {};
