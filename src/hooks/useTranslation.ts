import { useTranslations } from 'next-intl';
import { useTheme } from '@/context/ThemeContext';

export function useTranslation() {
  const t = useTranslations();
  const { language, isRTL } = useTheme();
  
  return {
    t,
    language,
    isRTL,
    dir: isRTL ? 'rtl' : 'ltr'
  };
} 