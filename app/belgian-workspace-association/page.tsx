import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Users, BookOpen, ShieldCheck } from 'lucide-react';

export const metadata = {
    title: 'Belgian Workspace Association | Office Factory',
    description: 'Office Factory est fier d\'être membre de la Belgian Workspace Association, garantissant des standards élevés de professionnalisme dans notre espace de travail.',
};

export default function BWAPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-[#F8F9FA]">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div className="max-w-xl">
                        <span className="text-[#E63946] font-semibold tracking-wider uppercase mb-2 block">
                            Partenaire Stratégique
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1D1D1B] leading-tight">
                            Belgian Workspace Association
                        </h1>
                        <p className="text-xl text-[#6C757D] mb-8 leading-relaxed">
                            Nous sommes fiers d'être membres de la BWA. Cette association représente, informe et défend le secteur des espaces de travail en Belgique.
                        </p>
                        <a href="https://belgianworkspaceassociation.be/" target="_blank" rel="noopener noreferrer" className="btn btn-primary text-base px-8 py-3 font-semibold rounded-full">
                            Visiter le site officiel
                        </a>
                    </div>
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl bg-white flex items-center justify-center border border-gray-100 p-12">
                        <div className="relative w-full h-full max-w-sm mx-auto">
                            <Image
                                src="/logo-BWA.webp"
                                alt="Belgian Workspace Association Logo"
                                fill
                                style={{ objectFit: 'contain' }}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Qu'est-ce que la BWA */}
            <section className="py-20 bg-white">
                <div className="container max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1D1D1B]">
                        Garantie de qualité et de professionnalisme
                    </h2>
                    <p className="text-lg text-[#6C757D] leading-relaxed mb-6">
                        La Belgian Workspace Association rassemble les acteurs professionnels de l'industrie des espaces de travail flexibles et du coworking en Belgique. En tant que membre, Office Factory s'engage à respecter les normes les plus strictes en matière d'éthique, de qualité d'infrastructure et de services proposés à ses clients.
                    </p>
                    <p className="text-lg text-[#6C757D] leading-relaxed">
                        Faire partie de la BWA signifie que nous avons signé un Code de Conduite et de Bonnes Pratiques, garantissant ainsi à nos membres un environnement de travail sécurisé, professionnel et orienté vers l'avenir.
                    </p>
                </div>
            </section>

            {/* Missions de la BWA */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-[#1D1D1B]">Les missions de l'association</h2>
                        <p className="text-[#6C757D] max-w-2xl mx-auto text-lg">
                            La BWA s'engage au quotidien pour structurer et promouvoir notre secteur.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-red-50 text-[#E63946] rounded-full flex items-center justify-center mb-6">
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-[#1D1D1B]">Promouvoir et protéger</h3>
                            <p className="text-[#6C757D]">
                                Promouvoir et protéger la profession au sein de l'industrie immobilière et des affaires.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-red-50 text-[#E63946] rounded-full flex items-center justify-center mb-6">
                                <Target size={32} />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-[#1D1D1B]">Normes et éthique</h3>
                            <p className="text-[#6C757D]">
                                Déterminer les standards de qualité pour présenter une liste de membres sélectionnés pour leur dynamisme.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-red-50 text-[#E63946] rounded-full flex items-center justify-center mb-6">
                                <Users size={32} />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-[#1D1D1B]">Porte-parole officiel</h3>
                            <p className="text-[#6C757D]">
                                Être le contact officiel auprès des autorités nationales et régionales ainsi que des médias.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-red-50 text-[#E63946] rounded-full flex items-center justify-center mb-6">
                                <BookOpen size={32} />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-[#1D1D1B]">Innovation</h3>
                            <p className="text-[#6C757D]">
                                Servir de plateforme pour l'innovation, l'amélioration des produits et le partage d'expertise entre membres.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white text-center">
                <div className="container max-w-3xl">
                    <h2 className="text-3xl font-bold mb-6 text-[#1D1D1B]">
                        Venez découvrir notre centre certifié
                    </h2>
                    <p className="text-[#6C757D] mb-8 text-lg">
                        En choisissant Office Factory, vous optez pour la fiabilité d'un centre d'affaires membre de la BWA.
                    </p>
                    <a href="/nos-services" className="btn btn-primary px-8 py-3 rounded-full text-lg font-semibold inline-block">
                        Voir nos offres
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
