import { FC } from 'react';

const MapSection: FC = () => {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1D1D1B]">
                        Notre localisation
                    </h2>
                    <p className="text-lg text-[#6C757D]">
                        842 Chaussée d'Alsemberg, 1180 Uccle, Belgique
                    </p>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-sm h-[400px] w-full border border-gray-100">
                    <iframe
                        src="https://maps.google.com/maps?q=842%20Chaussée%20d'Alsemberg,%201180%20Uccle,%20Belgique&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Carte de localisation Office Factory"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
