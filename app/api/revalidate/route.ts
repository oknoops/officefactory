import { revalidatePath } from 'next/cache';
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return new Response('Missing SANITY_REVALIDATE_SECRET', { status: 500 });
  }

  const signature = req.headers.get(SIGNATURE_HEADER_NAME);
  if (!signature) return new Response('Missing signature', { status: 401 });

  const body = await req.text();
  const valid = await isValidSignature(body, signature, secret);
  if (!valid) return new Response('Invalid signature', { status: 401 });

  revalidatePath('/[locale]/blog', 'page');
  revalidatePath('/[locale]/blog/[slug]', 'page');
  revalidatePath('/sitemap.xml');

  return Response.json({ revalidated: true, now: Date.now() });
}
