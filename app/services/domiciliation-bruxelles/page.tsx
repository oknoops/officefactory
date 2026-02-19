import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';

export const metadata = {
    title: 'Domiciliation Société Bruxelles | Siège Social Uccle | Office Factory',
    description: 'Domiciliez votre entreprise à Bruxelles chez Office Factory. Adresse professionnelle à Uccle pour votre siège social, conforme et agréé.',
    keywords: 'domiciliation société Bruxelles, domiciliation entreprise Bruxelles, siège social Bruxelles, location bureau Uccle',
};

export default function DomiciliationPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-[#F8F9FA]">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div className="max-w-xl">
                        <span className="text-[#E63946] font-semibold tracking-wider uppercase mb-2 block">
                            Adresse Professionnelle
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1D1D1B] leading-tight">
                            Domiciliation de votre société à Bruxelles
                        </h1>
                        <p className="text-xl text-[#6C757D] mb-8 leading-relaxed">
                            Établissez votre <strong className="text-[#1D1D1B]">siège social à Bruxelles</strong> dans un Business Center agréé. Une solution flexible et économique pour les entrepreneurs et PME.
                        </p>
                        <a href="/contact" className="btn btn-primary text-base px-8 py-3 font-semibold rounded-full">
                            Demander une offre
                        </a>
                    </div>
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/modernofficebuilding.webp"
                            alt="Immeuble Office Factory Uccle - Domiciliation"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="py-20">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-12 text-[#1D1D1B] text-center">
                        Pourquoi choisir notre service de domiciliation ?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Benefit 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mb-6">
                                <Check size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[#1D1D1B]">Adresse Prestigieuse</h3>
                            <p className="text-[#6C757D]">
                                Offrez une image professionnelle à votre entreprise avec une adresse reconnue à <strong className="text-[#1D1D1B]">Uccle, Bruxelles</strong>.
                            </p>
                        </div>
                        {/* Benefit 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mb-6">
                                <Check size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[#1D1D1B]">Conformité Légale</h3>
                            <p className="text-[#6C757D]">
                                Notre centre est agréé par le SPF Économie, garantissant une <strong className="text-[#1D1D1B]">domiciliation entreprise Bruxelles</strong> 100% conforme.
                            </p>
                        </div>
                        {/* Benefit 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mb-6">
                                <Check size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[#1D1D1B]">Gestion du Courrier</h3>
                            <p className="text-[#6C757D]">
                                Nous réceptionnons et trions votre courrier quotidiennement. Option de renvoi postal ou scan par email disponible.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing / CTA */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6 text-[#1D1D1B]">
                        Tarification transparente
                    </h2>
                    <p className="text-xl text-[#6C757D] mb-8">
                        Notre service de domiciliation est accessible à partir de <strong className="text-[#E63946] text-2xl">79€ / mois</strong> HTVA.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a href="/contact" className="btn btn-primary px-8 py-3 rounded-full font-semibold">
                            Souscrire maintenant
                        </a>
                        <a href="/nos-services" className="btn btn-light px-8 py-3 rounded-full font-semibold">
                            Voir les autres services
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
