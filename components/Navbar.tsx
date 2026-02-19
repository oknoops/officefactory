'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FC, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Logo: FC = () => (
    <div className="relative w-40 h-12">
        <Image
            src="/logo.webp"
            alt="Office Factory Logo"
            fill
            style={{ objectFit: 'contain', objectPosition: 'left' }}
            priority
        />
    </div>
);

const Navbar: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                    <div className="flex items-center gap-8">
                        <Link href="/" className="font-medium hover:text-[#E63946] transition-colors">Accueil</Link>
                        <Link href="/nos-services" className="font-medium hover:text-[#E63946] transition-colors">Nos Services</Link>
                        <Link href="/a-propos" className="font-medium hover:text-[#E63946] transition-colors">À propos</Link>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <a href="https://brusselsofficefactory.odoo.com/web/login" className="btn btn-light text-sm px-4">
                            Se connecter
                        </a>
                        <a href="/contact" className="btn btn-dark text-sm px-4">
                            Domiciliez votre entreprise
                        </a>
                        <a href="/contact" className="btn btn-dark text-center text-sm px-4">
                            Contactez-nous
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 p-2 text-gray-600 hover:text-[#E63946] transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

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
                            Accueil
                        </Link>
                        <Link
                            href="/nos-services"
                            onClick={() => setIsMenuOpen(false)}
                            className="hover:text-[#E63946] border-b border-gray-100 pb-2"
                        >
                            Nos Services
                        </Link>
                        <Link
                            href="/a-propos"
                            onClick={() => setIsMenuOpen(false)}
                            className="hover:text-[#E63946] border-b border-gray-100 pb-2"
                        >
                            À propos
                        </Link>
                    </div>

                    <div className="flex flex-col gap-4 mt-4">
                        <a href="https://brusselsofficefactory.odoo.com/web/login" className="btn btn-light w-full justify-center">
                            Se connecter
                        </a>
                        <a href="/contact" className="btn btn-dark w-full justify-center">
                            Domiciliez votre entreprise
                        </a>
                        <a href="/contact" className="btn btn-primary w-full justify-center">
                            Contactez-nous
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
