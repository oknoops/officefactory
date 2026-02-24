import { Users, FileText, User } from 'lucide-react';
import { FC } from 'react';

const Benefits: FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#1D1D1B]">
                    Un espace. Plusieurs façon de travailler.
                </h2>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* Benefit 1 */}
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center mb-6">
                            <Users size={48} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Un jour pour la team</h3>
                        <p className="text-[#6C757D] leading-relaxed max-w-sm">
                            Nous fournissons des stratégies de consultation sur mesure qui répondent à vos défis et objectifs uniques, afin de garantir des résultats efficaces et pratiques.
                        </p>
                    </div>

                    {/* Benefit 2 */}
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center mb-6">
                            <FileText size={48} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Un jour pour l'admin</h3>
                        <p className="text-[#6C757D] leading-relaxed max-w-sm">
                            Nos consultants vous offrent un soutien continu et des conseils d'experts, et vous guident à travers chaque phase de votre projet avec une attention personnalisée.
                        </p>
                    </div>

                    {/* Benefit 3 */}
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center mb-6">
                            <User size={48} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Un jour pour vous</h3>
                        <p className="text-[#6C757D] leading-relaxed max-w-sm">
                            Bénéficiez d'informations de pointe et d'une expertise sectorielle qui vous donnent un avantage stratégique et améliorent votre processus de prise de décision.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
