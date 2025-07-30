import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.c78dd1c52c55489da1fbeaee77cc4014',
  appName: 'tales-from-grandma',
  webDir: 'dist',
  // Remove server config for production builds
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