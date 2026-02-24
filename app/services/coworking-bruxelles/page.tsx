import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Wifi, Coffee, Users, Calendar } from 'lucide-react';

export const metadata = {
    title: 'Espace Coworking Bruxelles | Bureau Partagé | Office Factory',
    description: 'Découvrez notre espace coworking à Bruxelles. Bureau partagé flexible, moderne et tout équipé à Uccle. Idéal pour freelances et entrepreneurs.',
    keywords: 'espace coworking Bruxelles, bureau partagé Bruxelles, espace de travail Bruxelles, bureau flexible Bruxelles',
};

export default function CoworkingPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-[#F8F9FA]">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div className="max-w-xl">
                        <span className="text-[#E63946] font-semibold tracking-wider uppercase mb-2 block">
                            Flexibilité Totale
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1D1D1B] leading-tight">
                            Espace Coworking à Bruxelles
                        </h1>
                        <p className="text-xl text-[#6C757D] mb-8 leading-relaxed">
                            Rejoignez une communauté dynamique dans notre <strong className="text-[#1D1D1B]">espace de travail à Bruxelles</strong>. Une solution de <strong className="text-[#1D1D1B]">bureau partagé</strong> idéale pour les freelances et nomades digitaux.
                        </p>
                        <a href="/contact" className="btn btn-primary text-base px-8 py-3 font-semibold rounded-full">
                            Réserver une visite
                        </a>
                    </div>
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/modernofficebuilding.webp"
                            alt="Espace Coworking Bruxelles - Office Factory"
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
                        Tout inclus pour votre productivité
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mx-auto mb-4">
                                <Wifi size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Internet Très Haut Débit</h3>
                            <p className="text-sm text-[#6C757D]">Fibre optique pour travailler sans interruption.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mx-auto mb-4">
                                <Coffee size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Café & Détente</h3>
                            <p className="text-sm text-[#6C757D]">Espace cuisine et café à volonté pour vos pauses.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mx-auto mb-4">
                                <Users size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Communauté</h3>
                            <p className="text-sm text-[#6C757D]">Réseau d'entrepreneurs pour échanger et collaborer.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mx-auto mb-4">
                                <Calendar size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Accès 24/7</h3>
                            <p className="text-sm text-[#6C757D]">Badge d'accès sécurisé pour une liberté totale.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section - Coworking Specific */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <span className="text-sm font-bold text-[#E63946] uppercase tracking-wider">Tarification</span>
                            <h2 className="text-3xl font-bold mb-4 text-[#1D1D1B]">
                                Formules Flexibles
                            </h2>
                            <p className="text-[#6C757D] mb-6">
                                Choisissez la formule <strong className="text-[#1D1D1B]">bureau flexible Bruxelles</strong> qui vous correspond. Sans engagement de durée longue.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#E63946]"></div>
                                    <span className="text-[#1D1D1B]">Pass Journée</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#E63946]"></div>
                                    <span className="text-[#1D1D1B]">Abonnement Mensuel Illimité</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#E63946]"></div>
                                    <span className="text-[#1D1D1B]">Poste Fixe Réservé</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative">
                            <div className="absolute top-0 right-0 bg-[#E63946] text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                                POPULAIRE
                            </div>
                            <h3 className="text-xl font-bold mb-2">Coworking illimité</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-bold text-[#1D1D1B]">149€</span>
                                <span className="text-[#6C757D]">/ mois</span>
                            </div>
                            <p className="text-sm text-[#6C757D] mb-8 pb-8 border-b border-gray-100">
                                Accès illimité à l'espace partagé, internet haut débit, café, charges incluses.
                            </p>
                            <a href="/contact" className="btn btn-primary w-full py-3 rounded-lg font-semibold text-center block">
                                S'inscrire
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
