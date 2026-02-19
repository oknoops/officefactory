import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Key, Layout, CreditCard, ShieldCheck } from 'lucide-react';

export const metadata = {
    title: 'Location Bureau Individuel Bruxelles | Office Privé Uccle | Office Factory',
    description: 'Louez votre bureau individuel à Bruxelles (Uccle). Espace privé, meublé et tout compris. La solution idéale pour travailler au calme.',
    keywords: 'bureau individuel Bruxelles, location bureau Bruxelles, location bureau Uccle, bureau privé Bruxelles',
};

export default function PrivateOfficePage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-[#F8F9FA]">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div className="max-w-xl">
                        <span className="text-[#E63946] font-semibold tracking-wider uppercase mb-2 block">
                            Votre Espace Privé
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1D1D1B] leading-tight">
                            Location de Bureau Individuel à Uccle
                        </h1>
                        <p className="text-xl text-[#6C757D] mb-8 leading-relaxed">
                            Profitez du calme et de la confidentialité d'un <strong className="text-[#1D1D1B]">bureau individuel à Bruxelles</strong>. Un espace entièrement meublé, sécurisé et accessible 24h/24.
                        </p>
                        <a href="/contact" className="btn btn-primary text-base px-8 py-3 font-semibold rounded-full">
                            Voir les disponibilités
                        </a>
                    </div>
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/modernofficebuilding.webp"
                            alt="Bureau Individuel Bruxelles - Office Factory"
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
                        Un bureau clé en main
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mx-auto mb-4">
                                <Key size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Accès Privatif</h3>
                            <p className="text-sm text-[#6C757D]">Votre propre clé pour votre bureau fermé et sécurisé.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mx-auto mb-4">
                                <Layout size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Entièrement Meublé</h3>
                            <p className="text-sm text-[#6C757D]">Bureau, chaise ergonomique et rangements inclus.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mx-auto mb-4">
                                <CreditCard size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Tout Compris</h3>
                            <p className="text-sm text-[#6C757D]">Charges, internet, nettoyage et précompte immobilier inclus.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mx-auto mb-4">
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Sécurité</h3>
                            <p className="text-sm text-[#6C757D]">Système d'alarme et surveillance pour votre tranquillité.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section - Private Office Specific */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6 text-[#1D1D1B]">
                        Votre bureau privé, sans les contraintes
                    </h2>
                    <p className="text-xl text-[#6C757D] mb-8">
                        À partir de <strong className="text-[#E63946] text-2xl">249€ / mois</strong> HTVA. Contrats flexibles.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a href="/contact" className="btn btn-primary px-8 py-3 rounded-full font-semibold">
                            Contacter pour une visite
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
