'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TocItem[];
  label?: string;
}

export default function TableOfContents({ items, label = 'Table of Contents' }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="hidden lg:block sticky top-32 self-start w-56 shrink-0">
      <p className="text-xs font-semibold uppercase tracking-wider text-[#6C757D] mb-4">
        {label}
      </p>
      <ul className="space-y-2 border-l-2 border-gray-200">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block pl-4 py-1 text-sm transition-colors leading-snug ${
                activeId === item.id
                  ? 'text-[#E63946] border-l-2 border-[#E63946] -ml-[2px] font-medium'
                  : 'text-[#6C757D] hover:text-[#1D1D1B]'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
