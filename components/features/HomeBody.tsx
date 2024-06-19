'use client'

import { useSession } from "@descope/nextjs-sdk/client";
import OneTapComp from "./OneTapComp";
import LogoutButton from "./LogoutButton";
import AuthenticationDialog from "./AuthenticationDialog";

export default function HomeBody() {
    const { isAuthenticated, isSessionLoading } = useSession();

    if (isSessionLoading) {
        return <p>Loading...</p>;
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <OneTapComp />
            {isAuthenticated ? <div>
                <p>Authenticated</p>
                <LogoutButton />
            </div> : <div>
                <p>Not Authenticated</p>
                <AuthenticationDialog />
            </div>}
        </main>
    );

}