'use client';

import { useRouter, usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const locale = useLocale();
    const [isPending, startTransition] = useTransition();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value as 'fr' | 'en' | 'nl';
        startTransition(() => {
            router.replace(
                // @ts-expect-error -- params may contain dynamic segments like [slug]
                { pathname, params },
                { locale: nextLocale }
            );
        });
    };

    return (
        <div className="relative inline-flex items-center gap-1 bg-gray-50 text-[#1D1D1B] rounded-full px-3 py-1.5 shadow-sm border border-gray-100 hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
            <select
                value={locale}
                onChange={handleChange}
                disabled={isPending}
                className="bg-transparent text-sm font-semibold focus:outline-none cursor-pointer appearance-none pl-1 pr-4"
            >
                <option value="fr">FR</option>
                <option value="en">EN</option>
                <option value="nl">NL</option>
            </select>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-2 text-gray-500 pointer-events-none"><path d="m6 9 6 6 6-6" /></svg>
        </div>
    );
}
