import { UserCheck, Car, Clock, Package, Wifi, Users } from 'lucide-react';
import { FC } from 'react';

const FeatureItem: FC<{ icon: any, title: string, desc: string }> = ({ icon: Icon, title, desc }) => (
    <div className="flex gap-4 items-start">
        <div className="bg-red-50 text-[#E63946] p-4 rounded-xl flex-shrink-0">
            <Icon size={32} strokeWidth={2} />
        </div>
        <div>
            <h3 className="text-xl font-bold mb-2 text-[#1D1D1B]">{title}</h3>
            <p className="text-[#6C757D] leading-relaxed text-sm">
                {desc}
            </p>
        </div>
    </div>
);

const ProFeatures: FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container grid lg:grid-cols-12 gap-12">
                {/* Left Text Block */}
                <div className="lg:col-span-4 pr-8">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#1D1D1B] leading-tight">
                        Un espace pensé pour les professionnels
                    </h2>
                    <a href="/a-propos" className="btn btn-primary px-8 py-3 text-lg">
                        À propos de Office Factory
                    </a>
                </div>

                {/* Right Grid */}
                <div className="lg:col-span-8 grid md:grid-cols-2 gap-x-12 gap-y-16">
                    <FeatureItem
                        icon={UserCheck}
                        title="Réceptionniste"
                        desc="Accueil professionnel pour orienter vos clients et partenaires."
                    />
                    <FeatureItem
                        icon={Car}
                        title="Parking"
                        desc="Places de parking disponibles pour vous et vos visiteurs."
                    />
                    <FeatureItem
                        icon={Clock}
                        title="24h/24, 7j/7"
                        desc="Accès permanent à votre espace de travail, sans contrainte d'horaires."
                    />
                    <FeatureItem
                        icon={Package}
                        title="Réception Colis"
                        desc="Gestion et réception sécurisée de vos courriers et colis."
                    />
                    <FeatureItem
                        icon={Wifi}
                        title="Internet Haut Débit"
                        desc="Connexion rapide et performante pour un travail sans interruption."
                    />
                    <FeatureItem
                        icon={Users}
                        title="Salle de réunion"
                        desc="Espaces équipés pour vos rendez-vous et réunions professionnelles."
                    />
                </div>
            </div>
        </section>
    );
};

export default ProFeatures;
