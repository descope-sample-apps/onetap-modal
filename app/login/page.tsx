'use client'

import { flowId } from '@/lib/constants';
import { Descope } from '@descope/nextjs-sdk';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

export default function Login() {
    const router = useRouter();
    return <Suspense fallback={null}><LoginContent router={router} /></Suspense>;
  
}

function LoginContent({ router } : { router: AppRouterInstance }) {
    const searchParams = useSearchParams();
    const chatMode = searchParams.get('chatMode');
    return (
        <Descope
            flowId={flowId}
            onSuccess={() => router.push(`/${chatMode ? `?chatMode=${chatMode}` : ''}`)}
        />
    );
}