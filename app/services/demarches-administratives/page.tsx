import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, Edit, XCircle, Check } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata = {
    title: 'Démarches Administratives | Office Factory Bruxelles',
    description: 'Office Factory vous accompagne dans la création, modification, ou fermeture de votre entreprise en Belgique. Laissez-nous gérer la paperasse.',
    keywords: 'création entreprise, modification entreprise, fermeture entreprise, démarches administratives Bruxelles, Office Factory',
};

export default function DemarchesAdministrativesPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-[#F8F9FA]">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div className="max-w-xl">
                        <span className="text-[#E63946] font-semibold tracking-wider uppercase mb-2 block">
                            Assistance Juridique & Administrative
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1D1D1B] leading-tight">
                            Démarches administratives pour votre société
                        </h1>
                        <p className="text-xl text-[#6C757D] mb-8 leading-relaxed">
                            Outre nos services de domiciliation et de coworking, Office Factory vous accompagne dans toutes les démarches administratives et juridiques liées à la vie de votre société, en Belgique.
                        </p>
                        <a href="/contact" className="btn btn-primary text-base px-8 py-3 font-semibold rounded-full">
                            Nous confier vos démarches
                        </a>
                    </div>
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=900&auto=format&fit=crop&q=60"
                            alt="Documents administratifs et bureau"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Services Detailed Sections */}

            {/* 1. Création */}
            <section className="py-20">
                <div className="container grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 relative h-[350px] rounded-3xl overflow-hidden shadow-lg">
                        <Image src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=900&auto=format&fit=crop&q=60" fill className="object-cover" alt="Créer une entreprise" />
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="w-16 h-16 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center mb-6">
                            <FileText size={32} />
                        </div>
                        <h2 className="text-3xl font-bold mb-6 text-[#1D1D1B]">Créer une entreprise</h2>
                        <p className="text-[#6C757D] mb-6 leading-relaxed">
                            Lancez votre activité en toute sérénité sans vous perdre dans le labyrinthe des obligations légales belges. De la rédaction des statuts à l'inscription à la BCE, nous prenons tout en charge.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3"><span className="text-[#E63946] mt-1"><Check size={20} /></span><span className="text-[#1D1D1B]">Rédaction des statuts & passage chez le notaire</span></li>
                            <li className="flex items-start gap-3"><span className="text-[#E63946] mt-1"><Check size={20} /></span><span className="text-[#1D1D1B]">Aide à l'élaboration du plan financier</span></li>
                            <li className="flex items-start gap-3"><span className="text-[#E63946] mt-1"><Check size={20} /></span><span className="text-[#1D1D1B]">Inscription BCE, TVA, et déclaration UBO</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 2. Modification */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="w-16 h-16 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center mb-6">
                            <Edit size={32} />
                        </div>
                        <h2 className="text-3xl font-bold mb-6 text-[#1D1D1B]">Modifier une entreprise</h2>
                        <p className="text-[#6C757D] mb-6 leading-relaxed">
                            Votre société évolue, déménage ou change de dirigeants ? Nous rédigeons et effectuons les publications officielles nécessaires pour que votre structure soit toujours à jour légalement.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3"><span className="text-[#E63946] mt-1"><Check size={20} /></span><span className="text-[#1D1D1B]">Changement de siège social (domiciliation)</span></li>
                            <li className="flex items-start gap-3"><span className="text-[#E63946] mt-1"><Check size={20} /></span><span className="text-[#1D1D1B]">Modification de l'objet social</span></li>
                            <li className="flex items-start gap-3"><span className="text-[#E63946] mt-1"><Check size={20} /></span><span className="text-[#1D1D1B]">Mise à jour UBO & Moniteur Belge</span></li>
                        </ul>
                    </div>
                    <div className="relative h-[350px] rounded-3xl overflow-hidden shadow-lg">
                        <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&auto=format&fit=crop&q=60" fill className="object-cover" alt="Modifier une entreprise" />
                    </div>
                </div>
            </section>

            {/* 3. Fermeture */}
            <section className="py-20">
                <div className="container grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 relative h-[350px] rounded-3xl overflow-hidden shadow-lg">
                        <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&auto=format&fit=crop&q=60" fill className="object-cover" alt="Fermer une entreprise" />
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="w-16 h-16 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center mb-6">
                            <XCircle size={32} />
                        </div>
                        <h2 className="text-3xl font-bold mb-6 text-[#1D1D1B]">Fermer une entreprise</h2>
                        <p className="text-[#6C757D] mb-6 leading-relaxed">
                            Mettre fin à une activité requiert le respect de procédures strictes. Nous vous accompagnons pour dissoudre et liquider votre société dans les règles de l'art, afin de fermer ce chapitre proprement.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3"><span className="text-[#E63946] mt-1"><Check size={20} /></span><span className="text-[#1D1D1B]">Préparation des assemblées générales</span></li>
                            <li className="flex items-start gap-3"><span className="text-[#E63946] mt-1"><Check size={20} /></span><span className="text-[#1D1D1B]">Coordination avec le liquidateur & publications</span></li>
                            <li className="flex items-start gap-3"><span className="text-[#E63946] mt-1"><Check size={20} /></span><span className="text-[#1D1D1B]">Radiation des registres (TVA, BCE)</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#E63946] text-white text-center">
                <div className="container max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Gagnez du temps, confiez-nous vos formalités !</h2>
                    <p className="text-xl opacity-90 mb-8">
                        Nos experts s'occupent de toute la paperasse pour que vous puissiez vous concentrer sur votre business.
                    </p>
                    <a href="/contact" className="btn bg-white text-[#E63946] hover:bg-gray-100 font-semibold px-8 py-3 rounded-full text-lg">
                        Prendre contact
                    </a>
                </div>
            </section>

            <WhatsAppButton />
            <Footer />
        </main>
    );
}
