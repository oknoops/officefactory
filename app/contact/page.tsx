import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Contactez-nous | Office Factory',
    description: 'Contactez Office Factory pour votre domiciliation ou espace de bureau à Bruxelles.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <section className="pt-32 pb-20 bg-[#F8F9FA]">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#1D1D1B] text-center">
                        Contactez-nous
                    </h1>
                    {/* Wrapper for cropping Odoo header/footer */}
                    {/* Wrapper for cropping Odoo header/footer and hiding scrollbar */}
                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden relative max-w-4xl mx-auto h-[900px]">
                        <iframe
                            src="https://brusselsofficefactory.odoo.com/nous-contacter"
                            width="100%"
                            height="1800px" // Make iframe very tall to prevent internal scrolling
                            className="border-0 w-full absolute top-0 left-0"
                            style={{
                                marginTop: '-290px', // Adjusted to show top of form
                            }}
                            scrolling="no" // Deprecated but helps in some browsers
                            title="Formulaire de contact Office Factory"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
