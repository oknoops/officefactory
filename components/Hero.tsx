import Image from 'next/image';
import { FC } from 'react';

const Hero: FC = () => {
    return (
        <section className="pt-32 pb-20 bg-[#F8F9FA]">
            <div className="container grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="max-w-xl">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#1D1D1B] leading-tight">
                        Un cadre flexible pour un travail flexible
                    </h1>
                    <p className="text-xl text-[#6C757D] mb-8 leading-relaxed">
                        Bureaux privatifs et espaces partagés, qui s’adaptent à votre rythme
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="/nos-services" className="btn btn-primary text-base px-6 py-3 font-semibold">
                            Nos Services
                        </a>
                        <a href="/contact" className="btn btn-primary text-base px-6 py-3 font-semibold">
                            Domiciliez votre entreprise
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                    {/* Placeholder for real hero image - user to replace */}
                    <div className="relative h-full w-full">
                        <Image
                            src="/modernofficebuilding.webp"
                            alt="Office Factory Building"
                            fill
                            style={{ objectFit: "cover" }}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
