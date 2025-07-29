import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.c78dd1c52c55489da1fbeaee77cc4014',
  appName: 'tales-from-grandma',
  webDir: 'dist',
  server: {
    url: 'https://c78dd1c5-2c55-489d-a1fb-eaee77cc4014.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#F5F1E8',
      androidSplashResourceName: 'splash',
      showSpinner: false
    }
  }
};

export default config;