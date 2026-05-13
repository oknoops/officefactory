import { Link } from '@/i18n/routing';
import { BookOpenCheck, ArrowRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

type Variant = 'banner' | 'compact';

interface PillarHubLinkProps {
  locale: string;
  variant?: Variant;
}

export default async function PillarHubLink({ locale, variant = 'banner' }: PillarHubLinkProps) {
  const t = await getTranslations({ locale, namespace: 'PillarHubLink' });

  if (variant === 'compact') {
    return (
      <div className="my-8 rounded-2xl border border-[#E63946]/20 bg-[#FEF2F3] p-5 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-[#E63946] text-white flex items-center justify-center shrink-0">
          <BookOpenCheck size={20} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-[#6C757D] mb-1">{t('eyebrow')}</p>
          <Link
            href="/guide-domiciliation-bruxelles"
            className="text-[#1D1D1B] font-semibold hover:text-[#E63946] flex items-center gap-2"
          >
            {t('title')}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 bg-white">
      <div className="container max-w-4xl">
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-[#FEF2F3] to-white p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="w-16 h-16 rounded-2xl bg-[#E63946] text-white flex items-center justify-center shrink-0">
            <BookOpenCheck size={32} />
          </div>
          <div className="flex-1">
            <p className="text-[#E63946] font-semibold uppercase tracking-wider text-sm mb-2">
              {t('eyebrow')}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-[#1D1D1B] mb-3 leading-tight">
              {t('title')}
            </h3>
            <p className="text-[#6C757D] mb-4 leading-relaxed">{t('description')}</p>
            <Link
              href="/guide-domiciliation-bruxelles"
              className="inline-flex items-center gap-2 text-[#E63946] font-semibold hover:underline"
            >
              {t('cta')}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
