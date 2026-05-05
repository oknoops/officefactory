import Image from 'next/image';
import { Link } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { urlForImage, type PostFull } from '@/lib/sanity';
import { SITE_URL } from '@/lib/seo';
import ShareButtons from './ShareButtons';

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-[#6C757D] leading-relaxed mb-4">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-[#1D1D1B] mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-[#1D1D1B] mt-8 mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold text-[#1D1D1B] mt-6 mb-2">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#E63946] pl-4 italic text-[#6C757D] my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 text-[#6C757D] space-y-2 mb-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 text-[#6C757D] space-y-2 mb-4">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-[#1D1D1B]">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 text-[#1D1D1B] px-1.5 py-0.5 rounded text-sm">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const href: string = value?.href ?? '#';
      const external = /^https?:\/\//i.test(href);
      return (
        <a
          href={href}
          className="text-[#E63946] underline hover:no-underline"
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const src = urlForImage(value).width(1200).auto('format').url();
      return (
        <figure className="my-8">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden">
            <Image
              src={src}
              alt={value.alt ?? ''}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
          {value.caption ? (
            <figcaption className="text-xs text-[#6C757D] text-center mt-2">
              {value.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
  },
};

export default async function SanityPostContent({
  post,
  locale,
}: {
  post: PostFull;
  locale: string;
}) {
  const tBlog = await getTranslations({ locale, namespace: 'BlogPage' });

  const formattedDate = new Date(post.publishedAt).toLocaleDateString(
    locale === 'fr' ? 'fr-BE' : locale === 'nl' ? 'nl-BE' : 'en-GB',
    { year: 'numeric', month: 'long', day: 'numeric' },
  );

  const cover = post.coverImage;
  const coverSrc = cover
    ? urlForImage(cover).width(1200).height(600).fit('crop').auto('format').url()
    : null;
  const coverAlt = cover?.alt ?? post.title;
  const postUrl = `${SITE_URL}/${locale}/blog/${post.slug}`;

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <div className="pt-28 pb-4 bg-[#F8F9FA]">
        <div className="container">
          <nav className="flex items-center text-sm text-[#6C757D]">
            <Link href="/" className="hover:text-[#E63946] transition-colors">
              {tBlog('breadcrumb_home')}
            </Link>
            <ChevronRight size={14} className="mx-2" />
            <Link href="/blog" className="hover:text-[#E63946] transition-colors">
              {tBlog('breadcrumb_blog')}
            </Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-[#1D1D1B] font-medium truncate max-w-[200px] md:max-w-none">
              {post.title}
            </span>
          </nav>
        </div>
      </div>

      {coverSrc ? (
        <div className="bg-[#F8F9FA] pb-20">
          <div className="container max-w-2xl mx-auto">
            <div className="relative aspect-[2/1] w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={coverSrc}
                alt={coverAlt}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}

      <div className="container mt-10 pb-12">
        <article className="max-w-3xl w-full mx-auto pt-8">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-sm text-[#6C757D]">{formattedDate}</span>
            {post.readingTimeMinutes ? (
              <>
                <span className="text-sm text-[#6C757D]">·</span>
                <span className="text-sm text-[#6C757D]">{post.readingTimeMinutes} min</span>
              </>
            ) : null}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#1D1D1B] mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-[#6C757D] leading-relaxed mb-10">{post.excerpt}</p>

          <div className="prose prose-lg max-w-none">
            {post.body ? <PortableText value={post.body} components={components} /> : null}
          </div>

          <div className="border-t border-b border-gray-200 py-6 my-12">
            <ShareButtons url={postUrl} title={post.title} />
          </div>
        </article>
      </div>

      <section className="py-20 bg-[#1D1D1B]">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white">{tBlog('cta_title')}</h2>
          <p className="text-lg text-gray-300 mb-8">{tBlog('cta_text')}</p>
          <Link
            href="/contact"
            className="btn btn-primary px-8 py-3 rounded-full font-semibold inline-block"
          >
            {tBlog('cta_btn')}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
