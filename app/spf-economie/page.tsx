import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShieldCheck, Building, FileText, CheckCircle2 } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata = {
    title: 'Agréé SPF Économie | Centre d\'Affaires Bruxelles - Office Factory',
    description: 'Office Factory est un centre d\'affaires agréé par le SPF Économie. Garantissez la sécurité juridique de votre domiciliation selon la loi du 29 mars 2018.',
};

export default function SPFEconomiePage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-[#F8F9FA]">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div className="max-w-xl">
                        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm border border-green-200">
                            <ShieldCheck size={18} className="text-green-600" />
                            <span>Conformité d'État Garantie</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1D1D1B] leading-tight">
                            Centre d'affaires agréé par le SPF Économie
                        </h1>
                        <p className="text-xl text-[#6C757D] mb-8 leading-relaxed">
                            Pour la sécurité juridique de votre entreprise, faites le choix d'un partenaire entièrement conforme à la loi belge.
                        </p>
                        <a href="/nos-services" className="btn btn-primary text-base px-8 py-3 font-semibold rounded-full">
                            Découvrir nos offres
                        </a>
                    </div>

                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1555006666-ac288b898517?w=900&auto=format&fit=crop&q=60"
                            alt="Bâtiment officiel"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Loi du 29 Mars 2018 Section */}
            <section className="py-20 bg-white">
                <div className="container max-w-4xl text-center">
                    <h2 className="text-3xl md:text-3xl font-bold mb-8 text-[#1D1D1B]">
                        La Loi du 29 mars 2018 : Ce qu'elle exige
                    </h2>
                    <p className="text-lg text-[#6C757D] leading-relaxed mb-6">
                        Depuis l'entrée en vigueur de la <strong className="font-semibold text-[#1D1D1B]">loi du 29 mars 2018</strong> sur l'enregistrement des prestataires de services aux sociétés, tout centre d'affaires proposant la domiciliation de sièges sociaux en Belgique a l'<strong className="font-semibold text-[#1D1D1B]">obligation légale d'être enregistré et agréé par le SPF Économie</strong>.
                    </p>
                    <p className="text-lg text-[#6C757D] leading-relaxed">
                        Cette réglementation stricte a pour but de lutter contre la fraude et de garantir aux entrepreneurs un niveau élevé de professionnalisme. L'agrément n'est délivré qu'après une vérification poussée de l'honorabilité et de la capacité du prestataire.
                    </p>
                </div>
            </section>

            {/* Les Risques et Garanties */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container grid md:grid-cols-2 gap-12">
                    {/* Colonne Risques (sans agrément) */}
                    <div className="bg-white p-10 rounded-3xl border border-red-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="absolute top-0 left-0 w-2 h-full bg-red-400"></div>
                        <h3 className="text-2xl font-bold mb-6 text-[#1D1D1B] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                                <FileText size={20} />
                            </span>
                            Risques sans agrément
                        </h3>
                        <p className="text-[#6C757D] mb-6">
                            Domicilier votre société dans un centre non reconnu par le SPF Économie vous expose à des risques majeurs :
                        </p>
                        <ul className="space-y-4 text-[#6C757D]">
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1 shrink-0">—</span>
                                <div><strong className="text-[#1D1D1B]">Radiation de la BCE :</strong> Votre numéro d'entreprise peut être effacé de la Banque Carrefour des Entreprises.</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1 shrink-0">—</span>
                                <div><strong className="text-[#1D1D1B]">Refus de numéro de TVA :</strong> Les autorités fiscales peuvent bloquer votre activité.</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1 shrink-0">—</span>
                                <div><strong className="text-[#1D1D1B]">Déménagement forcé :</strong> Obligation de trouver un nouveau siège social dans l'urgence.</div>
                            </li>
                        </ul>
                    </div>

                    {/* Colonne Garanties (Office Factory) */}
                    <div className="bg-white p-10 rounded-3xl border border-green-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="absolute top-0 left-0 w-2 h-full bg-green-500"></div>
                        <h3 className="text-2xl font-bold mb-6 text-[#1D1D1B] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                                <Building size={20} />
                            </span>
                            Vos Garanties avec Office Factory
                        </h3>
                        <p className="text-[#6C757D] mb-6">
                            En tant que centre agréé, nous vous assurons une tranquillité d'esprit totale pour l'avenir de votre entreprise :
                        </p>
                        <ul className="space-y-4 text-[#6C757D]">
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 mt-1 shrink-0"><CheckCircle2 size={20} /></span>
                                <div><strong className="text-[#1D1D1B]">Conformité à 100% :</strong> Répond aux exigences de toutes les administrations belges.</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 mt-1 shrink-0"><CheckCircle2 size={20} /></span>
                                <div><strong className="text-[#1D1D1B]">Traitement sécurisé du courrier :</strong> Réception et archivage dans le respect des règles.</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 mt-1 shrink-0"><CheckCircle2 size={20} /></span>
                                <div><strong className="text-[#1D1D1B]">Partenaire de confiance :</strong> Audit régulier de nos processus et de notre dirigeant par l'État.</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#1D1D1B] text-white text-center">
                <div className="container max-w-4xl">
                    <h2 className="text-3xl md:text-3xl font-bold mb-6">Protégez votre entreprise avec une adresse certifiée</h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Ne prenez aucun risque légal pour l'avenir de votre PME ou de votre activité d'indépendant. Domiciliez-vous chez Office Factory dès aujourd'hui.
                    </p>
                    <a href="/services/domiciliation-bruxelles" className="btn bg-white text-[#1D1D1B] hover:bg-gray-100 font-semibold px-8 py-3 rounded-full text-lg">
                        Domicilier ma société
                    </a>
                </div>
            </section>

            <WhatsAppButton />
            <Footer />
        </main>
    );
}
