'use client'

import { flowId } from '@/lib/constants';
import { Descope } from '@descope/nextjs-sdk';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Login() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const chatMode = searchParams.get('chatMode');

    return (
        <Descope
            flowId={flowId}
            onSuccess={() => router.push(`/${chatMode ? `?chatMode=${chatMode}` : ''}`)}
        />
    );
}
