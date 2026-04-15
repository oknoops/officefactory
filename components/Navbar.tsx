'use client';

import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { FC, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

const Logo: FC = () => (
    <div className="relative w-40 h-12">
        <Image
            src="/logo.webp"
            alt="Office Factory Logo"
            fill
            sizes="160px"
            style={{ objectFit: 'contain', objectPosition: 'left' }}
            priority
        />
    </div>
);

const Navbar: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const t = useTranslations('Navigation');

    return (
        <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
            <div className="container h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0 z-50">
                    <Logo />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex flex-1 justify-between ml-12 items-center">
                    {/* Links */}
                    <div className="flex items-center gap-6">
                        <Link href="/" className="font-medium hover:text-[#E63946] transition-colors py-6 whitespace-nowrap">{t('home')}</Link>

                        <div className="relative group/nav py-6">
                            <button className="font-medium hover:text-[#E63946] transition-colors flex items-center gap-1 whitespace-nowrap">
                                {t('services')}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </button>
                            <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-xl flex flex-col py-2 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-200 mt-0 border border-gray-100">
                                <Link href="/nos-services" className="px-5 py-3 text-sm hover:bg-[#F8F9FA] hover:text-[#E63946] transition-colors font-medium">{t('services_all')}</Link>
                                <Link href="/services/domiciliation-bruxelles" className="px-5 py-3 text-sm hover:bg-[#F8F9FA] hover:text-[#E63946] transition-colors text-gray-600">{t('services_domiciliation')}</Link>
                                <Link href="/services/coworking-bruxelles" className="px-5 py-3 text-sm hover:bg-[#F8F9FA] hover:text-[#E63946] transition-colors text-gray-600">{t('services_coworking')}</Link>
                                <Link href="/services/bureau-individuel-bruxelles" className="px-5 py-3 text-sm hover:bg-[#F8F9FA] hover:text-[#E63946] transition-colors text-gray-600">{t('services_bureau_individuel')}</Link>
                                <Link href="/services/bureau-equipe-bruxelles" className="px-5 py-3 text-sm hover:bg-[#F8F9FA] hover:text-[#E63946] transition-colors text-gray-600">{t('services_bureau_equipe')}</Link>
                                <Link href="/services/demarches-administratives" className="px-5 py-3 text-sm hover:bg-[#F8F9FA] hover:text-[#E63946] transition-colors text-gray-600 border-t border-gray-50 font-medium">{t('services_demarches')}</Link>
                            </div>
                        </div>

                        <Link href="/a-propos" className="font-medium hover:text-[#E63946] transition-colors py-6 whitespace-nowrap">{t('about')}</Link>

                        <Link href="/blog" className="font-medium hover:text-[#E63946] transition-colors py-6 whitespace-nowrap">{t('resources_blog')}</Link>

                        <Link href="/faq" className="font-medium hover:text-[#E63946] transition-colors py-6 whitespace-nowrap">{t('resources_faq')}</Link>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 relative ml-6">
                        <div className="mr-2">
                            <LanguageSwitcher />
                        </div>
                        <a href="https://brusselsofficefactory.odoo.com/web/login" target="_blank" rel="noopener noreferrer" className="btn btn-light text-sm px-3 whitespace-nowrap">
                            {t('login')}
                        </a>
                        <Link href="/contact" className="btn btn-dark text-sm px-3 whitespace-nowrap">
                            {t('domiciliate')}
                        </Link>
                        <Link href="/contact" className="btn btn-dark text-center text-sm px-3 whitespace-nowrap">
                            {t('contact')}
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button & Switcher */}
                <div className="md:hidden flex items-center gap-3 z-50">
                    <LanguageSwitcher />
                    <button
                        className="p-2 text-gray-600 hover:text-[#E63946] transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`
                    fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 gap-6 transition-transform duration-300 ease-in-out md:hidden h-screen w-screen
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}>
                    <div className="flex flex-col gap-6 text-lg font-medium text-gray-800">
                        <Link
                            href="/"
                            onClick={() => setIsMenuOpen(false)}
                            className="hover:text-[#E63946] border-b border-gray-100 pb-2"
                        >
                            {t('home')}
                        </Link>
                        <div className="flex flex-col gap-2 border-b border-gray-100 pb-2">
                            <span className="font-medium text-gray-400 text-sm uppercase tracking-wider mt-2">{t('services')}</span>
                            <Link href="/nos-services" onClick={() => setIsMenuOpen(false)} className="hover:text-[#E63946] pl-4">{t('services_all')}</Link>
                            <Link href="/services/domiciliation-bruxelles" onClick={() => setIsMenuOpen(false)} className="hover:text-[#E63946] pl-4 text-base text-gray-600">{t('services_domiciliation')}</Link>
                            <Link href="/services/coworking-bruxelles" onClick={() => setIsMenuOpen(false)} className="hover:text-[#E63946] pl-4 text-base text-gray-600">{t('services_coworking')}</Link>
                            <Link href="/services/bureau-individuel-bruxelles" onClick={() => setIsMenuOpen(false)} className="hover:text-[#E63946] pl-4 text-base text-gray-600">{t('services_bureau_individuel')}</Link>
                            <Link href="/services/bureau-equipe-bruxelles" onClick={() => setIsMenuOpen(false)} className="hover:text-[#E63946] pl-4 text-base text-gray-600">{t('services_bureau_equipe')}</Link>
                            <Link href="/services/demarches-administratives" onClick={() => setIsMenuOpen(false)} className="hover:text-[#E63946] pl-4 text-base text-[#1D1D1B] font-medium pt-2 mt-2 border-t border-gray-50">{t('services_demarches')}</Link>
                        </div>
                        <Link
                            href="/a-propos"
                            onClick={() => setIsMenuOpen(false)}
                            className="hover:text-[#E63946] border-b border-gray-100 pb-2"
                        >
                            {t('about')}
                        </Link>
                        <Link
                            href="/blog"
                            onClick={() => setIsMenuOpen(false)}
                            className="hover:text-[#E63946] border-b border-gray-100 pb-2"
                        >
                            {t('resources_blog')}
                        </Link>
                        <Link
                            href="/faq"
                            onClick={() => setIsMenuOpen(false)}
                            className="hover:text-[#E63946] border-b border-gray-100 pb-2"
                        >
                            {t('resources_faq')}
                        </Link>
                    </div>

                    <div className="flex flex-col gap-4 mt-4">
                        <a href="https://brusselsofficefactory.odoo.com/web/login" target="_blank" rel="noopener noreferrer" className="btn btn-light w-full justify-center">
                            {t('login')}
                        </a>
                        <Link href="/contact" className="btn btn-dark w-full justify-center">
                            {t('domiciliate')}
                        </Link>
                        <Link href="/contact" className="btn btn-primary w-full justify-center">
                            {t('getStarted')}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
