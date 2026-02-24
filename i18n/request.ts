import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;
    console.log('getRequestConfig resolved requestLocale:', locale);

    if (!locale || !routing.locales.includes(locale as any)) {
        console.log('Locale not included or undefined, falling back to defaultLocale');
        locale = routing.defaultLocale;
    }

    try {
        const messages = (await import(`../messages/${locale}.json`)).default;
        console.log('Messages loaded successfully for locale:', locale);
        return {
            locale,
            messages
        };
    } catch (error) {
        console.error('Error loading messages in request.ts:', error);
        notFound();
    }
});
