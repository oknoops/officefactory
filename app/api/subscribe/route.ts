import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        const odooWebhookUrl = 'https://brusselsofficefactory.odoo.com/web/hook/aa24e7b4-d825-4200-b65f-3351552ba6ce';

        const response = await fetch(odooWebhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        if (response.ok) {
            return NextResponse.json({ success: true, message: 'Subscribed successfully' });
        } else {
            // Odoo might return 200 even for some logic errors, but if it's 4xx/5xx:
            console.error('Odoo Webhook Error:', response.status, response.statusText);
            return NextResponse.json(
                { error: 'Failed to forward to Odoo' },
                { status: 502 }
            );
        }
    } catch (error) {
        console.error('Subscription Proxy Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
