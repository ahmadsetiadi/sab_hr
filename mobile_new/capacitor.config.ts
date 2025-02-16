import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'as.hr.sinar',
  appName: 'sinar',
  webDir: 'www',
  appVersion: '1.1.0',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#FFFFFF',
      showSpinner: false,
      androidSpinnerStyle: 'small',
      iosSpinnerStyle: 'small',
      splashFulLScreen: true,
      splashImmersive: true,
    }
  }
};

export default config;
