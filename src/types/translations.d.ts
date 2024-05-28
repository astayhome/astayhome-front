type TranslationsFromServer = {
  name?: string;
  description?: string;
  city?: string;
  country?: string;
  address?: string;
  type?: string;
  category?: string;
  title?: string;
};

type DefaultTranslate = Record<string, TranslationsFromServer>;
