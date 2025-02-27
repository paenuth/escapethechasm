/// <reference types="vite/client" />

interface ImportMeta {
    env: {
      MODE: string;
      BASE_URL: string;
      PROD: boolean;
      DEV: boolean;
    };
  }
  
  declare module 'crypto-browserify';
  declare module 'stream-browserify';
  declare module 'assert';
  declare module 'buffer';
  declare module 'util';