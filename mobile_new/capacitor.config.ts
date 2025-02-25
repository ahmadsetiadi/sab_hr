import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'as.hr.sinar',
  appName: 'sinar',
  webDir: 'www',
  appVersion: '1.1.1',
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
    },
    StatusBar: {
      overlaysWebView: false,
      style: "DARK",
      backgroundColor: "#ffffffff",
    },
  }
};

export default config;
