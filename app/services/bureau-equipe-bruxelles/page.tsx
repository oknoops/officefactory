import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Maximize2, Monitor, Users, Layers } from 'lucide-react';

export const metadata = {
    title: 'Bureau d\'équipe Bruxelles | Location Plateau Privatif | Office Factory',
    description: 'Louez un bureau pour votre équipe à Bruxelles. Espace privatif sur mesure pour PME et startups à Uccle. Flexibilité et services inclus.',
    keywords: 'location bureau Bruxelles, bureau flexible Bruxelles, bureau équipe Bruxelles, plateau privatif Bruxelles',
};

export default function TeamOfficePage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-[#F8F9FA]">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div className="max-w-xl">
                        <span className="text-[#E63946] font-semibold tracking-wider uppercase mb-2 block">
                            Croissance & Flexibilité
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1D1D1B] leading-tight">
                            Bureaux d'équipe et plateaux privatifs
                        </h1>
                        <p className="text-xl text-[#6C757D] mb-8 leading-relaxed">
                            Offrez à votre équipe un espace de travail dédié et inspirant. <strong className="text-[#1D1D1B]">Location bureau Bruxelles</strong> modulable pour accompagner votre croissance.
                        </p>
                        <a href="/contact" className="btn btn-primary text-base px-8 py-3 font-semibold rounded-full">
                            Demander un devis personnalisé
                        </a>
                    </div>
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/modernofficebuilding.webp"
                            alt="Bureau équipe Bruxelles - Office Factory"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Features Breakdown */}
            <section className="py-20">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-12 text-[#1D1D1B] text-center">
                        Un espace qui s'adapte à vous
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mx-auto mb-4">
                                <Users size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Espace Dédié</h3>
                            <p className="text-sm text-[#6C757D]">Un bureau fermé uniquement pour votre équipe, de 2 à 20 personnes.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mx-auto mb-4">
                                <Maximize2 size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Extensible</h3>
                            <p className="text-sm text-[#6C757D]">Agrandissez votre espace en fonction de vos recrutements.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mx-auto mb-4">
                                <Monitor size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Prêt à l'emploi</h3>
                            <p className="text-sm text-[#6C757D]">Câblage réseau, mobilier et infrastructure IT déjà installés.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mx-auto mb-4">
                                <Layers size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Sur mesure</h3>
                            <p className="text-sm text-[#6C757D]">Nous aménageons l'espace selon votre culture d'entreprise.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section - Team Office Specific */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6 text-[#1D1D1B]">
                        Une solution sur mesure pour votre PME
                    </h2>
                    <p className="text-xl text-[#6C757D] mb-8">
                        Chaque entreprise est unique. Nous configurons votre bureau idéal avec un tarif tout compris transparent.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a href="/contact" className="btn btn-primary px-8 py-3 rounded-full font-semibold">
                            Contacter notre équipe commerciale
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
