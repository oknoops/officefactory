import Image from 'next/image';
import { FC } from 'react';

const Pricing: FC = () => {
    return (
        <section id="services" className="py-24 bg-[#F8F9FA]">
            <div className="container">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1D1D1B]">Nos Offres</h2>
                <p className="text-[#6C757D] mb-12 text-lg">
                    Une liste de prix de vos produits aide les clients potentiels à déterminer rapidement si le produit correspond à leur budget et à leurs besoins.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                        <div className="p-8 pb-4">
                            <h3 className="text-2xl font-bold mb-2">Domiciliation d'entreprise</h3>
                            <div className="text-sm font-medium text-[#6C757D] mb-1">À partir de</div>
                            <div className="text-4xl font-bold text-[#1D1D1B]">
                                79,00 € <span className="text-base font-normal text-[#6C757D]">/ mois</span>
                            </div>
                            <ul className="mt-6 space-y-2">
                                <li className="flex items-start gap-2 text-[#6C757D] text-sm font-medium">
                                    <svg className="w-5 h-5 text-[#E63946] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Adresse officielle à Bruxelles
                                </li>
                                <li className="flex items-start gap-2 text-[#6C757D] text-sm font-medium">
                                    <svg className="w-5 h-5 text-[#E63946] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Archivage du courrier pour réception
                                </li>
                                <li className="flex items-start gap-2 text-[#6C757D] text-sm font-medium">
                                    <svg className="w-5 h-5 text-[#E63946] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Accès aux salles de réunion (en option)
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-64 w-full mt-auto">
                            <Image
                                src="https://images.unsplash.com/photo-1708961462805-9949475ea462?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFpbGJveHxlbnwwfHwwfHx8MA%3D%3D"
                                alt="Domiciliation"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                        <div className="p-8 pb-4">
                            <h3 className="text-2xl font-bold mb-2">Coworking</h3>
                            <div className="text-sm font-medium text-[#6C757D] mb-1">À partir de</div>
                            <div className="text-4xl font-bold text-[#1D1D1B]">
                                149,00 € <span className="text-base font-normal text-[#6C757D]">/ mois</span>
                            </div>
                            <ul className="mt-6 space-y-2">
                                <li className="flex items-start gap-2 text-[#6C757D] text-sm font-medium">
                                    <svg className="w-5 h-5 text-[#E63946] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Accès 24h/24 – 7j/7
                                </li>
                                <li className="flex items-start gap-2 text-[#6C757D] text-sm font-medium">
                                    <svg className="w-5 h-5 text-[#E63946] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    WiFi & internet haut débit
                                </li>
                                <li className="flex items-start gap-2 text-[#6C757D] text-sm font-medium">
                                    <svg className="w-5 h-5 text-[#E63946] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Archivage du courrier pour réception
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-64 w-full mt-auto">
                            <Image
                                src="https://plus.unsplash.com/premium_photo-1684769161054-2fa9a998dcb6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y293b3JraW5nfGVufDB8fDB8fHww"
                                alt="Coworking"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                        <div className="p-8 pb-4">
                            <h3 className="text-2xl font-bold mb-2">Bureau individuel</h3>
                            <div className="text-sm font-medium text-[#6C757D] mb-1">À partir de</div>
                            <div className="text-4xl font-bold text-[#1D1D1B]">
                                249,00 € <span className="text-base font-normal text-[#6C757D]">/ mois</span>
                            </div>
                            <ul className="mt-6 space-y-2">
                                <li className="flex items-start gap-2 text-[#6C757D] text-sm font-medium">
                                    <svg className="w-5 h-5 text-[#E63946] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Espace privé fermé avec accès 24/7
                                </li>
                                <li className="flex items-start gap-2 text-[#6C757D] text-sm font-medium">
                                    <svg className="w-5 h-5 text-[#E63946] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Possibilité de domiciliation
                                </li>
                                <li className="flex items-start gap-2 text-[#6C757D] text-sm font-medium">
                                    <svg className="w-5 h-5 text-[#E63946] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Archivage du courrier pour réception
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-64 w-full mt-auto">
                            <Image
                                src="https://plus.unsplash.com/premium_photo-1723823035067-adef00deb8ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHByaXZhdGUlMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D"
                                alt="Bureau individuel"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
