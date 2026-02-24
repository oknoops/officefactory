import { Component } from 'lucide-react';
import Image from 'next/image';
import Script from 'next/script'; // Import Script for Odoo external form embedding if needed
// Or simple link

import { FC } from 'react';
import NewsletterForm from './NewsletterForm';

const Footer: FC = () => {
    return (
        <footer className="bg-[#F8F9FA] pt-16 pb-8 border-t border-gray-200">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Column 1: Brand */}
                    <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="relative w-40 h-10">
                                <Image
                                    src="/logo.webp"
                                    alt="Office Factory Logo"
                                    fill
                                    style={{ objectFit: 'contain', objectPosition: 'left' }}
                                />
                            </div>
                        </div>
                        <p className="text-[#6C757D] mb-4">
                            842 Chaussée d'Alsemberg,<br />
                            1180 Uccle, Belgique
                        </p>
                        <div className="flex gap-4">
                            {/* Social icons if any - Screenshot cut off */}
                        </div>
                    </div>

                    {/* Column 2: Links */}
                    <div className="col-span-1">
                        <h4 className="font-bold mb-4 text-[#1D1D1B]">Office Factory</h4>
                        <ul className="space-y-2 text-[#6C757D]">
                            <li><a href="/a-propos" className="hover:text-[#E63946]">À propos</a></li>
                            <li><a href="/contact" className="hover:text-[#E63946]">Contactez-nous</a></li>
                            <li><a href="/contact" className="hover:text-[#E63946]">Domiciliez votre entreprise</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Nos Offres */}
                    <div className="col-span-1">
                        <h4 className="font-bold mb-4 text-[#1D1D1B]">Nos Offres</h4>
                        <ul className="space-y-2 text-[#6C757D]">
                            <li><a href="/nos-services" className="hover:text-[#E63946]">Toutes nos offres</a></li>
                            <li><a href="/services/domiciliation-bruxelles" className="hover:text-[#E63946]">Domiciliation d'entreprise</a></li>
                            <li><a href="/services/coworking-bruxelles" className="hover:text-[#E63946]">Coworking</a></li>
                            <li><a href="/services/bureau-individuel-bruxelles" className="hover:text-[#E63946]">Bureau individuel</a></li>
                            <li><a href="/services/bureau-equipe-bruxelles" className="hover:text-[#E63946]">Bureau d'équipe</a></li>
                            <li><a href="/services/demarches-administratives" className="hover:text-[#E63946]">Démarches administratives</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="col-span-1">
                        <h4 className="font-bold mb-4 text-[#1D1D1B]">Contact</h4>
                        <ul className="space-y-2 text-[#6C757D]">
                            <li><a href="mailto:hello@officefactory.be" className="hover:text-[#E63946]">hello@officefactory.be</a></li>
                            <li><a href="tel:+32471794552" className="hover:text-[#E63946]">+32 471 79 45 52</a></li>
                        </ul>
                    </div>

                    {/* Column 5: Newsletter */}
                    <div className="col-span-1">
                        <h4 className="font-bold mb-4 text-[#1D1D1B]">Newsletter</h4>
                        <p className="text-[#6C757D] text-sm mb-4">
                            Rejoignez notre newsletter pour recevoir nos dernières actualités.
                        </p>
                        {/* 
                This form submits to Odoo. 
                Typically Odoo forms post to /website_mass_mailing/subscribe 
                or use an iframe.
                Since this is an external site, we should use a simple form acting as a proxy or link.
                However, user asked to "Connect odoo to a newsletter subscription banner".
                The best way is a form action pointing to the Odoo instance if CORS allows, 
                or we just simulate it visually and ask user for the endpoint.
            */}
                        <NewsletterForm />
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 text-center text-sm text-[#6C757D]">
                    <p>© 2026 Office Factory. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
