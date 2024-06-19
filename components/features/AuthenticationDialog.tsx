'use client'

import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Descope } from "@descope/nextjs-sdk";
import { Button } from "@/components/ui/button";
import { flowId } from "@/lib/constants";

export default function AuthenticationDialog() {
    return <Dialog>
        <DialogTrigger>
            <Button>Sign up or in</Button>
        </DialogTrigger>
        <DialogContent className="min-h-[700px]">
            <Descope
                flowId={flowId}
            />
        </DialogContent>
    </Dialog>;
}