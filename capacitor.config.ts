import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'repoducer-angular15-capacitor',
  webDir: 'dist/repoducer_angular15_capacitor',
  bundledWebRuntime: false,
  server: {
    androidScheme: "capacitor",
  }
};

export default config;
