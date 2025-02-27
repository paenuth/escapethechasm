// src/global.d.ts
declare const process: {
    env: Record<string, string>;
    version: string;
  };
  
  interface Window {
    global: typeof globalThis;
  }