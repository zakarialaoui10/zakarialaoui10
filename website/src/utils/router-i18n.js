const SUPPORTED_LANGUAGES = ['en', 'ar', 'fr', 'es', 'de'];
const DEFAULT_LANGUAGE = 'en';

/**
 * Extracts the language prefix from a given pathname.
 * E.g., "/ar/about" -> "ar", "/contact" -> "en"
 */
export function getLanguageFromPath(pathname) {
  const segments = pathname.split('/').filter(Boolean); // Split and remove empty strings
  const firstSegment = segments[0];

  if (SUPPORTED_LANGUAGES.includes(firstSegment)) {
    return firstSegment;
  }

  return DEFAULT_LANGUAGE;
}

/**
 * Generates an internal link while maintaining the current language prefix.
 * E.g., if on /ar/, localizedLink('/dashboard') -> '/ar/dashboard'
 */
export function localizedLink(path, currentLang) {
  // Prevent duplicating the prefix if it's already there
  if (path.startsWith(`/${currentLang}/`) || path === `/${currentLang}`) {
    return path;
  }
  
  // Clean up starting slash to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // If it's the default language, you can choose to omit the prefix for cleaner URLs
  if (currentLang === DEFAULT_LANGUAGE) {
    return `/${cleanPath}`;
  }
  
  return `/${currentLang}/${cleanPath}`;
}