import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShieldCheck } from 'lucide-react';

export const metadata = {
    title: 'À propos | Office Factory',
    description: 'Découvrez Office Factory, Business Center agréé à Bruxelles (Uccle) depuis plus de 35 ans.',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Hero / Intro Section */}
            <section className="pt-32 pb-20 bg-[#F8F9FA]">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="max-w-xl">
                        <span className="text-[#E63946] font-semibold tracking-wider uppercase mb-2 block">
                            Office Factory
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1D1D1B] leading-tight">
                            À propos
                        </h1>
                        <div className="prose prose-lg text-[#6C757D] leading-relaxed">
                            <p className="mb-6">
                                Office Factory est un <strong className="text-[#1D1D1B]">Business Center agréé par le SPF Économie</strong>, actif à Bruxelles depuis plus de <strong className="text-[#1D1D1B]">35 ans</strong>. Nous accompagnons les indépendants, les PME et les entreprises en croissance en leur offrant des solutions flexibles et adaptées.
                            </p>
                            <p className="mb-6">
                                Situé à <strong className="text-[#1D1D1B]">Uccle</strong>, notre centre propose une gamme complète de services incluant la location de bureaux privatifs, d'espaces partagés et de coworking. Nous comprenons les besoins des entrepreneurs d'aujourd'hui et mettons tout en œuvre pour offrir une flexibilité maximale.
                            </p>
                            <p className="mb-6">
                                En plus de l'hébergement, nous proposons un service de <strong className="text-[#1D1D1B]">domiciliation d’entreprise</strong> dans un cadre réglementé et professionnel, idéal pour établir votre siège social en toute sérénité.
                            </p>
                            <p>
                                Office Factory est fier d'être <a href="/belgian-workspace-association" className="text-[#E63946] font-semibold hover:underline">Membre de la Belgian Workspace Association (BWA)</a>. Cette adhésion garantit que nous respectons les normes les plus strictes en matière d'éthique, de qualité d'infrastructure et de services proposés dans notre secteur.
                            </p>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/modernofficebuilding.webp"
                            alt="Office Factory Building in Uccle"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-white">
                <div className="container max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1D1D1B]">
                        Notre Mission
                    </h2>
                    <p className="text-xl md:text-2xl text-[#6C757D] font-light leading-relaxed italic">
                        "Notre objectif est clair : offrir un environnement professionnel structuré, efficace et durable pour soutenir le développement de votre activité."
                    </p>
                </div>
            </section>

            {/* Stats / Features (Optional/Standard Layout Filler if needed, but keeping it simple as per request) */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container max-w-5xl">
                    <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-20 h-20 bg-green-50 rounded-full flex justify-center items-center text-green-600 shrink-0">
                            <ShieldCheck size={40} />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-4 text-[#1D1D1B]">En conformité avec la loi belge (SPF Économie)</h3>
                            <p className="text-[#6C757D] mb-4">
                                Depuis la loi du 29 mars 2018, il est formellement obligatoire pour tout centre d'affaires proposant la domiciliation d'être enregistré et agréé par le <strong className="text-[#1D1D1B]">SPF Économie</strong>. Chez Office Factory, nous vous garantissons cette sécurité juridique indispensable pour éviter toute radiation de votre entreprise.
                            </p>
                            <a href="/spf-economie" className="text-[#E63946] font-semibold hover:underline flex items-center gap-2">
                                En savoir plus sur notre agrément →
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-6 text-[#1D1D1B]">
                        Prêt à rejoindre Office Factory ?
                    </h2>
                    <div className="flex gap-4 justify-center">
                        <a href="/nos-services" className="btn btn-primary px-8 py-3 rounded-full font-semibold">
                            Découvrir nos services
                        </a>
                        <a href="/contact" className="btn btn-dark px-8 py-3 rounded-full font-semibold">
                            Contactez-nous
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
