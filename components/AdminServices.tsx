import { FC } from 'react';

const AdminServices: FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#1D1D1B]">
                        Démarches administratives
                    </h2>
                    <p className="text-lg text-[#6C757D] max-w-2xl mx-auto">
                        Outre nos services de domiciliation et de coworking, Office Factory vous accompagne dans toutes les démarches administratives et juridiques liées à la vie de votre société, en Belgique.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Service 1 */}
                    <div className="bg-[#F8F9FA] p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-2xl font-bold mb-4 text-[#1D1D1B]">Créer une entreprise</h3>
                        <p className="text-[#6C757D] mb-6 leading-relaxed">
                            Lancez votre activité en toute sérénité : statuts, plan financier, notaire, BCE, TVA, UBO... On s'occupe de tout.
                        </p>
                        <a href="/contact" className="text-[#E63946] font-semibold hover:underline">
                            Découvrir le service →
                        </a>
                    </div>

                    {/* Service 2 */}
                    <div className="bg-[#F8F9FA] p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-2xl font-bold mb-4 text-[#1D1D1B]">Modifier une entreprise</h3>
                        <p className="text-[#6C757D] mb-6 leading-relaxed">
                            Votre société évolue ? Nous vous aidons à modifier vos statuts, objet social, siège, UBO, avec publication au Moniteur Belge.
                        </p>
                        <a href="/contact" className="text-[#E63946] font-semibold hover:underline">
                            Voir nos services de modification →
                        </a>
                    </div>

                    {/* Service 3 */}
                    <div className="bg-[#F8F9FA] p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-2xl font-bold mb-4 text-[#1D1D1B]">Fermer une entreprise</h3>
                        <p className="text-[#6C757D] mb-6 leading-relaxed">
                            Fin d'activité ? Nous vous accompagnons pour la dissolution ou liquidation de votre société.
                        </p>
                        <a href="/contact" className="text-[#E63946] font-semibold hover:underline">
                            En savoir plus →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminServices;
