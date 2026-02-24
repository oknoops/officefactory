import { FC } from 'react';
import { FileEdit, Briefcase, FileSignature } from 'lucide-react';

const HowItWorks: FC = () => {
    return (
        <section className="py-24 bg-[#F8F9FA] relative z-10 -mt-8 rounded-t-[3rem]">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#1D1D1B]">
                        Comment ça marche ?
                    </h2>
                    <p className="text-lg text-[#6C757D] max-w-2xl mx-auto">
                        Lancer ou domicilier votre activité n'a jamais été aussi simple. Rejoignez-nous en 3 étapes.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-0.5 bg-gray-200 z-0"></div>

                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center relative z-10">
                        <div className="w-20 h-20 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            <FileEdit size={32} />
                        </div>
                        <span className="text-sm font-bold text-[#E63946] uppercase tracking-wider mb-2">Étape 1</span>
                        <h3 className="text-2xl font-bold mb-4 text-[#1D1D1B]">Vous remplissez le formulaire.</h3>
                        <p className="text-[#6C757D] leading-relaxed max-w-sm">
                            Faites-nous part de vos besoins via notre formulaire en ligne ou par téléphone.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center relative z-10">
                        <div className="w-20 h-20 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            <Briefcase size={32} />
                        </div>
                        <span className="text-sm font-bold text-[#E63946] uppercase tracking-wider mb-2">Étape 2</span>
                        <h3 className="text-2xl font-bold mb-4 text-[#1D1D1B]">Nous nous occupons de la paperasse.</h3>
                        <p className="text-[#6C757D] leading-relaxed max-w-sm">
                            Notre équipe gère les démarches administratives, juridiques et logistiques pour vous.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center relative z-10">
                        <div className="w-20 h-20 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            <FileSignature size={32} />
                        </div>
                        <span className="text-sm font-bold text-[#E63946] uppercase tracking-wider mb-2">Étape 3</span>
                        <h3 className="text-2xl font-bold mb-4 text-[#1D1D1B]">Vous signez le contrat et c'est fait.</h3>
                        <p className="text-[#6C757D] leading-relaxed max-w-sm">
                            Tout est prêt. Il ne vous reste plus qu'à signer et à profiter de vos nouveaux services.
                        </p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <a href="/contact" className="btn btn-primary px-8 py-3 rounded-full text-lg font-semibold">
                        Commencer maintenant
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
