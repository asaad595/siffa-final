import {NextIntlClientProvider} from 'next-intl';
import {
    getMessages,
    getTranslations,
    unstable_setRequestLocale
  } from 'next-intl/server';
import '@/app/[locale]/globals.css'
const locales = ['en', 'ar']
export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
  }
  type Props = {
    children: React.ReactNode;
    params: {locale: string};
  };
 
export default async function LocaleLayout({
    children,
    params: {locale}
  }: Props) {
  // Providing all messages to the client
  // side is the easiest way to get started
 
  const messages = await getMessages();
  
  unstable_setRequestLocale(locale);
 
  return (
    <html lang={locale} dir={locale==='ar'?'rtl':'ltr'}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}