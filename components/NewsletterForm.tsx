'use client';

import React, { FC, useState } from 'react';
import { useTranslations } from 'next-intl';

const NewsletterForm: FC = () => {
    const t = useTranslations('NewsletterForm');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email }),
            });

            if (response.ok) {
                setStatus('success');
                setMessage(t('msg_success'));
                setEmail('');
            } else {
                throw new Error('Failed to subscribe');
            }
        } catch (error) {
            console.error('Subscription error:', error);
            setStatus('error');
            setMessage(t('msg_error'));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('placeholder')}
                className="p-2 border border-gray-300 rounded bg-white text-sm focus:outline-none focus:border-[#E63946]"
                required
                disabled={status === 'loading' || status === 'success'}
            />
            <button
                type="submit"
                className="btn btn-primary text-sm py-2 disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={status === 'loading' || status === 'success'}
            >
                {status === 'loading' ? t('btn_subscribing') : t('btn_subscribe')}
            </button>

            {/* Feedback Messages */}
            {status === 'success' && (
                <p className="text-xs text-green-600 mt-1 font-medium">
                    {message}
                </p>
            )}
            {status === 'error' && (
                <p className="text-xs text-red-500 mt-1">
                    {message}
                </p>
            )}
            {status === 'idle' && (
                <p className="text-xs text-gray-400 mt-1">
                    {t('msg_idle')}
                </p>
            )}
        </form>
    );
};

export default NewsletterForm;
