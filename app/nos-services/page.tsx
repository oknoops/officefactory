import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata = {
    title: 'Nos Services | Office Factory',
    description: 'Découvrez nos services à Bruxelles : domiciliation d’entreprise, coworking, bureau partagé et bureau individuel à Uccle.',
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-[#F8F9FA]">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="max-w-xl">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#1D1D1B] leading-tight">
                            Nos services
                        </h1>
                        <p className="text-xl text-[#6C757D] mb-8 leading-relaxed">
                            Découvrez nos services à Bruxelles : domiciliation d’entreprise dès 79€, coworking, bureau partagé et bureau individuel à Uccle.
                        </p>
                        <a href="/contact" className="btn btn-primary text-base px-8 py-3 font-semibold rounded-full">
                            Nous Contacter
                        </a>
                    </div>

                    {/* Right Image */}
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1765366417077-dc1a6fbd5e34?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByaXZhdGUlMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D"
                            alt="Office Factory Building"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Service 1: Domiciliation */}
            <section className="py-20">
                <div className="container grid md:grid-cols-2 gap-16 items-center">
                    {/* Image (Left) */}
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-lg order-2 md:order-1">
                        <Image
                            src="https://images.unsplash.com/photo-1708961462805-9949475ea462?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFpbGJveHxlbnwwfHwwfHx8MA%3D%3D"
                            alt="Boîtes aux lettres domiciliation"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content (Right) */}
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1D1D1B]">
                            Domiciliation d'entreprises à Bruxelles
                        </h2>
                        <p className="text-[#6C757D] mb-6 leading-relaxed">
                            Établissez votre <strong className="font-semibold text-[#1D1D1B]">siège social à Bruxelles</strong> grâce à notre service de <strong className="font-semibold text-[#1D1D1B]">domiciliation d’entreprise à Bruxelles</strong>, conforme et reconnu. Adresse professionnelle à Uccle, idéale pour renforcer votre crédibilité et répondre aux obligations légales.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">Adresse officielle pour votre société</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">Business Center agréé SPF Économie</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">Réception du courrier</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">Accès aux salles de réunion (en option)</span>
                            </li>
                        </ul>
                        <div className="font-bold text-xl text-[#1D1D1B]">
                            À partir de 79€/mois
                        </div>
                        <div className="mt-4">
                            <a href="/services/domiciliation-bruxelles" className="text-[#E63946] font-semibold hover:underline">
                                En savoir plus →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service 2: Coworking */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container grid md:grid-cols-2 gap-16 items-center">
                    {/* Content (Left) */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1D1D1B]">
                            Espace Coworking à Bruxelles
                        </h2>
                        <p className="text-[#6C757D] mb-6 leading-relaxed">
                            Accédez à un <strong className="font-semibold text-[#1D1D1B]">espace coworking à Bruxelles</strong> adapté aux indépendants et entrepreneurs. Solution flexible pour travailler dans un environnement professionnel, sans engagement lourd.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">Accès 24h/24 – 7j/7</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">WiFi & internet haut débit</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">Accès aux espaces communs</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">Réception colis</span>
                            </li>
                        </ul>
                        <div className="font-bold text-xl text-[#1D1D1B]">
                            À partir de 149€/mois
                        </div>
                        <div className="mt-4">
                            <a href="/services/coworking-bruxelles" className="text-[#E63946] font-semibold hover:underline">
                                En savoir plus →
                            </a>
                        </div>
                    </div>

                    {/* Image (Right) */}
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-lg">
                        <Image
                            src="https://plus.unsplash.com/premium_photo-1684769161054-2fa9a998dcb6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y293b3JraW5nfGVufDB8fDB8fHww"
                            alt="Espace Coworking"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Service 3: Private Office */}
            <section className="py-20">
                <div className="container grid md:grid-cols-2 gap-16 items-center">
                    {/* Image (Left) */}
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-lg order-2 md:order-1">
                        <Image
                            src="https://plus.unsplash.com/premium_photo-1723823035067-adef00deb8ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHByaXZhdGUlMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D"
                            alt="Bureau individuel"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content (Right) */}
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1D1D1B]">
                            Bureau individuel à Bruxelles
                        </h2>
                        <p className="text-[#6C757D] mb-6 leading-relaxed">
                            Besoin d’un espace privé ? Notre <strong className="font-semibold text-[#1D1D1B]">location de bureau à Bruxelles</strong> vous permet de travailler en toute tranquillité dans un <strong className="font-semibold text-[#1D1D1B]">bureau individuel à Bruxelles</strong>.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">Espace privé fermé</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">Accès 24/7</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">Internet haut débit</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">Possibilité de domiciliation entreprise Bruxelles</span>
                            </li>
                        </ul>
                        <div className="font-bold text-xl text-[#1D1D1B]">
                            À partir de 249€/mois
                        </div>
                        <div className="mt-4">
                            <a href="/services/bureau-individuel-bruxelles" className="text-[#E63946] font-semibold hover:underline">
                                En savoir plus →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service 4: Team Office */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container grid md:grid-cols-2 gap-16 items-center">
                    {/* Content (Left) */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1D1D1B]">
                            Bureau d’équipe à Bruxelles
                        </h2>
                        <p className="text-[#6C757D] mb-6 leading-relaxed">
                            Installez votre société dans un <strong className="font-semibold text-[#1D1D1B]">bureau d'équipe à Bruxelles</strong>, adapté aux PME et sociétés en croissance. Solution idéale pour une <strong className="font-semibold text-[#1D1D1B]">location bureau Bruxelles</strong> avec flexibilité.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">Espace dédié pour votre équipe</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">Salle de réunion disponible</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">Accès 24/7</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">Possibilité de domiciliation société Bruxelles</span>
                            </li>
                        </ul>
                        <div className="font-bold text-xl text-[#1D1D1B]">
                            À partir de : prix sur demande
                        </div>
                        <div className="mt-4">
                            <a href="/services/bureau-equipe-bruxelles" className="text-[#E63946] font-semibold hover:underline">
                                En savoir plus →
                            </a>
                        </div>
                    </div>

                    {/* Image (Right) */}
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2ZmaWNlfGVufDB8fDB8fHww"
                            alt="Bureau d'équipe"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Service 5: Démarches Administratives */}
            <section className="py-20">
                <div className="container grid md:grid-cols-2 gap-16 items-center">
                    {/* Image (Left) */}
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-lg order-2 md:order-1">
                        <Image
                            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=900&auto=format&fit=crop&q=60"
                            alt="Démarches administratives"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content (Right) */}
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1D1D1B]">
                            Démarches administratives
                        </h2>
                        <p className="text-[#6C757D] mb-6 leading-relaxed">
                            Nous vous accompagnons dans toutes les <strong className="font-semibold text-[#1D1D1B]">démarches administratives et juridiques</strong> liées à la vie de votre société en Belgique (création, modification, fermeture).
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">Création d'entreprise & statuts</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">Modification de société</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">Fermeture et liquidation</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">Gain de temps et tranquillité d'esprit</span>
                            </li>
                        </ul>
                        <div className="font-bold text-xl text-[#1D1D1B]">
                            Sur devis
                        </div>
                        <div className="mt-4">
                            <a href="/services/demarches-administratives" className="text-[#E63946] font-semibold hover:underline">
                                En savoir plus →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-20 bg-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute right-0 top-0 w-full md:w-2/3 h-full bg-[#E63946] transform md:-skew-x-12 md:translate-x-20"></div>
                </div>

                <div className="container relative z-10 grid md:grid-cols-2 gap-8 items-center text-white">
                    <div className="md:col-start-2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Votre bureau ou siège social à Bruxelles commence ici
                        </h2>
                        <p className="text-white/90 mb-8 text-lg">
                            Location de bureau, coworking et domiciliation société Bruxelles à Uccle.
                        </p>
                        <a href="/contact" className="inline-block bg-white text-[#E63946] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
                            Plus d'infos
                        </a>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container max-w-4xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1D1D1B]">
                        Abonnez-vous à notre newsletter
                    </h2>
                    <p className="text-[#6C757D] mb-8">
                        Soyez le premier à découvrir les dernières nouveautés, produits et tendances.
                    </p>
                    <div className="max-w-lg mx-auto">
                        <NewsletterForm />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
