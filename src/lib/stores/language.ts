import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { storage } from '$lib/utils/localStorage';

export type LanguageCode = 'en' | 'fr';

const STORAGE_KEY = 'language';
const DEFAULT_LANGUAGE: LanguageCode = 'en';
const AVAILABLE_LANGUAGES: readonly LanguageCode[] = ['en', 'fr'] as const;

function isValidLanguage(value: unknown): value is LanguageCode {
  return typeof value === 'string' && (AVAILABLE_LANGUAGES as readonly string[]).includes(value);
}

function applyDocumentLanguage(lang: LanguageCode) {
  if (!browser) return;
  document.documentElement.lang = lang;
}

function createLanguageStore() {
  const { subscribe, set } = writable<LanguageCode>(DEFAULT_LANGUAGE);

  return {
    subscribe,

    init: () => {
      if (!browser) return DEFAULT_LANGUAGE;

      const savedLanguage = storage.getItem<LanguageCode>(STORAGE_KEY, {
        defaultValue: DEFAULT_LANGUAGE,
        validate: isValidLanguage,
        serialize: false,
      });

      set(savedLanguage);
      applyDocumentLanguage(savedLanguage);

      return savedLanguage;
    },

    setLanguage: (lang: LanguageCode) => {
      if (!isValidLanguage(lang)) return;

      set(lang);

      if (browser) {
        storage.setItem(STORAGE_KEY, lang, { serialize: false });
        applyDocumentLanguage(lang);
      }
    },
  };
}

export const language = createLanguageStore();
