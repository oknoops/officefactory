import { FC } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: FC = () => {
    // Replace with the actual WhatsApp number, including country code (e.g., 32471794552)
    const phoneNumber = "32471794552";
    const defaultMessage = "Bonjour, je souhaite avoir plus d'informations.";

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-[#20b958] transition-all duration-300 flex items-center justify-center group"
            aria-label="Contactez-nous sur WhatsApp"
        >
            <MessageCircle size={32} />
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-medium ml-0 group-hover:ml-3">
                Une question ?
            </span>
        </a>
    );
};

export default WhatsAppButton;
