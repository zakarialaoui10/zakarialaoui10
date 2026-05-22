// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    routing: {
      // false means 'en' paths are root (/) and 'ar' paths are prefixed (/ar/)
      // prefixDefault: false, 
      
      // Redirects root (/) automatically if browser preferences match another locale
      // fallbackType: 'redirect' 
      prefixDefaultLocale : true,
      
    }
  }
});
