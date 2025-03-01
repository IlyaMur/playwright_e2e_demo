declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CI?: '1' | '0';
      BASE_URL: string;
      LOCAL_APP: 'app_mac_arm' | 'app_linux_arm' | 'app_linux_amd64';
      CI_APP: 'app_mac_arm' | 'app_linux_arm' | 'app_linux_amd64';
    }
  }
}

export {};
