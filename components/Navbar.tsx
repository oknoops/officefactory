import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';

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
    return (
        <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
            <div className="container h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <Logo />
                </Link>
                <div className="flex-1 flex justify-between ml-12 items-center">
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
                        <a href="/contact" className="btn btn-dark text-sm px-4">
                            Contactez-nous
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
