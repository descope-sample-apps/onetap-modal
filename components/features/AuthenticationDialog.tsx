'use client'

import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Descope } from "@descope/nextjs-sdk";
import { Button } from "@/components/ui/button";
import { flowId } from "@/lib/constants";
import { useSearchParams } from 'next/navigation';

export default function AuthenticationDialog() {
    const [isOpen, setIsOpen] = useState(false);

    const searchParams = useSearchParams();
    const chatMode = searchParams.get('chatMode');

    const getRedirectUrl = () => {
        return `${window.location.origin}/login?${chatMode ? `chatMode=${chatMode}` : ''}`;
    }
    <Descope flowId={flowId} redirectUrl={getRedirectUrl()} />

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button>Sign up or in</Button>
            </DialogTrigger>
            <DialogContent className="min-h-[700px]">
                <Descope flowId={flowId} redirectUrl={getRedirectUrl()} />
            </DialogContent>
        </Dialog>
    );
}
